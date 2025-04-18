import Users from "../config/database.js";
import {
  createUserValidation,
  updateUserValidation,
} from "../validations/users.validation.js";
import nodemailer from "nodemailer";
import { totp } from "otplib";
import bcrypt from "bcrypt";
import fs from "fs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import path from "path";

dotenv.config();
const TOTP_KEY = process.env.SECRET_KEY;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

totp.options = { step: 1800, digits: 6 };

const deleteOldImage = (imgPath) => {
  if (imgPath) {
    const fullPath = path.join("uploads", imgPath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
};

async function register(req, res) {
  try {
    const body = req.body;

    let findUser = await User.findOne({ where: { email: body.email } });
    if (findUser) {
      return res
        .status(405)
        .send({ message: "This account already exists ❗" });
    }

    const { error, value } = createUserValidation(body);
    if (error) {
      return res.status(422).send({ message: error.details[0].message });
    }

    value.password = await bcrypt.hash(body.password, 10);
    const registered = await User.create(value);

    let otp = totp.generate(`${TOTP_KEY}${body.email}`);
    await transporter.sendMail({
      to: body.email,
      subject: "One-time password",
      html: `This is an OTP to activate your account: <h1>${otp}</h1>`,
    });

    res.status(200).send({
      message:
        "Registered successfully ✅. We sent OTP to your email for activation",
      data: registered,
    });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      return res.status(405).send({ message: "Email is incorrect ❗" });
    }

    let checkOtp = totp.verify({ token: otp, secret: `${TOTP_KEY}${email}` });
    if (!checkOtp) {
      return res.status(403).send({ message: "OTP is incorrect ❗" });
    }

    if (findUser.status === "Inactive") {
      await User.update({ status: "Active" }, { where: { email } });
    }

    res
      .status(200)
      .send({ message: "Your account has been activated successfully" });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(422).send({ message: "Invalid email or password ❗" });
    }

    if (user.status === "Inactive") {
      return res.status(403).send({
        message: "Account not activated, You should activate your account ❗",
      });
    }

    let accessToken = await accessTokenGenereate({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    res
      .status(200)
      .send({ message: "Logged in successfully", access_token: accessToken });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function accessTokenGenereate(payload) {
  try {
    let accessSecret = process.env.ACCESS_KEY || "accessKey";
    return jwt.sign(payload, accessSecret);
  } catch (error) {
    console.log(error.message);
  }
}

async function promoteToAdmin(req, res) {
  try {
    const role = "Admin";
    let { id } = req.params;
    await User.update({ role }, { where: { id } });
    res.status(200).send({ message: "Updated successfully" });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function findAll(req, res) {
  try {
    let { role } = req.user;
    role = Array.isArray(role) ? role : [role];

    if (role.includes("Admin")) {
      let findAllUsers = await User.findAll({
        attributes: [
          "id",
          "fullName",
          "email",
          "role",
          "avatar",
          "status",
          "createdAt",
          "updatedAt",
          "phone",
          "location",
          "regionID",
        ],
      });
      return res.status(200).send({ data: findAllUsers });
    }

    if (role.includes("SuperAdmin")) {
      return res
        .status(403)
        .send({ message: "SuperAdmin can only update users, not view all ❗" });
    }

    if (role.includes("User")) {
      let findUser = await User.findByPk(req.user.id, {
        attributes: [
          "id",
          "fullName",
          "email",
          "role",
          "avatar",
          "status",
          "createdAt",
          "updatedAt",
          "phone",
          "location",
          "regionID",
        ],
      });
      if (!findUser) {
        return res.status(404).send({ message: "User not found ❗" });
      }
      return res.status(200).send({ data: findUser });
    }

    res.status(403).send({ message: "Unauthorized user type ❗" });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}
async function findOne(req, res) {
  try {
    const { id } = req.params;
    let user = await User.findByPk(id, {
      attributes: [
        "id",
        "fullName",
        "email",
        "role",
        "avatar",
        "status",
        "createdAt",
        "updatedAt",
        "phone",
        "location",
        "regionID",
      ],
    });
    if (!user) return res.status(404).send({ message: "User not found ❗" });
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { error, value } = updateUserValidation(req.body);
    if (error)
      return res.status(422).send({ message: error.details[0].message });
    if (value.password) value.password = await bcrypt.hash(value.password, 10);

    if (req.user.role !== "SuperAdmin") {
      return res
        .status(403)
        .send({ message: "Only SuperAdmin can update users ❗" });
    }

    let updatedUser = await User.update(value, { where: { id } });
    if (!updatedUser[0])
      return res.status(404).send({ message: "User not found ❗️" });
    let result = await User.findByPk(id, {
      attributes: [
        "id",
        "fullName",
        "email",
        "phone",
        "role",
        "avatar",
        "status",
        "createdAt",
        "updatedAt",
        "location",
        "regionID",
      ],
    });
    res
      .status(200)
      .send({ message: "User updated successfully", data: result });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    let findUser = await User.findByPk(id);
    if (!findUser)
      return res.status(404).send({ message: "User not found ❗" });

    let deletedUser = await User.destroy({
      where: { id, role: { [Op.in]: ["User"] } },
    });
    if (!deletedUser)
      return res.status(403).send({ message: "Only users can be deleted ❗" });

    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send({ error_message: error.message });
  }
}

export {
  register,
  verifyOtp,
  login,
  findOne,
  findAll,
  update,
  remove,
  promoteToAdmin,
  deleteOldImage,
};
