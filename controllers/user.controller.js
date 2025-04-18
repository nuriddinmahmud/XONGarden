import User from "../models/user.model.js";
import {
  createUserValidation,
  updateUserValidation,
} from "../validations/user.joi.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function accessTokenGenerate(payload) {
  const accessSecret = process.env.ACCESS_KEY || "accessKey";
  return jwt.sign(payload, accessSecret);
}

export async function register(req, res) {
  try {
    const { error, value } = createUserValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ message: error.details[0].message });
    }

    const existing = await User.findOne({
      where: { username: value.username },
    });
    if (existing) {
      return res.status(409).json({ message: "Username already exists ❗" });
    }

    value.password = await bcrypt.hash(value.password, 10);
    const created = await User.create(value);

    res.status(201).json({
      message: "User registered successfully ✅",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials ❗" });
    }

    const token = await accessTokenGenerate({
      id: user.id,
      username: user.username,
    });

    res.status(200).json({
      message: "Login successful ✅",
      token,
    });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}

export async function findAll(req, res) {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}

export async function findOne(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ["id", "username"],
    });
    if (!user) return res.status(404).json({ message: "User not found ❗" });
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;
    const { error, value } = updateUserValidation.validate(req.body);
    if (error)
      return res.status(422).json({ message: error.details[0].message });

    if (value.password) {
      value.password = await bcrypt.hash(value.password, 10);
    }

    const updated = await User.update(value, { where: { id } });
    if (!updated[0])
      return res.status(404).json({ message: "User not found ❗" });

    const result = await User.findByPk(id, { attributes: ["id", "username"] });
    res
      .status(200)
      .json({ message: "User updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}

export async function remove(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found ❗" });

    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error_message: error.message });
  }
}
