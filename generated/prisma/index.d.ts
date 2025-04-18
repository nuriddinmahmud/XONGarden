
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model Drainage
 * 
 */
export type Drainage = $Result.DefaultSelection<Prisma.$DrainagePayload>
/**
 * Model Energy
 * 
 */
export type Energy = $Result.DefaultSelection<Prisma.$EnergyPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Tax
 * 
 */
export type Tax = $Result.DefaultSelection<Prisma.$TaxPayload>
/**
 * Model Transport
 * 
 */
export type Transport = $Result.DefaultSelection<Prisma.$TransportPayload>
/**
 * Model Repair
 * 
 */
export type Repair = $Result.DefaultSelection<Prisma.$RepairPayload>
/**
 * Model Oil
 * 
 */
export type Oil = $Result.DefaultSelection<Prisma.$OilPayload>
/**
 * Model Fertilizer
 * 
 */
export type Fertilizer = $Result.DefaultSelection<Prisma.$FertilizerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workers
 * const workers = await prisma.worker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workers
   * const workers = await prisma.worker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drainage`: Exposes CRUD operations for the **Drainage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drainages
    * const drainages = await prisma.drainage.findMany()
    * ```
    */
  get drainage(): Prisma.DrainageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.energy`: Exposes CRUD operations for the **Energy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Energy
    * const energy = await prisma.energy.findMany()
    * ```
    */
  get energy(): Prisma.EnergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tax`: Exposes CRUD operations for the **Tax** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxes
    * const taxes = await prisma.tax.findMany()
    * ```
    */
  get tax(): Prisma.TaxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transport`: Exposes CRUD operations for the **Transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transports
    * const transports = await prisma.transport.findMany()
    * ```
    */
  get transport(): Prisma.TransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repair`: Exposes CRUD operations for the **Repair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repairs
    * const repairs = await prisma.repair.findMany()
    * ```
    */
  get repair(): Prisma.RepairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oil`: Exposes CRUD operations for the **Oil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oils
    * const oils = await prisma.oil.findMany()
    * ```
    */
  get oil(): Prisma.OilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fertilizer`: Exposes CRUD operations for the **Fertilizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fertilizers
    * const fertilizers = await prisma.fertilizer.findMany()
    * ```
    */
  get fertilizer(): Prisma.FertilizerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Worker: 'Worker',
    Drainage: 'Drainage',
    Energy: 'Energy',
    Food: 'Food',
    Tax: 'Tax',
    Transport: 'Transport',
    Repair: 'Repair',
    Oil: 'Oil',
    Fertilizer: 'Fertilizer',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "worker" | "drainage" | "energy" | "food" | "tax" | "transport" | "repair" | "oil" | "fertilizer" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      Drainage: {
        payload: Prisma.$DrainagePayload<ExtArgs>
        fields: Prisma.DrainageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrainageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrainageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          findFirst: {
            args: Prisma.DrainageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrainageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          findMany: {
            args: Prisma.DrainageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>[]
          }
          create: {
            args: Prisma.DrainageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          createMany: {
            args: Prisma.DrainageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrainageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>[]
          }
          delete: {
            args: Prisma.DrainageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          update: {
            args: Prisma.DrainageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          deleteMany: {
            args: Prisma.DrainageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrainageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrainageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>[]
          }
          upsert: {
            args: Prisma.DrainageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrainagePayload>
          }
          aggregate: {
            args: Prisma.DrainageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrainage>
          }
          groupBy: {
            args: Prisma.DrainageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrainageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrainageCountArgs<ExtArgs>
            result: $Utils.Optional<DrainageCountAggregateOutputType> | number
          }
        }
      }
      Energy: {
        payload: Prisma.$EnergyPayload<ExtArgs>
        fields: Prisma.EnergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          findFirst: {
            args: Prisma.EnergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          findMany: {
            args: Prisma.EnergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>[]
          }
          create: {
            args: Prisma.EnergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          createMany: {
            args: Prisma.EnergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>[]
          }
          delete: {
            args: Prisma.EnergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          update: {
            args: Prisma.EnergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          deleteMany: {
            args: Prisma.EnergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>[]
          }
          upsert: {
            args: Prisma.EnergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          aggregate: {
            args: Prisma.EnergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnergy>
          }
          groupBy: {
            args: Prisma.EnergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnergyCountArgs<ExtArgs>
            result: $Utils.Optional<EnergyCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Tax: {
        payload: Prisma.$TaxPayload<ExtArgs>
        fields: Prisma.TaxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findFirst: {
            args: Prisma.TaxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findMany: {
            args: Prisma.TaxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          create: {
            args: Prisma.TaxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          createMany: {
            args: Prisma.TaxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          delete: {
            args: Prisma.TaxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          update: {
            args: Prisma.TaxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          deleteMany: {
            args: Prisma.TaxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          upsert: {
            args: Prisma.TaxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          aggregate: {
            args: Prisma.TaxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTax>
          }
          groupBy: {
            args: Prisma.TaxGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxCountArgs<ExtArgs>
            result: $Utils.Optional<TaxCountAggregateOutputType> | number
          }
        }
      }
      Transport: {
        payload: Prisma.$TransportPayload<ExtArgs>
        fields: Prisma.TransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findFirst: {
            args: Prisma.TransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findMany: {
            args: Prisma.TransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          create: {
            args: Prisma.TransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          createMany: {
            args: Prisma.TransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          delete: {
            args: Prisma.TransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          update: {
            args: Prisma.TransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          deleteMany: {
            args: Prisma.TransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          upsert: {
            args: Prisma.TransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          aggregate: {
            args: Prisma.TransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransport>
          }
          groupBy: {
            args: Prisma.TransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportCountArgs<ExtArgs>
            result: $Utils.Optional<TransportCountAggregateOutputType> | number
          }
        }
      }
      Repair: {
        payload: Prisma.$RepairPayload<ExtArgs>
        fields: Prisma.RepairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          findFirst: {
            args: Prisma.RepairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          findMany: {
            args: Prisma.RepairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          create: {
            args: Prisma.RepairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          createMany: {
            args: Prisma.RepairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          delete: {
            args: Prisma.RepairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          update: {
            args: Prisma.RepairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          deleteMany: {
            args: Prisma.RepairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          upsert: {
            args: Prisma.RepairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          aggregate: {
            args: Prisma.RepairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepair>
          }
          groupBy: {
            args: Prisma.RepairGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairCountArgs<ExtArgs>
            result: $Utils.Optional<RepairCountAggregateOutputType> | number
          }
        }
      }
      Oil: {
        payload: Prisma.$OilPayload<ExtArgs>
        fields: Prisma.OilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          findFirst: {
            args: Prisma.OilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          findMany: {
            args: Prisma.OilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>[]
          }
          create: {
            args: Prisma.OilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          createMany: {
            args: Prisma.OilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>[]
          }
          delete: {
            args: Prisma.OilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          update: {
            args: Prisma.OilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          deleteMany: {
            args: Prisma.OilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>[]
          }
          upsert: {
            args: Prisma.OilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OilPayload>
          }
          aggregate: {
            args: Prisma.OilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOil>
          }
          groupBy: {
            args: Prisma.OilGroupByArgs<ExtArgs>
            result: $Utils.Optional<OilGroupByOutputType>[]
          }
          count: {
            args: Prisma.OilCountArgs<ExtArgs>
            result: $Utils.Optional<OilCountAggregateOutputType> | number
          }
        }
      }
      Fertilizer: {
        payload: Prisma.$FertilizerPayload<ExtArgs>
        fields: Prisma.FertilizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FertilizerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FertilizerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          findFirst: {
            args: Prisma.FertilizerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FertilizerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          findMany: {
            args: Prisma.FertilizerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>[]
          }
          create: {
            args: Prisma.FertilizerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          createMany: {
            args: Prisma.FertilizerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FertilizerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>[]
          }
          delete: {
            args: Prisma.FertilizerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          update: {
            args: Prisma.FertilizerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          deleteMany: {
            args: Prisma.FertilizerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FertilizerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FertilizerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>[]
          }
          upsert: {
            args: Prisma.FertilizerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FertilizerPayload>
          }
          aggregate: {
            args: Prisma.FertilizerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFertilizer>
          }
          groupBy: {
            args: Prisma.FertilizerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FertilizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FertilizerCountArgs<ExtArgs>
            result: $Utils.Optional<FertilizerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    worker?: WorkerOmit
    drainage?: DrainageOmit
    energy?: EnergyOmit
    food?: FoodOmit
    tax?: TaxOmit
    transport?: TransportOmit
    repair?: RepairOmit
    oil?: OilOmit
    fertilizer?: FertilizerOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    id: number | null
    workerCount: number | null
    salaryPerOne: number | null
    totalSalary: number | null
  }

  export type WorkerSumAggregateOutputType = {
    id: number | null
    workerCount: number | null
    salaryPerOne: number | null
    totalSalary: number | null
  }

  export type WorkerMinAggregateOutputType = {
    id: number | null
    date: Date | null
    workerCount: number | null
    salaryPerOne: number | null
    totalSalary: number | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    workerCount: number | null
    salaryPerOne: number | null
    totalSalary: number | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    date: number
    workerCount: number
    salaryPerOne: number
    totalSalary: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    id?: true
    workerCount?: true
    salaryPerOne?: true
    totalSalary?: true
  }

  export type WorkerSumAggregateInputType = {
    id?: true
    workerCount?: true
    salaryPerOne?: true
    totalSalary?: true
  }

  export type WorkerMinAggregateInputType = {
    id?: true
    date?: true
    workerCount?: true
    salaryPerOne?: true
    totalSalary?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    date?: true
    workerCount?: true
    salaryPerOne?: true
    totalSalary?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    date?: true
    workerCount?: true
    salaryPerOne?: true
    totalSalary?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: number
    date: Date
    workerCount: number
    salaryPerOne: number
    totalSalary: number
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workerCount?: boolean
    salaryPerOne?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workerCount?: boolean
    salaryPerOne?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workerCount?: boolean
    salaryPerOne?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectScalar = {
    id?: boolean
    date?: boolean
    workerCount?: boolean
    salaryPerOne?: boolean
    totalSalary?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "workerCount" | "salaryPerOne" | "totalSalary", ExtArgs["result"]["worker"]>

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      workerCount: number
      salaryPerOne: number
      totalSalary: number
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {WorkerCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers and returns the data updated in the database.
     * @param {WorkerUpdateManyAndReturnArgs} args - Arguments to update many Workers.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'Int'>
    readonly date: FieldRef<"Worker", 'DateTime'>
    readonly workerCount: FieldRef<"Worker", 'Int'>
    readonly salaryPerOne: FieldRef<"Worker", 'Float'>
    readonly totalSalary: FieldRef<"Worker", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker createManyAndReturn
   */
  export type WorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker updateManyAndReturn
   */
  export type WorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
  }


  /**
   * Model Drainage
   */

  export type AggregateDrainage = {
    _count: DrainageCountAggregateOutputType | null
    _avg: DrainageAvgAggregateOutputType | null
    _sum: DrainageSumAggregateOutputType | null
    _min: DrainageMinAggregateOutputType | null
    _max: DrainageMaxAggregateOutputType | null
  }

  export type DrainageAvgAggregateOutputType = {
    id: number | null
    hoursWorked: number | null
    totalSalary: number | null
  }

  export type DrainageSumAggregateOutputType = {
    id: number | null
    hoursWorked: number | null
    totalSalary: number | null
  }

  export type DrainageMinAggregateOutputType = {
    id: number | null
    date: Date | null
    hoursWorked: number | null
    totalSalary: number | null
  }

  export type DrainageMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    hoursWorked: number | null
    totalSalary: number | null
  }

  export type DrainageCountAggregateOutputType = {
    id: number
    date: number
    hoursWorked: number
    totalSalary: number
    _all: number
  }


  export type DrainageAvgAggregateInputType = {
    id?: true
    hoursWorked?: true
    totalSalary?: true
  }

  export type DrainageSumAggregateInputType = {
    id?: true
    hoursWorked?: true
    totalSalary?: true
  }

  export type DrainageMinAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    totalSalary?: true
  }

  export type DrainageMaxAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    totalSalary?: true
  }

  export type DrainageCountAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    totalSalary?: true
    _all?: true
  }

  export type DrainageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drainage to aggregate.
     */
    where?: DrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainages to fetch.
     */
    orderBy?: DrainageOrderByWithRelationInput | DrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drainages
    **/
    _count?: true | DrainageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrainageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrainageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrainageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrainageMaxAggregateInputType
  }

  export type GetDrainageAggregateType<T extends DrainageAggregateArgs> = {
        [P in keyof T & keyof AggregateDrainage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrainage[P]>
      : GetScalarType<T[P], AggregateDrainage[P]>
  }




  export type DrainageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrainageWhereInput
    orderBy?: DrainageOrderByWithAggregationInput | DrainageOrderByWithAggregationInput[]
    by: DrainageScalarFieldEnum[] | DrainageScalarFieldEnum
    having?: DrainageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrainageCountAggregateInputType | true
    _avg?: DrainageAvgAggregateInputType
    _sum?: DrainageSumAggregateInputType
    _min?: DrainageMinAggregateInputType
    _max?: DrainageMaxAggregateInputType
  }

  export type DrainageGroupByOutputType = {
    id: number
    date: Date
    hoursWorked: number
    totalSalary: number
    _count: DrainageCountAggregateOutputType | null
    _avg: DrainageAvgAggregateOutputType | null
    _sum: DrainageSumAggregateOutputType | null
    _min: DrainageMinAggregateOutputType | null
    _max: DrainageMaxAggregateOutputType | null
  }

  type GetDrainageGroupByPayload<T extends DrainageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrainageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrainageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrainageGroupByOutputType[P]>
            : GetScalarType<T[P], DrainageGroupByOutputType[P]>
        }
      >
    >


  export type DrainageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["drainage"]>

  export type DrainageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["drainage"]>

  export type DrainageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    totalSalary?: boolean
  }, ExtArgs["result"]["drainage"]>

  export type DrainageSelectScalar = {
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    totalSalary?: boolean
  }

  export type DrainageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "hoursWorked" | "totalSalary", ExtArgs["result"]["drainage"]>

  export type $DrainagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drainage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      hoursWorked: number
      totalSalary: number
    }, ExtArgs["result"]["drainage"]>
    composites: {}
  }

  type DrainageGetPayload<S extends boolean | null | undefined | DrainageDefaultArgs> = $Result.GetResult<Prisma.$DrainagePayload, S>

  type DrainageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrainageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrainageCountAggregateInputType | true
    }

  export interface DrainageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drainage'], meta: { name: 'Drainage' } }
    /**
     * Find zero or one Drainage that matches the filter.
     * @param {DrainageFindUniqueArgs} args - Arguments to find a Drainage
     * @example
     * // Get one Drainage
     * const drainage = await prisma.drainage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrainageFindUniqueArgs>(args: SelectSubset<T, DrainageFindUniqueArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drainage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrainageFindUniqueOrThrowArgs} args - Arguments to find a Drainage
     * @example
     * // Get one Drainage
     * const drainage = await prisma.drainage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrainageFindUniqueOrThrowArgs>(args: SelectSubset<T, DrainageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drainage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageFindFirstArgs} args - Arguments to find a Drainage
     * @example
     * // Get one Drainage
     * const drainage = await prisma.drainage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrainageFindFirstArgs>(args?: SelectSubset<T, DrainageFindFirstArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drainage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageFindFirstOrThrowArgs} args - Arguments to find a Drainage
     * @example
     * // Get one Drainage
     * const drainage = await prisma.drainage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrainageFindFirstOrThrowArgs>(args?: SelectSubset<T, DrainageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drainages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drainages
     * const drainages = await prisma.drainage.findMany()
     * 
     * // Get first 10 Drainages
     * const drainages = await prisma.drainage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drainageWithIdOnly = await prisma.drainage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrainageFindManyArgs>(args?: SelectSubset<T, DrainageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drainage.
     * @param {DrainageCreateArgs} args - Arguments to create a Drainage.
     * @example
     * // Create one Drainage
     * const Drainage = await prisma.drainage.create({
     *   data: {
     *     // ... data to create a Drainage
     *   }
     * })
     * 
     */
    create<T extends DrainageCreateArgs>(args: SelectSubset<T, DrainageCreateArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drainages.
     * @param {DrainageCreateManyArgs} args - Arguments to create many Drainages.
     * @example
     * // Create many Drainages
     * const drainage = await prisma.drainage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrainageCreateManyArgs>(args?: SelectSubset<T, DrainageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drainages and returns the data saved in the database.
     * @param {DrainageCreateManyAndReturnArgs} args - Arguments to create many Drainages.
     * @example
     * // Create many Drainages
     * const drainage = await prisma.drainage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drainages and only return the `id`
     * const drainageWithIdOnly = await prisma.drainage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrainageCreateManyAndReturnArgs>(args?: SelectSubset<T, DrainageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drainage.
     * @param {DrainageDeleteArgs} args - Arguments to delete one Drainage.
     * @example
     * // Delete one Drainage
     * const Drainage = await prisma.drainage.delete({
     *   where: {
     *     // ... filter to delete one Drainage
     *   }
     * })
     * 
     */
    delete<T extends DrainageDeleteArgs>(args: SelectSubset<T, DrainageDeleteArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drainage.
     * @param {DrainageUpdateArgs} args - Arguments to update one Drainage.
     * @example
     * // Update one Drainage
     * const drainage = await prisma.drainage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrainageUpdateArgs>(args: SelectSubset<T, DrainageUpdateArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drainages.
     * @param {DrainageDeleteManyArgs} args - Arguments to filter Drainages to delete.
     * @example
     * // Delete a few Drainages
     * const { count } = await prisma.drainage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrainageDeleteManyArgs>(args?: SelectSubset<T, DrainageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drainages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drainages
     * const drainage = await prisma.drainage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrainageUpdateManyArgs>(args: SelectSubset<T, DrainageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drainages and returns the data updated in the database.
     * @param {DrainageUpdateManyAndReturnArgs} args - Arguments to update many Drainages.
     * @example
     * // Update many Drainages
     * const drainage = await prisma.drainage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drainages and only return the `id`
     * const drainageWithIdOnly = await prisma.drainage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrainageUpdateManyAndReturnArgs>(args: SelectSubset<T, DrainageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drainage.
     * @param {DrainageUpsertArgs} args - Arguments to update or create a Drainage.
     * @example
     * // Update or create a Drainage
     * const drainage = await prisma.drainage.upsert({
     *   create: {
     *     // ... data to create a Drainage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drainage we want to update
     *   }
     * })
     */
    upsert<T extends DrainageUpsertArgs>(args: SelectSubset<T, DrainageUpsertArgs<ExtArgs>>): Prisma__DrainageClient<$Result.GetResult<Prisma.$DrainagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drainages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageCountArgs} args - Arguments to filter Drainages to count.
     * @example
     * // Count the number of Drainages
     * const count = await prisma.drainage.count({
     *   where: {
     *     // ... the filter for the Drainages we want to count
     *   }
     * })
    **/
    count<T extends DrainageCountArgs>(
      args?: Subset<T, DrainageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrainageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drainage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrainageAggregateArgs>(args: Subset<T, DrainageAggregateArgs>): Prisma.PrismaPromise<GetDrainageAggregateType<T>>

    /**
     * Group by Drainage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrainageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrainageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrainageGroupByArgs['orderBy'] }
        : { orderBy?: DrainageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrainageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrainageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drainage model
   */
  readonly fields: DrainageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drainage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrainageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drainage model
   */
  interface DrainageFieldRefs {
    readonly id: FieldRef<"Drainage", 'Int'>
    readonly date: FieldRef<"Drainage", 'DateTime'>
    readonly hoursWorked: FieldRef<"Drainage", 'Float'>
    readonly totalSalary: FieldRef<"Drainage", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Drainage findUnique
   */
  export type DrainageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter, which Drainage to fetch.
     */
    where: DrainageWhereUniqueInput
  }

  /**
   * Drainage findUniqueOrThrow
   */
  export type DrainageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter, which Drainage to fetch.
     */
    where: DrainageWhereUniqueInput
  }

  /**
   * Drainage findFirst
   */
  export type DrainageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter, which Drainage to fetch.
     */
    where?: DrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainages to fetch.
     */
    orderBy?: DrainageOrderByWithRelationInput | DrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drainages.
     */
    cursor?: DrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drainages.
     */
    distinct?: DrainageScalarFieldEnum | DrainageScalarFieldEnum[]
  }

  /**
   * Drainage findFirstOrThrow
   */
  export type DrainageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter, which Drainage to fetch.
     */
    where?: DrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainages to fetch.
     */
    orderBy?: DrainageOrderByWithRelationInput | DrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drainages.
     */
    cursor?: DrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drainages.
     */
    distinct?: DrainageScalarFieldEnum | DrainageScalarFieldEnum[]
  }

  /**
   * Drainage findMany
   */
  export type DrainageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter, which Drainages to fetch.
     */
    where?: DrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainages to fetch.
     */
    orderBy?: DrainageOrderByWithRelationInput | DrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drainages.
     */
    cursor?: DrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainages.
     */
    skip?: number
    distinct?: DrainageScalarFieldEnum | DrainageScalarFieldEnum[]
  }

  /**
   * Drainage create
   */
  export type DrainageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * The data needed to create a Drainage.
     */
    data: XOR<DrainageCreateInput, DrainageUncheckedCreateInput>
  }

  /**
   * Drainage createMany
   */
  export type DrainageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drainages.
     */
    data: DrainageCreateManyInput | DrainageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drainage createManyAndReturn
   */
  export type DrainageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * The data used to create many Drainages.
     */
    data: DrainageCreateManyInput | DrainageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drainage update
   */
  export type DrainageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * The data needed to update a Drainage.
     */
    data: XOR<DrainageUpdateInput, DrainageUncheckedUpdateInput>
    /**
     * Choose, which Drainage to update.
     */
    where: DrainageWhereUniqueInput
  }

  /**
   * Drainage updateMany
   */
  export type DrainageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drainages.
     */
    data: XOR<DrainageUpdateManyMutationInput, DrainageUncheckedUpdateManyInput>
    /**
     * Filter which Drainages to update
     */
    where?: DrainageWhereInput
    /**
     * Limit how many Drainages to update.
     */
    limit?: number
  }

  /**
   * Drainage updateManyAndReturn
   */
  export type DrainageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * The data used to update Drainages.
     */
    data: XOR<DrainageUpdateManyMutationInput, DrainageUncheckedUpdateManyInput>
    /**
     * Filter which Drainages to update
     */
    where?: DrainageWhereInput
    /**
     * Limit how many Drainages to update.
     */
    limit?: number
  }

  /**
   * Drainage upsert
   */
  export type DrainageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * The filter to search for the Drainage to update in case it exists.
     */
    where: DrainageWhereUniqueInput
    /**
     * In case the Drainage found by the `where` argument doesn't exist, create a new Drainage with this data.
     */
    create: XOR<DrainageCreateInput, DrainageUncheckedCreateInput>
    /**
     * In case the Drainage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrainageUpdateInput, DrainageUncheckedUpdateInput>
  }

  /**
   * Drainage delete
   */
  export type DrainageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
    /**
     * Filter which Drainage to delete.
     */
    where: DrainageWhereUniqueInput
  }

  /**
   * Drainage deleteMany
   */
  export type DrainageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drainages to delete
     */
    where?: DrainageWhereInput
    /**
     * Limit how many Drainages to delete.
     */
    limit?: number
  }

  /**
   * Drainage without action
   */
  export type DrainageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainage
     */
    select?: DrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainage
     */
    omit?: DrainageOmit<ExtArgs> | null
  }


  /**
   * Model Energy
   */

  export type AggregateEnergy = {
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  export type EnergyAvgAggregateOutputType = {
    id: number | null
    amountPaid: number | null
  }

  export type EnergySumAggregateOutputType = {
    id: number | null
    amountPaid: number | null
  }

  export type EnergyMinAggregateOutputType = {
    id: number | null
    date: Date | null
    amountPaid: number | null
    comment: string | null
  }

  export type EnergyMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    amountPaid: number | null
    comment: string | null
  }

  export type EnergyCountAggregateOutputType = {
    id: number
    date: number
    amountPaid: number
    comment: number
    _all: number
  }


  export type EnergyAvgAggregateInputType = {
    id?: true
    amountPaid?: true
  }

  export type EnergySumAggregateInputType = {
    id?: true
    amountPaid?: true
  }

  export type EnergyMinAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
  }

  export type EnergyMaxAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
  }

  export type EnergyCountAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
    _all?: true
  }

  export type EnergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Energy to aggregate.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Energy
    **/
    _count?: true | EnergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnergyMaxAggregateInputType
  }

  export type GetEnergyAggregateType<T extends EnergyAggregateArgs> = {
        [P in keyof T & keyof AggregateEnergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnergy[P]>
      : GetScalarType<T[P], AggregateEnergy[P]>
  }




  export type EnergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnergyWhereInput
    orderBy?: EnergyOrderByWithAggregationInput | EnergyOrderByWithAggregationInput[]
    by: EnergyScalarFieldEnum[] | EnergyScalarFieldEnum
    having?: EnergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnergyCountAggregateInputType | true
    _avg?: EnergyAvgAggregateInputType
    _sum?: EnergySumAggregateInputType
    _min?: EnergyMinAggregateInputType
    _max?: EnergyMaxAggregateInputType
  }

  export type EnergyGroupByOutputType = {
    id: number
    date: Date
    amountPaid: number
    comment: string
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  type GetEnergyGroupByPayload<T extends EnergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnergyGroupByOutputType[P]>
            : GetScalarType<T[P], EnergyGroupByOutputType[P]>
        }
      >
    >


  export type EnergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["energy"]>

  export type EnergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["energy"]>

  export type EnergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["energy"]>

  export type EnergySelectScalar = {
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }

  export type EnergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "amountPaid" | "comment", ExtArgs["result"]["energy"]>

  export type $EnergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Energy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      amountPaid: number
      comment: string
    }, ExtArgs["result"]["energy"]>
    composites: {}
  }

  type EnergyGetPayload<S extends boolean | null | undefined | EnergyDefaultArgs> = $Result.GetResult<Prisma.$EnergyPayload, S>

  type EnergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnergyCountAggregateInputType | true
    }

  export interface EnergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Energy'], meta: { name: 'Energy' } }
    /**
     * Find zero or one Energy that matches the filter.
     * @param {EnergyFindUniqueArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnergyFindUniqueArgs>(args: SelectSubset<T, EnergyFindUniqueArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Energy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnergyFindUniqueOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnergyFindUniqueOrThrowArgs>(args: SelectSubset<T, EnergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindFirstArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnergyFindFirstArgs>(args?: SelectSubset<T, EnergyFindFirstArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Energy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindFirstOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnergyFindFirstOrThrowArgs>(args?: SelectSubset<T, EnergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Energy
     * const energy = await prisma.energy.findMany()
     * 
     * // Get first 10 Energy
     * const energy = await prisma.energy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const energyWithIdOnly = await prisma.energy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnergyFindManyArgs>(args?: SelectSubset<T, EnergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Energy.
     * @param {EnergyCreateArgs} args - Arguments to create a Energy.
     * @example
     * // Create one Energy
     * const Energy = await prisma.energy.create({
     *   data: {
     *     // ... data to create a Energy
     *   }
     * })
     * 
     */
    create<T extends EnergyCreateArgs>(args: SelectSubset<T, EnergyCreateArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Energy.
     * @param {EnergyCreateManyArgs} args - Arguments to create many Energy.
     * @example
     * // Create many Energy
     * const energy = await prisma.energy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnergyCreateManyArgs>(args?: SelectSubset<T, EnergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Energy and returns the data saved in the database.
     * @param {EnergyCreateManyAndReturnArgs} args - Arguments to create many Energy.
     * @example
     * // Create many Energy
     * const energy = await prisma.energy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Energy and only return the `id`
     * const energyWithIdOnly = await prisma.energy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnergyCreateManyAndReturnArgs>(args?: SelectSubset<T, EnergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Energy.
     * @param {EnergyDeleteArgs} args - Arguments to delete one Energy.
     * @example
     * // Delete one Energy
     * const Energy = await prisma.energy.delete({
     *   where: {
     *     // ... filter to delete one Energy
     *   }
     * })
     * 
     */
    delete<T extends EnergyDeleteArgs>(args: SelectSubset<T, EnergyDeleteArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Energy.
     * @param {EnergyUpdateArgs} args - Arguments to update one Energy.
     * @example
     * // Update one Energy
     * const energy = await prisma.energy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnergyUpdateArgs>(args: SelectSubset<T, EnergyUpdateArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Energy.
     * @param {EnergyDeleteManyArgs} args - Arguments to filter Energy to delete.
     * @example
     * // Delete a few Energy
     * const { count } = await prisma.energy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnergyDeleteManyArgs>(args?: SelectSubset<T, EnergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Energy
     * const energy = await prisma.energy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnergyUpdateManyArgs>(args: SelectSubset<T, EnergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Energy and returns the data updated in the database.
     * @param {EnergyUpdateManyAndReturnArgs} args - Arguments to update many Energy.
     * @example
     * // Update many Energy
     * const energy = await prisma.energy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Energy and only return the `id`
     * const energyWithIdOnly = await prisma.energy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnergyUpdateManyAndReturnArgs>(args: SelectSubset<T, EnergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Energy.
     * @param {EnergyUpsertArgs} args - Arguments to update or create a Energy.
     * @example
     * // Update or create a Energy
     * const energy = await prisma.energy.upsert({
     *   create: {
     *     // ... data to create a Energy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Energy we want to update
     *   }
     * })
     */
    upsert<T extends EnergyUpsertArgs>(args: SelectSubset<T, EnergyUpsertArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyCountArgs} args - Arguments to filter Energy to count.
     * @example
     * // Count the number of Energy
     * const count = await prisma.energy.count({
     *   where: {
     *     // ... the filter for the Energy we want to count
     *   }
     * })
    **/
    count<T extends EnergyCountArgs>(
      args?: Subset<T, EnergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnergyAggregateArgs>(args: Subset<T, EnergyAggregateArgs>): Prisma.PrismaPromise<GetEnergyAggregateType<T>>

    /**
     * Group by Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnergyGroupByArgs['orderBy'] }
        : { orderBy?: EnergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Energy model
   */
  readonly fields: EnergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Energy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Energy model
   */
  interface EnergyFieldRefs {
    readonly id: FieldRef<"Energy", 'Int'>
    readonly date: FieldRef<"Energy", 'DateTime'>
    readonly amountPaid: FieldRef<"Energy", 'Float'>
    readonly comment: FieldRef<"Energy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Energy findUnique
   */
  export type EnergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where: EnergyWhereUniqueInput
  }

  /**
   * Energy findUniqueOrThrow
   */
  export type EnergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where: EnergyWhereUniqueInput
  }

  /**
   * Energy findFirst
   */
  export type EnergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * Energy findFirstOrThrow
   */
  export type EnergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * Energy findMany
   */
  export type EnergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * Energy create
   */
  export type EnergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * The data needed to create a Energy.
     */
    data: XOR<EnergyCreateInput, EnergyUncheckedCreateInput>
  }

  /**
   * Energy createMany
   */
  export type EnergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Energy.
     */
    data: EnergyCreateManyInput | EnergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Energy createManyAndReturn
   */
  export type EnergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * The data used to create many Energy.
     */
    data: EnergyCreateManyInput | EnergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Energy update
   */
  export type EnergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * The data needed to update a Energy.
     */
    data: XOR<EnergyUpdateInput, EnergyUncheckedUpdateInput>
    /**
     * Choose, which Energy to update.
     */
    where: EnergyWhereUniqueInput
  }

  /**
   * Energy updateMany
   */
  export type EnergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Energy.
     */
    data: XOR<EnergyUpdateManyMutationInput, EnergyUncheckedUpdateManyInput>
    /**
     * Filter which Energy to update
     */
    where?: EnergyWhereInput
    /**
     * Limit how many Energy to update.
     */
    limit?: number
  }

  /**
   * Energy updateManyAndReturn
   */
  export type EnergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * The data used to update Energy.
     */
    data: XOR<EnergyUpdateManyMutationInput, EnergyUncheckedUpdateManyInput>
    /**
     * Filter which Energy to update
     */
    where?: EnergyWhereInput
    /**
     * Limit how many Energy to update.
     */
    limit?: number
  }

  /**
   * Energy upsert
   */
  export type EnergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * The filter to search for the Energy to update in case it exists.
     */
    where: EnergyWhereUniqueInput
    /**
     * In case the Energy found by the `where` argument doesn't exist, create a new Energy with this data.
     */
    create: XOR<EnergyCreateInput, EnergyUncheckedCreateInput>
    /**
     * In case the Energy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnergyUpdateInput, EnergyUncheckedUpdateInput>
  }

  /**
   * Energy delete
   */
  export type EnergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
    /**
     * Filter which Energy to delete.
     */
    where: EnergyWhereUniqueInput
  }

  /**
   * Energy deleteMany
   */
  export type EnergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Energy to delete
     */
    where?: EnergyWhereInput
    /**
     * Limit how many Energy to delete.
     */
    limit?: number
  }

  /**
   * Energy without action
   */
  export type EnergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Energy
     */
    omit?: EnergyOmit<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    date: Date | null
    shopName: string | null
    price: number | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    shopName: string | null
    price: number | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    date: number
    shopName: number
    price: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    date?: true
    shopName?: true
    price?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    date?: true
    shopName?: true
    price?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    date?: true
    shopName?: true
    price?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    date: Date
    shopName: string | null
    price: number
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    shopName?: boolean
    price?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    shopName?: boolean
    price?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    shopName?: boolean
    price?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    date?: boolean
    shopName?: boolean
    price?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "shopName" | "price", ExtArgs["result"]["food"]>

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      shopName: string | null
      price: number
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly date: FieldRef<"Food", 'DateTime'>
    readonly shopName: FieldRef<"Food", 'String'>
    readonly price: FieldRef<"Food", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
  }


  /**
   * Model Tax
   */

  export type AggregateTax = {
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  export type TaxAvgAggregateOutputType = {
    id: number | null
    amountPaid: number | null
  }

  export type TaxSumAggregateOutputType = {
    id: number | null
    amountPaid: number | null
  }

  export type TaxMinAggregateOutputType = {
    id: number | null
    date: Date | null
    amountPaid: number | null
    comment: string | null
  }

  export type TaxMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    amountPaid: number | null
    comment: string | null
  }

  export type TaxCountAggregateOutputType = {
    id: number
    date: number
    amountPaid: number
    comment: number
    _all: number
  }


  export type TaxAvgAggregateInputType = {
    id?: true
    amountPaid?: true
  }

  export type TaxSumAggregateInputType = {
    id?: true
    amountPaid?: true
  }

  export type TaxMinAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
  }

  export type TaxMaxAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
  }

  export type TaxCountAggregateInputType = {
    id?: true
    date?: true
    amountPaid?: true
    comment?: true
    _all?: true
  }

  export type TaxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tax to aggregate.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxes
    **/
    _count?: true | TaxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxMaxAggregateInputType
  }

  export type GetTaxAggregateType<T extends TaxAggregateArgs> = {
        [P in keyof T & keyof AggregateTax]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTax[P]>
      : GetScalarType<T[P], AggregateTax[P]>
  }




  export type TaxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxWhereInput
    orderBy?: TaxOrderByWithAggregationInput | TaxOrderByWithAggregationInput[]
    by: TaxScalarFieldEnum[] | TaxScalarFieldEnum
    having?: TaxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxCountAggregateInputType | true
    _avg?: TaxAvgAggregateInputType
    _sum?: TaxSumAggregateInputType
    _min?: TaxMinAggregateInputType
    _max?: TaxMaxAggregateInputType
  }

  export type TaxGroupByOutputType = {
    id: number
    date: Date
    amountPaid: number
    comment: string
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  type GetTaxGroupByPayload<T extends TaxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxGroupByOutputType[P]>
            : GetScalarType<T[P], TaxGroupByOutputType[P]>
        }
      >
    >


  export type TaxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectScalar = {
    id?: boolean
    date?: boolean
    amountPaid?: boolean
    comment?: boolean
  }

  export type TaxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "amountPaid" | "comment", ExtArgs["result"]["tax"]>

  export type $TaxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tax"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      amountPaid: number
      comment: string
    }, ExtArgs["result"]["tax"]>
    composites: {}
  }

  type TaxGetPayload<S extends boolean | null | undefined | TaxDefaultArgs> = $Result.GetResult<Prisma.$TaxPayload, S>

  type TaxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxCountAggregateInputType | true
    }

  export interface TaxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tax'], meta: { name: 'Tax' } }
    /**
     * Find zero or one Tax that matches the filter.
     * @param {TaxFindUniqueArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxFindUniqueArgs>(args: SelectSubset<T, TaxFindUniqueArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tax that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxFindUniqueOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxFindFirstArgs>(args?: SelectSubset<T, TaxFindFirstArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxes
     * const taxes = await prisma.tax.findMany()
     * 
     * // Get first 10 Taxes
     * const taxes = await prisma.tax.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxWithIdOnly = await prisma.tax.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxFindManyArgs>(args?: SelectSubset<T, TaxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tax.
     * @param {TaxCreateArgs} args - Arguments to create a Tax.
     * @example
     * // Create one Tax
     * const Tax = await prisma.tax.create({
     *   data: {
     *     // ... data to create a Tax
     *   }
     * })
     * 
     */
    create<T extends TaxCreateArgs>(args: SelectSubset<T, TaxCreateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxes.
     * @param {TaxCreateManyArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxCreateManyArgs>(args?: SelectSubset<T, TaxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taxes and returns the data saved in the database.
     * @param {TaxCreateManyAndReturnArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tax.
     * @param {TaxDeleteArgs} args - Arguments to delete one Tax.
     * @example
     * // Delete one Tax
     * const Tax = await prisma.tax.delete({
     *   where: {
     *     // ... filter to delete one Tax
     *   }
     * })
     * 
     */
    delete<T extends TaxDeleteArgs>(args: SelectSubset<T, TaxDeleteArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tax.
     * @param {TaxUpdateArgs} args - Arguments to update one Tax.
     * @example
     * // Update one Tax
     * const tax = await prisma.tax.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxUpdateArgs>(args: SelectSubset<T, TaxUpdateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxes.
     * @param {TaxDeleteManyArgs} args - Arguments to filter Taxes to delete.
     * @example
     * // Delete a few Taxes
     * const { count } = await prisma.tax.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxDeleteManyArgs>(args?: SelectSubset<T, TaxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxUpdateManyArgs>(args: SelectSubset<T, TaxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes and returns the data updated in the database.
     * @param {TaxUpdateManyAndReturnArgs} args - Arguments to update many Taxes.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tax.
     * @param {TaxUpsertArgs} args - Arguments to update or create a Tax.
     * @example
     * // Update or create a Tax
     * const tax = await prisma.tax.upsert({
     *   create: {
     *     // ... data to create a Tax
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tax we want to update
     *   }
     * })
     */
    upsert<T extends TaxUpsertArgs>(args: SelectSubset<T, TaxUpsertArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxCountArgs} args - Arguments to filter Taxes to count.
     * @example
     * // Count the number of Taxes
     * const count = await prisma.tax.count({
     *   where: {
     *     // ... the filter for the Taxes we want to count
     *   }
     * })
    **/
    count<T extends TaxCountArgs>(
      args?: Subset<T, TaxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxAggregateArgs>(args: Subset<T, TaxAggregateArgs>): Prisma.PrismaPromise<GetTaxAggregateType<T>>

    /**
     * Group by Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxGroupByArgs['orderBy'] }
        : { orderBy?: TaxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tax model
   */
  readonly fields: TaxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tax.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tax model
   */
  interface TaxFieldRefs {
    readonly id: FieldRef<"Tax", 'Int'>
    readonly date: FieldRef<"Tax", 'DateTime'>
    readonly amountPaid: FieldRef<"Tax", 'Float'>
    readonly comment: FieldRef<"Tax", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tax findUnique
   */
  export type TaxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findUniqueOrThrow
   */
  export type TaxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findFirst
   */
  export type TaxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findFirstOrThrow
   */
  export type TaxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findMany
   */
  export type TaxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Taxes to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax create
   */
  export type TaxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to create a Tax.
     */
    data: XOR<TaxCreateInput, TaxUncheckedCreateInput>
  }

  /**
   * Tax createMany
   */
  export type TaxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tax createManyAndReturn
   */
  export type TaxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tax update
   */
  export type TaxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to update a Tax.
     */
    data: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
    /**
     * Choose, which Tax to update.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax updateMany
   */
  export type TaxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax updateManyAndReturn
   */
  export type TaxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax upsert
   */
  export type TaxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The filter to search for the Tax to update in case it exists.
     */
    where: TaxWhereUniqueInput
    /**
     * In case the Tax found by the `where` argument doesn't exist, create a new Tax with this data.
     */
    create: XOR<TaxCreateInput, TaxUncheckedCreateInput>
    /**
     * In case the Tax was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
  }

  /**
   * Tax delete
   */
  export type TaxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter which Tax to delete.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax deleteMany
   */
  export type TaxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taxes to delete
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to delete.
     */
    limit?: number
  }

  /**
   * Tax without action
   */
  export type TaxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
  }


  /**
   * Model Transport
   */

  export type AggregateTransport = {
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  export type TransportAvgAggregateOutputType = {
    id: number | null
  }

  export type TransportSumAggregateOutputType = {
    id: number | null
  }

  export type TransportMinAggregateOutputType = {
    id: number | null
    date: Date | null
    transportType: string | null
    comment: string | null
  }

  export type TransportMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    transportType: string | null
    comment: string | null
  }

  export type TransportCountAggregateOutputType = {
    id: number
    date: number
    transportType: number
    comment: number
    _all: number
  }


  export type TransportAvgAggregateInputType = {
    id?: true
  }

  export type TransportSumAggregateInputType = {
    id?: true
  }

  export type TransportMinAggregateInputType = {
    id?: true
    date?: true
    transportType?: true
    comment?: true
  }

  export type TransportMaxAggregateInputType = {
    id?: true
    date?: true
    transportType?: true
    comment?: true
  }

  export type TransportCountAggregateInputType = {
    id?: true
    date?: true
    transportType?: true
    comment?: true
    _all?: true
  }

  export type TransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transport to aggregate.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transports
    **/
    _count?: true | TransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportMaxAggregateInputType
  }

  export type GetTransportAggregateType<T extends TransportAggregateArgs> = {
        [P in keyof T & keyof AggregateTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransport[P]>
      : GetScalarType<T[P], AggregateTransport[P]>
  }




  export type TransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithAggregationInput | TransportOrderByWithAggregationInput[]
    by: TransportScalarFieldEnum[] | TransportScalarFieldEnum
    having?: TransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportCountAggregateInputType | true
    _avg?: TransportAvgAggregateInputType
    _sum?: TransportSumAggregateInputType
    _min?: TransportMinAggregateInputType
    _max?: TransportMaxAggregateInputType
  }

  export type TransportGroupByOutputType = {
    id: number
    date: Date
    transportType: string
    comment: string
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  type GetTransportGroupByPayload<T extends TransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportGroupByOutputType[P]>
            : GetScalarType<T[P], TransportGroupByOutputType[P]>
        }
      >
    >


  export type TransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    transportType?: boolean
    comment?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    transportType?: boolean
    comment?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    transportType?: boolean
    comment?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectScalar = {
    id?: boolean
    date?: boolean
    transportType?: boolean
    comment?: boolean
  }

  export type TransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "transportType" | "comment", ExtArgs["result"]["transport"]>

  export type $TransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      transportType: string
      comment: string
    }, ExtArgs["result"]["transport"]>
    composites: {}
  }

  type TransportGetPayload<S extends boolean | null | undefined | TransportDefaultArgs> = $Result.GetResult<Prisma.$TransportPayload, S>

  type TransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportCountAggregateInputType | true
    }

  export interface TransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transport'], meta: { name: 'Transport' } }
    /**
     * Find zero or one Transport that matches the filter.
     * @param {TransportFindUniqueArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportFindUniqueArgs>(args: SelectSubset<T, TransportFindUniqueArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportFindUniqueOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportFindFirstArgs>(args?: SelectSubset<T, TransportFindFirstArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transports
     * const transports = await prisma.transport.findMany()
     * 
     * // Get first 10 Transports
     * const transports = await prisma.transport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportWithIdOnly = await prisma.transport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportFindManyArgs>(args?: SelectSubset<T, TransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transport.
     * @param {TransportCreateArgs} args - Arguments to create a Transport.
     * @example
     * // Create one Transport
     * const Transport = await prisma.transport.create({
     *   data: {
     *     // ... data to create a Transport
     *   }
     * })
     * 
     */
    create<T extends TransportCreateArgs>(args: SelectSubset<T, TransportCreateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transports.
     * @param {TransportCreateManyArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportCreateManyArgs>(args?: SelectSubset<T, TransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transports and returns the data saved in the database.
     * @param {TransportCreateManyAndReturnArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transport.
     * @param {TransportDeleteArgs} args - Arguments to delete one Transport.
     * @example
     * // Delete one Transport
     * const Transport = await prisma.transport.delete({
     *   where: {
     *     // ... filter to delete one Transport
     *   }
     * })
     * 
     */
    delete<T extends TransportDeleteArgs>(args: SelectSubset<T, TransportDeleteArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transport.
     * @param {TransportUpdateArgs} args - Arguments to update one Transport.
     * @example
     * // Update one Transport
     * const transport = await prisma.transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportUpdateArgs>(args: SelectSubset<T, TransportUpdateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transports.
     * @param {TransportDeleteManyArgs} args - Arguments to filter Transports to delete.
     * @example
     * // Delete a few Transports
     * const { count } = await prisma.transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportDeleteManyArgs>(args?: SelectSubset<T, TransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportUpdateManyArgs>(args: SelectSubset<T, TransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports and returns the data updated in the database.
     * @param {TransportUpdateManyAndReturnArgs} args - Arguments to update many Transports.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transport.
     * @param {TransportUpsertArgs} args - Arguments to update or create a Transport.
     * @example
     * // Update or create a Transport
     * const transport = await prisma.transport.upsert({
     *   create: {
     *     // ... data to create a Transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transport we want to update
     *   }
     * })
     */
    upsert<T extends TransportUpsertArgs>(args: SelectSubset<T, TransportUpsertArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportCountArgs} args - Arguments to filter Transports to count.
     * @example
     * // Count the number of Transports
     * const count = await prisma.transport.count({
     *   where: {
     *     // ... the filter for the Transports we want to count
     *   }
     * })
    **/
    count<T extends TransportCountArgs>(
      args?: Subset<T, TransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportAggregateArgs>(args: Subset<T, TransportAggregateArgs>): Prisma.PrismaPromise<GetTransportAggregateType<T>>

    /**
     * Group by Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportGroupByArgs['orderBy'] }
        : { orderBy?: TransportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transport model
   */
  readonly fields: TransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transport model
   */
  interface TransportFieldRefs {
    readonly id: FieldRef<"Transport", 'Int'>
    readonly date: FieldRef<"Transport", 'DateTime'>
    readonly transportType: FieldRef<"Transport", 'String'>
    readonly comment: FieldRef<"Transport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transport findUnique
   */
  export type TransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findUniqueOrThrow
   */
  export type TransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findFirst
   */
  export type TransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findFirstOrThrow
   */
  export type TransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findMany
   */
  export type TransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter, which Transports to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport create
   */
  export type TransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data needed to create a Transport.
     */
    data: XOR<TransportCreateInput, TransportUncheckedCreateInput>
  }

  /**
   * Transport createMany
   */
  export type TransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport createManyAndReturn
   */
  export type TransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport update
   */
  export type TransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data needed to update a Transport.
     */
    data: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
    /**
     * Choose, which Transport to update.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport updateMany
   */
  export type TransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport updateManyAndReturn
   */
  export type TransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport upsert
   */
  export type TransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The filter to search for the Transport to update in case it exists.
     */
    where: TransportWhereUniqueInput
    /**
     * In case the Transport found by the `where` argument doesn't exist, create a new Transport with this data.
     */
    create: XOR<TransportCreateInput, TransportUncheckedCreateInput>
    /**
     * In case the Transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
  }

  /**
   * Transport delete
   */
  export type TransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Filter which Transport to delete.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport deleteMany
   */
  export type TransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transports to delete
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to delete.
     */
    limit?: number
  }

  /**
   * Transport without action
   */
  export type TransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
  }


  /**
   * Model Repair
   */

  export type AggregateRepair = {
    _count: RepairCountAggregateOutputType | null
    _avg: RepairAvgAggregateOutputType | null
    _sum: RepairSumAggregateOutputType | null
    _min: RepairMinAggregateOutputType | null
    _max: RepairMaxAggregateOutputType | null
  }

  export type RepairAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type RepairSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type RepairMinAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    comment: string | null
  }

  export type RepairMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    comment: string | null
  }

  export type RepairCountAggregateOutputType = {
    id: number
    date: number
    price: number
    comment: number
    _all: number
  }


  export type RepairAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type RepairSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type RepairMinAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
  }

  export type RepairMaxAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
  }

  export type RepairCountAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
    _all?: true
  }

  export type RepairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repair to aggregate.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repairs
    **/
    _count?: true | RepairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairMaxAggregateInputType
  }

  export type GetRepairAggregateType<T extends RepairAggregateArgs> = {
        [P in keyof T & keyof AggregateRepair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepair[P]>
      : GetScalarType<T[P], AggregateRepair[P]>
  }




  export type RepairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairWhereInput
    orderBy?: RepairOrderByWithAggregationInput | RepairOrderByWithAggregationInput[]
    by: RepairScalarFieldEnum[] | RepairScalarFieldEnum
    having?: RepairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairCountAggregateInputType | true
    _avg?: RepairAvgAggregateInputType
    _sum?: RepairSumAggregateInputType
    _min?: RepairMinAggregateInputType
    _max?: RepairMaxAggregateInputType
  }

  export type RepairGroupByOutputType = {
    id: number
    date: Date
    price: number
    comment: string
    _count: RepairCountAggregateOutputType | null
    _avg: RepairAvgAggregateOutputType | null
    _sum: RepairSumAggregateOutputType | null
    _min: RepairMinAggregateOutputType | null
    _max: RepairMaxAggregateOutputType | null
  }

  type GetRepairGroupByPayload<T extends RepairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairGroupByOutputType[P]>
            : GetScalarType<T[P], RepairGroupByOutputType[P]>
        }
      >
    >


  export type RepairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectScalar = {
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }

  export type RepairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "price" | "comment", ExtArgs["result"]["repair"]>

  export type $RepairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repair"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      price: number
      comment: string
    }, ExtArgs["result"]["repair"]>
    composites: {}
  }

  type RepairGetPayload<S extends boolean | null | undefined | RepairDefaultArgs> = $Result.GetResult<Prisma.$RepairPayload, S>

  type RepairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairCountAggregateInputType | true
    }

  export interface RepairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repair'], meta: { name: 'Repair' } }
    /**
     * Find zero or one Repair that matches the filter.
     * @param {RepairFindUniqueArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairFindUniqueArgs>(args: SelectSubset<T, RepairFindUniqueArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairFindUniqueOrThrowArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindFirstArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairFindFirstArgs>(args?: SelectSubset<T, RepairFindFirstArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindFirstOrThrowArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repairs
     * const repairs = await prisma.repair.findMany()
     * 
     * // Get first 10 Repairs
     * const repairs = await prisma.repair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairWithIdOnly = await prisma.repair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairFindManyArgs>(args?: SelectSubset<T, RepairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repair.
     * @param {RepairCreateArgs} args - Arguments to create a Repair.
     * @example
     * // Create one Repair
     * const Repair = await prisma.repair.create({
     *   data: {
     *     // ... data to create a Repair
     *   }
     * })
     * 
     */
    create<T extends RepairCreateArgs>(args: SelectSubset<T, RepairCreateArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repairs.
     * @param {RepairCreateManyArgs} args - Arguments to create many Repairs.
     * @example
     * // Create many Repairs
     * const repair = await prisma.repair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairCreateManyArgs>(args?: SelectSubset<T, RepairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repairs and returns the data saved in the database.
     * @param {RepairCreateManyAndReturnArgs} args - Arguments to create many Repairs.
     * @example
     * // Create many Repairs
     * const repair = await prisma.repair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repairs and only return the `id`
     * const repairWithIdOnly = await prisma.repair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repair.
     * @param {RepairDeleteArgs} args - Arguments to delete one Repair.
     * @example
     * // Delete one Repair
     * const Repair = await prisma.repair.delete({
     *   where: {
     *     // ... filter to delete one Repair
     *   }
     * })
     * 
     */
    delete<T extends RepairDeleteArgs>(args: SelectSubset<T, RepairDeleteArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repair.
     * @param {RepairUpdateArgs} args - Arguments to update one Repair.
     * @example
     * // Update one Repair
     * const repair = await prisma.repair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairUpdateArgs>(args: SelectSubset<T, RepairUpdateArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repairs.
     * @param {RepairDeleteManyArgs} args - Arguments to filter Repairs to delete.
     * @example
     * // Delete a few Repairs
     * const { count } = await prisma.repair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairDeleteManyArgs>(args?: SelectSubset<T, RepairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repairs
     * const repair = await prisma.repair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairUpdateManyArgs>(args: SelectSubset<T, RepairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repairs and returns the data updated in the database.
     * @param {RepairUpdateManyAndReturnArgs} args - Arguments to update many Repairs.
     * @example
     * // Update many Repairs
     * const repair = await prisma.repair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repairs and only return the `id`
     * const repairWithIdOnly = await prisma.repair.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repair.
     * @param {RepairUpsertArgs} args - Arguments to update or create a Repair.
     * @example
     * // Update or create a Repair
     * const repair = await prisma.repair.upsert({
     *   create: {
     *     // ... data to create a Repair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repair we want to update
     *   }
     * })
     */
    upsert<T extends RepairUpsertArgs>(args: SelectSubset<T, RepairUpsertArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairCountArgs} args - Arguments to filter Repairs to count.
     * @example
     * // Count the number of Repairs
     * const count = await prisma.repair.count({
     *   where: {
     *     // ... the filter for the Repairs we want to count
     *   }
     * })
    **/
    count<T extends RepairCountArgs>(
      args?: Subset<T, RepairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairAggregateArgs>(args: Subset<T, RepairAggregateArgs>): Prisma.PrismaPromise<GetRepairAggregateType<T>>

    /**
     * Group by Repair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairGroupByArgs['orderBy'] }
        : { orderBy?: RepairGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repair model
   */
  readonly fields: RepairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repair model
   */
  interface RepairFieldRefs {
    readonly id: FieldRef<"Repair", 'Int'>
    readonly date: FieldRef<"Repair", 'DateTime'>
    readonly price: FieldRef<"Repair", 'Float'>
    readonly comment: FieldRef<"Repair", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Repair findUnique
   */
  export type RepairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair findUniqueOrThrow
   */
  export type RepairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair findFirst
   */
  export type RepairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repairs.
     */
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair findFirstOrThrow
   */
  export type RepairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repairs.
     */
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair findMany
   */
  export type RepairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter, which Repairs to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair create
   */
  export type RepairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data needed to create a Repair.
     */
    data: XOR<RepairCreateInput, RepairUncheckedCreateInput>
  }

  /**
   * Repair createMany
   */
  export type RepairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repairs.
     */
    data: RepairCreateManyInput | RepairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repair createManyAndReturn
   */
  export type RepairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data used to create many Repairs.
     */
    data: RepairCreateManyInput | RepairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repair update
   */
  export type RepairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data needed to update a Repair.
     */
    data: XOR<RepairUpdateInput, RepairUncheckedUpdateInput>
    /**
     * Choose, which Repair to update.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair updateMany
   */
  export type RepairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repairs.
     */
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyInput>
    /**
     * Filter which Repairs to update
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to update.
     */
    limit?: number
  }

  /**
   * Repair updateManyAndReturn
   */
  export type RepairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data used to update Repairs.
     */
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyInput>
    /**
     * Filter which Repairs to update
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to update.
     */
    limit?: number
  }

  /**
   * Repair upsert
   */
  export type RepairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The filter to search for the Repair to update in case it exists.
     */
    where: RepairWhereUniqueInput
    /**
     * In case the Repair found by the `where` argument doesn't exist, create a new Repair with this data.
     */
    create: XOR<RepairCreateInput, RepairUncheckedCreateInput>
    /**
     * In case the Repair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairUpdateInput, RepairUncheckedUpdateInput>
  }

  /**
   * Repair delete
   */
  export type RepairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Filter which Repair to delete.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair deleteMany
   */
  export type RepairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repairs to delete
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to delete.
     */
    limit?: number
  }

  /**
   * Repair without action
   */
  export type RepairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
  }


  /**
   * Model Oil
   */

  export type AggregateOil = {
    _count: OilCountAggregateOutputType | null
    _avg: OilAvgAggregateOutputType | null
    _sum: OilSumAggregateOutputType | null
    _min: OilMinAggregateOutputType | null
    _max: OilMaxAggregateOutputType | null
  }

  export type OilAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type OilSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type OilMinAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    comment: string | null
  }

  export type OilMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    comment: string | null
  }

  export type OilCountAggregateOutputType = {
    id: number
    date: number
    price: number
    comment: number
    _all: number
  }


  export type OilAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type OilSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type OilMinAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
  }

  export type OilMaxAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
  }

  export type OilCountAggregateInputType = {
    id?: true
    date?: true
    price?: true
    comment?: true
    _all?: true
  }

  export type OilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oil to aggregate.
     */
    where?: OilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oils to fetch.
     */
    orderBy?: OilOrderByWithRelationInput | OilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Oils
    **/
    _count?: true | OilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OilMaxAggregateInputType
  }

  export type GetOilAggregateType<T extends OilAggregateArgs> = {
        [P in keyof T & keyof AggregateOil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOil[P]>
      : GetScalarType<T[P], AggregateOil[P]>
  }




  export type OilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OilWhereInput
    orderBy?: OilOrderByWithAggregationInput | OilOrderByWithAggregationInput[]
    by: OilScalarFieldEnum[] | OilScalarFieldEnum
    having?: OilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OilCountAggregateInputType | true
    _avg?: OilAvgAggregateInputType
    _sum?: OilSumAggregateInputType
    _min?: OilMinAggregateInputType
    _max?: OilMaxAggregateInputType
  }

  export type OilGroupByOutputType = {
    id: number
    date: Date
    price: number
    comment: string
    _count: OilCountAggregateOutputType | null
    _avg: OilAvgAggregateOutputType | null
    _sum: OilSumAggregateOutputType | null
    _min: OilMinAggregateOutputType | null
    _max: OilMaxAggregateOutputType | null
  }

  type GetOilGroupByPayload<T extends OilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OilGroupByOutputType[P]>
            : GetScalarType<T[P], OilGroupByOutputType[P]>
        }
      >
    >


  export type OilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["oil"]>

  export type OilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["oil"]>

  export type OilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }, ExtArgs["result"]["oil"]>

  export type OilSelectScalar = {
    id?: boolean
    date?: boolean
    price?: boolean
    comment?: boolean
  }

  export type OilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "price" | "comment", ExtArgs["result"]["oil"]>

  export type $OilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Oil"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      price: number
      comment: string
    }, ExtArgs["result"]["oil"]>
    composites: {}
  }

  type OilGetPayload<S extends boolean | null | undefined | OilDefaultArgs> = $Result.GetResult<Prisma.$OilPayload, S>

  type OilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OilCountAggregateInputType | true
    }

  export interface OilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Oil'], meta: { name: 'Oil' } }
    /**
     * Find zero or one Oil that matches the filter.
     * @param {OilFindUniqueArgs} args - Arguments to find a Oil
     * @example
     * // Get one Oil
     * const oil = await prisma.oil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OilFindUniqueArgs>(args: SelectSubset<T, OilFindUniqueArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Oil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OilFindUniqueOrThrowArgs} args - Arguments to find a Oil
     * @example
     * // Get one Oil
     * const oil = await prisma.oil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OilFindUniqueOrThrowArgs>(args: SelectSubset<T, OilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilFindFirstArgs} args - Arguments to find a Oil
     * @example
     * // Get one Oil
     * const oil = await prisma.oil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OilFindFirstArgs>(args?: SelectSubset<T, OilFindFirstArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilFindFirstOrThrowArgs} args - Arguments to find a Oil
     * @example
     * // Get one Oil
     * const oil = await prisma.oil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OilFindFirstOrThrowArgs>(args?: SelectSubset<T, OilFindFirstOrThrowArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Oils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oils
     * const oils = await prisma.oil.findMany()
     * 
     * // Get first 10 Oils
     * const oils = await prisma.oil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oilWithIdOnly = await prisma.oil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OilFindManyArgs>(args?: SelectSubset<T, OilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Oil.
     * @param {OilCreateArgs} args - Arguments to create a Oil.
     * @example
     * // Create one Oil
     * const Oil = await prisma.oil.create({
     *   data: {
     *     // ... data to create a Oil
     *   }
     * })
     * 
     */
    create<T extends OilCreateArgs>(args: SelectSubset<T, OilCreateArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Oils.
     * @param {OilCreateManyArgs} args - Arguments to create many Oils.
     * @example
     * // Create many Oils
     * const oil = await prisma.oil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OilCreateManyArgs>(args?: SelectSubset<T, OilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Oils and returns the data saved in the database.
     * @param {OilCreateManyAndReturnArgs} args - Arguments to create many Oils.
     * @example
     * // Create many Oils
     * const oil = await prisma.oil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Oils and only return the `id`
     * const oilWithIdOnly = await prisma.oil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OilCreateManyAndReturnArgs>(args?: SelectSubset<T, OilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Oil.
     * @param {OilDeleteArgs} args - Arguments to delete one Oil.
     * @example
     * // Delete one Oil
     * const Oil = await prisma.oil.delete({
     *   where: {
     *     // ... filter to delete one Oil
     *   }
     * })
     * 
     */
    delete<T extends OilDeleteArgs>(args: SelectSubset<T, OilDeleteArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Oil.
     * @param {OilUpdateArgs} args - Arguments to update one Oil.
     * @example
     * // Update one Oil
     * const oil = await prisma.oil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OilUpdateArgs>(args: SelectSubset<T, OilUpdateArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Oils.
     * @param {OilDeleteManyArgs} args - Arguments to filter Oils to delete.
     * @example
     * // Delete a few Oils
     * const { count } = await prisma.oil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OilDeleteManyArgs>(args?: SelectSubset<T, OilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oils
     * const oil = await prisma.oil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OilUpdateManyArgs>(args: SelectSubset<T, OilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oils and returns the data updated in the database.
     * @param {OilUpdateManyAndReturnArgs} args - Arguments to update many Oils.
     * @example
     * // Update many Oils
     * const oil = await prisma.oil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Oils and only return the `id`
     * const oilWithIdOnly = await prisma.oil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OilUpdateManyAndReturnArgs>(args: SelectSubset<T, OilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Oil.
     * @param {OilUpsertArgs} args - Arguments to update or create a Oil.
     * @example
     * // Update or create a Oil
     * const oil = await prisma.oil.upsert({
     *   create: {
     *     // ... data to create a Oil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oil we want to update
     *   }
     * })
     */
    upsert<T extends OilUpsertArgs>(args: SelectSubset<T, OilUpsertArgs<ExtArgs>>): Prisma__OilClient<$Result.GetResult<Prisma.$OilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Oils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilCountArgs} args - Arguments to filter Oils to count.
     * @example
     * // Count the number of Oils
     * const count = await prisma.oil.count({
     *   where: {
     *     // ... the filter for the Oils we want to count
     *   }
     * })
    **/
    count<T extends OilCountArgs>(
      args?: Subset<T, OilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OilAggregateArgs>(args: Subset<T, OilAggregateArgs>): Prisma.PrismaPromise<GetOilAggregateType<T>>

    /**
     * Group by Oil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OilGroupByArgs['orderBy'] }
        : { orderBy?: OilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Oil model
   */
  readonly fields: OilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Oil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Oil model
   */
  interface OilFieldRefs {
    readonly id: FieldRef<"Oil", 'Int'>
    readonly date: FieldRef<"Oil", 'DateTime'>
    readonly price: FieldRef<"Oil", 'Float'>
    readonly comment: FieldRef<"Oil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Oil findUnique
   */
  export type OilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter, which Oil to fetch.
     */
    where: OilWhereUniqueInput
  }

  /**
   * Oil findUniqueOrThrow
   */
  export type OilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter, which Oil to fetch.
     */
    where: OilWhereUniqueInput
  }

  /**
   * Oil findFirst
   */
  export type OilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter, which Oil to fetch.
     */
    where?: OilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oils to fetch.
     */
    orderBy?: OilOrderByWithRelationInput | OilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oils.
     */
    cursor?: OilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oils.
     */
    distinct?: OilScalarFieldEnum | OilScalarFieldEnum[]
  }

  /**
   * Oil findFirstOrThrow
   */
  export type OilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter, which Oil to fetch.
     */
    where?: OilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oils to fetch.
     */
    orderBy?: OilOrderByWithRelationInput | OilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oils.
     */
    cursor?: OilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oils.
     */
    distinct?: OilScalarFieldEnum | OilScalarFieldEnum[]
  }

  /**
   * Oil findMany
   */
  export type OilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter, which Oils to fetch.
     */
    where?: OilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oils to fetch.
     */
    orderBy?: OilOrderByWithRelationInput | OilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Oils.
     */
    cursor?: OilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oils.
     */
    skip?: number
    distinct?: OilScalarFieldEnum | OilScalarFieldEnum[]
  }

  /**
   * Oil create
   */
  export type OilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * The data needed to create a Oil.
     */
    data: XOR<OilCreateInput, OilUncheckedCreateInput>
  }

  /**
   * Oil createMany
   */
  export type OilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Oils.
     */
    data: OilCreateManyInput | OilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Oil createManyAndReturn
   */
  export type OilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * The data used to create many Oils.
     */
    data: OilCreateManyInput | OilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Oil update
   */
  export type OilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * The data needed to update a Oil.
     */
    data: XOR<OilUpdateInput, OilUncheckedUpdateInput>
    /**
     * Choose, which Oil to update.
     */
    where: OilWhereUniqueInput
  }

  /**
   * Oil updateMany
   */
  export type OilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Oils.
     */
    data: XOR<OilUpdateManyMutationInput, OilUncheckedUpdateManyInput>
    /**
     * Filter which Oils to update
     */
    where?: OilWhereInput
    /**
     * Limit how many Oils to update.
     */
    limit?: number
  }

  /**
   * Oil updateManyAndReturn
   */
  export type OilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * The data used to update Oils.
     */
    data: XOR<OilUpdateManyMutationInput, OilUncheckedUpdateManyInput>
    /**
     * Filter which Oils to update
     */
    where?: OilWhereInput
    /**
     * Limit how many Oils to update.
     */
    limit?: number
  }

  /**
   * Oil upsert
   */
  export type OilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * The filter to search for the Oil to update in case it exists.
     */
    where: OilWhereUniqueInput
    /**
     * In case the Oil found by the `where` argument doesn't exist, create a new Oil with this data.
     */
    create: XOR<OilCreateInput, OilUncheckedCreateInput>
    /**
     * In case the Oil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OilUpdateInput, OilUncheckedUpdateInput>
  }

  /**
   * Oil delete
   */
  export type OilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
    /**
     * Filter which Oil to delete.
     */
    where: OilWhereUniqueInput
  }

  /**
   * Oil deleteMany
   */
  export type OilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oils to delete
     */
    where?: OilWhereInput
    /**
     * Limit how many Oils to delete.
     */
    limit?: number
  }

  /**
   * Oil without action
   */
  export type OilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oil
     */
    select?: OilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oil
     */
    omit?: OilOmit<ExtArgs> | null
  }


  /**
   * Model Fertilizer
   */

  export type AggregateFertilizer = {
    _count: FertilizerCountAggregateOutputType | null
    _avg: FertilizerAvgAggregateOutputType | null
    _sum: FertilizerSumAggregateOutputType | null
    _min: FertilizerMinAggregateOutputType | null
    _max: FertilizerMaxAggregateOutputType | null
  }

  export type FertilizerAvgAggregateOutputType = {
    id: number | null
    machineCount: number | null
    tonAmount: number | null
  }

  export type FertilizerSumAggregateOutputType = {
    id: number | null
    machineCount: number | null
    tonAmount: number | null
  }

  export type FertilizerMinAggregateOutputType = {
    id: number | null
    date: Date | null
    type: string | null
    machineCount: number | null
    tonAmount: number | null
    comment: string | null
  }

  export type FertilizerMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    type: string | null
    machineCount: number | null
    tonAmount: number | null
    comment: string | null
  }

  export type FertilizerCountAggregateOutputType = {
    id: number
    date: number
    type: number
    machineCount: number
    tonAmount: number
    comment: number
    _all: number
  }


  export type FertilizerAvgAggregateInputType = {
    id?: true
    machineCount?: true
    tonAmount?: true
  }

  export type FertilizerSumAggregateInputType = {
    id?: true
    machineCount?: true
    tonAmount?: true
  }

  export type FertilizerMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    machineCount?: true
    tonAmount?: true
    comment?: true
  }

  export type FertilizerMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    machineCount?: true
    tonAmount?: true
    comment?: true
  }

  export type FertilizerCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    machineCount?: true
    tonAmount?: true
    comment?: true
    _all?: true
  }

  export type FertilizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fertilizer to aggregate.
     */
    where?: FertilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fertilizers to fetch.
     */
    orderBy?: FertilizerOrderByWithRelationInput | FertilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FertilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fertilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fertilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fertilizers
    **/
    _count?: true | FertilizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FertilizerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FertilizerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FertilizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FertilizerMaxAggregateInputType
  }

  export type GetFertilizerAggregateType<T extends FertilizerAggregateArgs> = {
        [P in keyof T & keyof AggregateFertilizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFertilizer[P]>
      : GetScalarType<T[P], AggregateFertilizer[P]>
  }




  export type FertilizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FertilizerWhereInput
    orderBy?: FertilizerOrderByWithAggregationInput | FertilizerOrderByWithAggregationInput[]
    by: FertilizerScalarFieldEnum[] | FertilizerScalarFieldEnum
    having?: FertilizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FertilizerCountAggregateInputType | true
    _avg?: FertilizerAvgAggregateInputType
    _sum?: FertilizerSumAggregateInputType
    _min?: FertilizerMinAggregateInputType
    _max?: FertilizerMaxAggregateInputType
  }

  export type FertilizerGroupByOutputType = {
    id: number
    date: Date
    type: string
    machineCount: number | null
    tonAmount: number | null
    comment: string
    _count: FertilizerCountAggregateOutputType | null
    _avg: FertilizerAvgAggregateOutputType | null
    _sum: FertilizerSumAggregateOutputType | null
    _min: FertilizerMinAggregateOutputType | null
    _max: FertilizerMaxAggregateOutputType | null
  }

  type GetFertilizerGroupByPayload<T extends FertilizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FertilizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FertilizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FertilizerGroupByOutputType[P]>
            : GetScalarType<T[P], FertilizerGroupByOutputType[P]>
        }
      >
    >


  export type FertilizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    machineCount?: boolean
    tonAmount?: boolean
    comment?: boolean
  }, ExtArgs["result"]["fertilizer"]>

  export type FertilizerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    machineCount?: boolean
    tonAmount?: boolean
    comment?: boolean
  }, ExtArgs["result"]["fertilizer"]>

  export type FertilizerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    machineCount?: boolean
    tonAmount?: boolean
    comment?: boolean
  }, ExtArgs["result"]["fertilizer"]>

  export type FertilizerSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    machineCount?: boolean
    tonAmount?: boolean
    comment?: boolean
  }

  export type FertilizerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "type" | "machineCount" | "tonAmount" | "comment", ExtArgs["result"]["fertilizer"]>

  export type $FertilizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fertilizer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      type: string
      machineCount: number | null
      tonAmount: number | null
      comment: string
    }, ExtArgs["result"]["fertilizer"]>
    composites: {}
  }

  type FertilizerGetPayload<S extends boolean | null | undefined | FertilizerDefaultArgs> = $Result.GetResult<Prisma.$FertilizerPayload, S>

  type FertilizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FertilizerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FertilizerCountAggregateInputType | true
    }

  export interface FertilizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fertilizer'], meta: { name: 'Fertilizer' } }
    /**
     * Find zero or one Fertilizer that matches the filter.
     * @param {FertilizerFindUniqueArgs} args - Arguments to find a Fertilizer
     * @example
     * // Get one Fertilizer
     * const fertilizer = await prisma.fertilizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FertilizerFindUniqueArgs>(args: SelectSubset<T, FertilizerFindUniqueArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fertilizer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FertilizerFindUniqueOrThrowArgs} args - Arguments to find a Fertilizer
     * @example
     * // Get one Fertilizer
     * const fertilizer = await prisma.fertilizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FertilizerFindUniqueOrThrowArgs>(args: SelectSubset<T, FertilizerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fertilizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerFindFirstArgs} args - Arguments to find a Fertilizer
     * @example
     * // Get one Fertilizer
     * const fertilizer = await prisma.fertilizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FertilizerFindFirstArgs>(args?: SelectSubset<T, FertilizerFindFirstArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fertilizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerFindFirstOrThrowArgs} args - Arguments to find a Fertilizer
     * @example
     * // Get one Fertilizer
     * const fertilizer = await prisma.fertilizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FertilizerFindFirstOrThrowArgs>(args?: SelectSubset<T, FertilizerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fertilizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fertilizers
     * const fertilizers = await prisma.fertilizer.findMany()
     * 
     * // Get first 10 Fertilizers
     * const fertilizers = await prisma.fertilizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fertilizerWithIdOnly = await prisma.fertilizer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FertilizerFindManyArgs>(args?: SelectSubset<T, FertilizerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fertilizer.
     * @param {FertilizerCreateArgs} args - Arguments to create a Fertilizer.
     * @example
     * // Create one Fertilizer
     * const Fertilizer = await prisma.fertilizer.create({
     *   data: {
     *     // ... data to create a Fertilizer
     *   }
     * })
     * 
     */
    create<T extends FertilizerCreateArgs>(args: SelectSubset<T, FertilizerCreateArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fertilizers.
     * @param {FertilizerCreateManyArgs} args - Arguments to create many Fertilizers.
     * @example
     * // Create many Fertilizers
     * const fertilizer = await prisma.fertilizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FertilizerCreateManyArgs>(args?: SelectSubset<T, FertilizerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fertilizers and returns the data saved in the database.
     * @param {FertilizerCreateManyAndReturnArgs} args - Arguments to create many Fertilizers.
     * @example
     * // Create many Fertilizers
     * const fertilizer = await prisma.fertilizer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fertilizers and only return the `id`
     * const fertilizerWithIdOnly = await prisma.fertilizer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FertilizerCreateManyAndReturnArgs>(args?: SelectSubset<T, FertilizerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fertilizer.
     * @param {FertilizerDeleteArgs} args - Arguments to delete one Fertilizer.
     * @example
     * // Delete one Fertilizer
     * const Fertilizer = await prisma.fertilizer.delete({
     *   where: {
     *     // ... filter to delete one Fertilizer
     *   }
     * })
     * 
     */
    delete<T extends FertilizerDeleteArgs>(args: SelectSubset<T, FertilizerDeleteArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fertilizer.
     * @param {FertilizerUpdateArgs} args - Arguments to update one Fertilizer.
     * @example
     * // Update one Fertilizer
     * const fertilizer = await prisma.fertilizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FertilizerUpdateArgs>(args: SelectSubset<T, FertilizerUpdateArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fertilizers.
     * @param {FertilizerDeleteManyArgs} args - Arguments to filter Fertilizers to delete.
     * @example
     * // Delete a few Fertilizers
     * const { count } = await prisma.fertilizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FertilizerDeleteManyArgs>(args?: SelectSubset<T, FertilizerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fertilizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fertilizers
     * const fertilizer = await prisma.fertilizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FertilizerUpdateManyArgs>(args: SelectSubset<T, FertilizerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fertilizers and returns the data updated in the database.
     * @param {FertilizerUpdateManyAndReturnArgs} args - Arguments to update many Fertilizers.
     * @example
     * // Update many Fertilizers
     * const fertilizer = await prisma.fertilizer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fertilizers and only return the `id`
     * const fertilizerWithIdOnly = await prisma.fertilizer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FertilizerUpdateManyAndReturnArgs>(args: SelectSubset<T, FertilizerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fertilizer.
     * @param {FertilizerUpsertArgs} args - Arguments to update or create a Fertilizer.
     * @example
     * // Update or create a Fertilizer
     * const fertilizer = await prisma.fertilizer.upsert({
     *   create: {
     *     // ... data to create a Fertilizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fertilizer we want to update
     *   }
     * })
     */
    upsert<T extends FertilizerUpsertArgs>(args: SelectSubset<T, FertilizerUpsertArgs<ExtArgs>>): Prisma__FertilizerClient<$Result.GetResult<Prisma.$FertilizerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fertilizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerCountArgs} args - Arguments to filter Fertilizers to count.
     * @example
     * // Count the number of Fertilizers
     * const count = await prisma.fertilizer.count({
     *   where: {
     *     // ... the filter for the Fertilizers we want to count
     *   }
     * })
    **/
    count<T extends FertilizerCountArgs>(
      args?: Subset<T, FertilizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FertilizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fertilizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FertilizerAggregateArgs>(args: Subset<T, FertilizerAggregateArgs>): Prisma.PrismaPromise<GetFertilizerAggregateType<T>>

    /**
     * Group by Fertilizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FertilizerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FertilizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FertilizerGroupByArgs['orderBy'] }
        : { orderBy?: FertilizerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FertilizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFertilizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fertilizer model
   */
  readonly fields: FertilizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fertilizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FertilizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fertilizer model
   */
  interface FertilizerFieldRefs {
    readonly id: FieldRef<"Fertilizer", 'Int'>
    readonly date: FieldRef<"Fertilizer", 'DateTime'>
    readonly type: FieldRef<"Fertilizer", 'String'>
    readonly machineCount: FieldRef<"Fertilizer", 'Int'>
    readonly tonAmount: FieldRef<"Fertilizer", 'Float'>
    readonly comment: FieldRef<"Fertilizer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fertilizer findUnique
   */
  export type FertilizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter, which Fertilizer to fetch.
     */
    where: FertilizerWhereUniqueInput
  }

  /**
   * Fertilizer findUniqueOrThrow
   */
  export type FertilizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter, which Fertilizer to fetch.
     */
    where: FertilizerWhereUniqueInput
  }

  /**
   * Fertilizer findFirst
   */
  export type FertilizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter, which Fertilizer to fetch.
     */
    where?: FertilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fertilizers to fetch.
     */
    orderBy?: FertilizerOrderByWithRelationInput | FertilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fertilizers.
     */
    cursor?: FertilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fertilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fertilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fertilizers.
     */
    distinct?: FertilizerScalarFieldEnum | FertilizerScalarFieldEnum[]
  }

  /**
   * Fertilizer findFirstOrThrow
   */
  export type FertilizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter, which Fertilizer to fetch.
     */
    where?: FertilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fertilizers to fetch.
     */
    orderBy?: FertilizerOrderByWithRelationInput | FertilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fertilizers.
     */
    cursor?: FertilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fertilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fertilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fertilizers.
     */
    distinct?: FertilizerScalarFieldEnum | FertilizerScalarFieldEnum[]
  }

  /**
   * Fertilizer findMany
   */
  export type FertilizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter, which Fertilizers to fetch.
     */
    where?: FertilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fertilizers to fetch.
     */
    orderBy?: FertilizerOrderByWithRelationInput | FertilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fertilizers.
     */
    cursor?: FertilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fertilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fertilizers.
     */
    skip?: number
    distinct?: FertilizerScalarFieldEnum | FertilizerScalarFieldEnum[]
  }

  /**
   * Fertilizer create
   */
  export type FertilizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * The data needed to create a Fertilizer.
     */
    data: XOR<FertilizerCreateInput, FertilizerUncheckedCreateInput>
  }

  /**
   * Fertilizer createMany
   */
  export type FertilizerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fertilizers.
     */
    data: FertilizerCreateManyInput | FertilizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fertilizer createManyAndReturn
   */
  export type FertilizerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * The data used to create many Fertilizers.
     */
    data: FertilizerCreateManyInput | FertilizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fertilizer update
   */
  export type FertilizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * The data needed to update a Fertilizer.
     */
    data: XOR<FertilizerUpdateInput, FertilizerUncheckedUpdateInput>
    /**
     * Choose, which Fertilizer to update.
     */
    where: FertilizerWhereUniqueInput
  }

  /**
   * Fertilizer updateMany
   */
  export type FertilizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fertilizers.
     */
    data: XOR<FertilizerUpdateManyMutationInput, FertilizerUncheckedUpdateManyInput>
    /**
     * Filter which Fertilizers to update
     */
    where?: FertilizerWhereInput
    /**
     * Limit how many Fertilizers to update.
     */
    limit?: number
  }

  /**
   * Fertilizer updateManyAndReturn
   */
  export type FertilizerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * The data used to update Fertilizers.
     */
    data: XOR<FertilizerUpdateManyMutationInput, FertilizerUncheckedUpdateManyInput>
    /**
     * Filter which Fertilizers to update
     */
    where?: FertilizerWhereInput
    /**
     * Limit how many Fertilizers to update.
     */
    limit?: number
  }

  /**
   * Fertilizer upsert
   */
  export type FertilizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * The filter to search for the Fertilizer to update in case it exists.
     */
    where: FertilizerWhereUniqueInput
    /**
     * In case the Fertilizer found by the `where` argument doesn't exist, create a new Fertilizer with this data.
     */
    create: XOR<FertilizerCreateInput, FertilizerUncheckedCreateInput>
    /**
     * In case the Fertilizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FertilizerUpdateInput, FertilizerUncheckedUpdateInput>
  }

  /**
   * Fertilizer delete
   */
  export type FertilizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
    /**
     * Filter which Fertilizer to delete.
     */
    where: FertilizerWhereUniqueInput
  }

  /**
   * Fertilizer deleteMany
   */
  export type FertilizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fertilizers to delete
     */
    where?: FertilizerWhereInput
    /**
     * Limit how many Fertilizers to delete.
     */
    limit?: number
  }

  /**
   * Fertilizer without action
   */
  export type FertilizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fertilizer
     */
    select?: FertilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fertilizer
     */
    omit?: FertilizerOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    date: 'date',
    workerCount: 'workerCount',
    salaryPerOne: 'salaryPerOne',
    totalSalary: 'totalSalary'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const DrainageScalarFieldEnum: {
    id: 'id',
    date: 'date',
    hoursWorked: 'hoursWorked',
    totalSalary: 'totalSalary'
  };

  export type DrainageScalarFieldEnum = (typeof DrainageScalarFieldEnum)[keyof typeof DrainageScalarFieldEnum]


  export const EnergyScalarFieldEnum: {
    id: 'id',
    date: 'date',
    amountPaid: 'amountPaid',
    comment: 'comment'
  };

  export type EnergyScalarFieldEnum = (typeof EnergyScalarFieldEnum)[keyof typeof EnergyScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    date: 'date',
    shopName: 'shopName',
    price: 'price'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const TaxScalarFieldEnum: {
    id: 'id',
    date: 'date',
    amountPaid: 'amountPaid',
    comment: 'comment'
  };

  export type TaxScalarFieldEnum = (typeof TaxScalarFieldEnum)[keyof typeof TaxScalarFieldEnum]


  export const TransportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    transportType: 'transportType',
    comment: 'comment'
  };

  export type TransportScalarFieldEnum = (typeof TransportScalarFieldEnum)[keyof typeof TransportScalarFieldEnum]


  export const RepairScalarFieldEnum: {
    id: 'id',
    date: 'date',
    price: 'price',
    comment: 'comment'
  };

  export type RepairScalarFieldEnum = (typeof RepairScalarFieldEnum)[keyof typeof RepairScalarFieldEnum]


  export const OilScalarFieldEnum: {
    id: 'id',
    date: 'date',
    price: 'price',
    comment: 'comment'
  };

  export type OilScalarFieldEnum = (typeof OilScalarFieldEnum)[keyof typeof OilScalarFieldEnum]


  export const FertilizerScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    machineCount: 'machineCount',
    tonAmount: 'tonAmount',
    comment: 'comment'
  };

  export type FertilizerScalarFieldEnum = (typeof FertilizerScalarFieldEnum)[keyof typeof FertilizerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: IntFilter<"Worker"> | number
    date?: DateTimeFilter<"Worker"> | Date | string
    workerCount?: IntFilter<"Worker"> | number
    salaryPerOne?: FloatFilter<"Worker"> | number
    totalSalary?: FloatFilter<"Worker"> | number
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    date?: DateTimeFilter<"Worker"> | Date | string
    workerCount?: IntFilter<"Worker"> | number
    salaryPerOne?: FloatFilter<"Worker"> | number
    totalSalary?: FloatFilter<"Worker"> | number
  }, "id">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Worker"> | number
    date?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
    workerCount?: IntWithAggregatesFilter<"Worker"> | number
    salaryPerOne?: FloatWithAggregatesFilter<"Worker"> | number
    totalSalary?: FloatWithAggregatesFilter<"Worker"> | number
  }

  export type DrainageWhereInput = {
    AND?: DrainageWhereInput | DrainageWhereInput[]
    OR?: DrainageWhereInput[]
    NOT?: DrainageWhereInput | DrainageWhereInput[]
    id?: IntFilter<"Drainage"> | number
    date?: DateTimeFilter<"Drainage"> | Date | string
    hoursWorked?: FloatFilter<"Drainage"> | number
    totalSalary?: FloatFilter<"Drainage"> | number
  }

  export type DrainageOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type DrainageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DrainageWhereInput | DrainageWhereInput[]
    OR?: DrainageWhereInput[]
    NOT?: DrainageWhereInput | DrainageWhereInput[]
    date?: DateTimeFilter<"Drainage"> | Date | string
    hoursWorked?: FloatFilter<"Drainage"> | number
    totalSalary?: FloatFilter<"Drainage"> | number
  }, "id">

  export type DrainageOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
    _count?: DrainageCountOrderByAggregateInput
    _avg?: DrainageAvgOrderByAggregateInput
    _max?: DrainageMaxOrderByAggregateInput
    _min?: DrainageMinOrderByAggregateInput
    _sum?: DrainageSumOrderByAggregateInput
  }

  export type DrainageScalarWhereWithAggregatesInput = {
    AND?: DrainageScalarWhereWithAggregatesInput | DrainageScalarWhereWithAggregatesInput[]
    OR?: DrainageScalarWhereWithAggregatesInput[]
    NOT?: DrainageScalarWhereWithAggregatesInput | DrainageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Drainage"> | number
    date?: DateTimeWithAggregatesFilter<"Drainage"> | Date | string
    hoursWorked?: FloatWithAggregatesFilter<"Drainage"> | number
    totalSalary?: FloatWithAggregatesFilter<"Drainage"> | number
  }

  export type EnergyWhereInput = {
    AND?: EnergyWhereInput | EnergyWhereInput[]
    OR?: EnergyWhereInput[]
    NOT?: EnergyWhereInput | EnergyWhereInput[]
    id?: IntFilter<"Energy"> | number
    date?: DateTimeFilter<"Energy"> | Date | string
    amountPaid?: FloatFilter<"Energy"> | number
    comment?: StringFilter<"Energy"> | string
  }

  export type EnergyOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type EnergyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnergyWhereInput | EnergyWhereInput[]
    OR?: EnergyWhereInput[]
    NOT?: EnergyWhereInput | EnergyWhereInput[]
    date?: DateTimeFilter<"Energy"> | Date | string
    amountPaid?: FloatFilter<"Energy"> | number
    comment?: StringFilter<"Energy"> | string
  }, "id">

  export type EnergyOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
    _count?: EnergyCountOrderByAggregateInput
    _avg?: EnergyAvgOrderByAggregateInput
    _max?: EnergyMaxOrderByAggregateInput
    _min?: EnergyMinOrderByAggregateInput
    _sum?: EnergySumOrderByAggregateInput
  }

  export type EnergyScalarWhereWithAggregatesInput = {
    AND?: EnergyScalarWhereWithAggregatesInput | EnergyScalarWhereWithAggregatesInput[]
    OR?: EnergyScalarWhereWithAggregatesInput[]
    NOT?: EnergyScalarWhereWithAggregatesInput | EnergyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Energy"> | number
    date?: DateTimeWithAggregatesFilter<"Energy"> | Date | string
    amountPaid?: FloatWithAggregatesFilter<"Energy"> | number
    comment?: StringWithAggregatesFilter<"Energy"> | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    date?: DateTimeFilter<"Food"> | Date | string
    shopName?: StringNullableFilter<"Food"> | string | null
    price?: FloatFilter<"Food"> | number
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    shopName?: SortOrderInput | SortOrder
    price?: SortOrder
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    date?: DateTimeFilter<"Food"> | Date | string
    shopName?: StringNullableFilter<"Food"> | string | null
    price?: FloatFilter<"Food"> | number
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    shopName?: SortOrderInput | SortOrder
    price?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    date?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    shopName?: StringNullableWithAggregatesFilter<"Food"> | string | null
    price?: FloatWithAggregatesFilter<"Food"> | number
  }

  export type TaxWhereInput = {
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    id?: IntFilter<"Tax"> | number
    date?: DateTimeFilter<"Tax"> | Date | string
    amountPaid?: FloatFilter<"Tax"> | number
    comment?: StringFilter<"Tax"> | string
  }

  export type TaxOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type TaxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    date?: DateTimeFilter<"Tax"> | Date | string
    amountPaid?: FloatFilter<"Tax"> | number
    comment?: StringFilter<"Tax"> | string
  }, "id">

  export type TaxOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
    _count?: TaxCountOrderByAggregateInput
    _avg?: TaxAvgOrderByAggregateInput
    _max?: TaxMaxOrderByAggregateInput
    _min?: TaxMinOrderByAggregateInput
    _sum?: TaxSumOrderByAggregateInput
  }

  export type TaxScalarWhereWithAggregatesInput = {
    AND?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    OR?: TaxScalarWhereWithAggregatesInput[]
    NOT?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tax"> | number
    date?: DateTimeWithAggregatesFilter<"Tax"> | Date | string
    amountPaid?: FloatWithAggregatesFilter<"Tax"> | number
    comment?: StringWithAggregatesFilter<"Tax"> | string
  }

  export type TransportWhereInput = {
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    id?: IntFilter<"Transport"> | number
    date?: DateTimeFilter<"Transport"> | Date | string
    transportType?: StringFilter<"Transport"> | string
    comment?: StringFilter<"Transport"> | string
  }

  export type TransportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    transportType?: SortOrder
    comment?: SortOrder
  }

  export type TransportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    date?: DateTimeFilter<"Transport"> | Date | string
    transportType?: StringFilter<"Transport"> | string
    comment?: StringFilter<"Transport"> | string
  }, "id">

  export type TransportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    transportType?: SortOrder
    comment?: SortOrder
    _count?: TransportCountOrderByAggregateInput
    _avg?: TransportAvgOrderByAggregateInput
    _max?: TransportMaxOrderByAggregateInput
    _min?: TransportMinOrderByAggregateInput
    _sum?: TransportSumOrderByAggregateInput
  }

  export type TransportScalarWhereWithAggregatesInput = {
    AND?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    OR?: TransportScalarWhereWithAggregatesInput[]
    NOT?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transport"> | number
    date?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
    transportType?: StringWithAggregatesFilter<"Transport"> | string
    comment?: StringWithAggregatesFilter<"Transport"> | string
  }

  export type RepairWhereInput = {
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    id?: IntFilter<"Repair"> | number
    date?: DateTimeFilter<"Repair"> | Date | string
    price?: FloatFilter<"Repair"> | number
    comment?: StringFilter<"Repair"> | string
  }

  export type RepairOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type RepairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    date?: DateTimeFilter<"Repair"> | Date | string
    price?: FloatFilter<"Repair"> | number
    comment?: StringFilter<"Repair"> | string
  }, "id">

  export type RepairOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
    _count?: RepairCountOrderByAggregateInput
    _avg?: RepairAvgOrderByAggregateInput
    _max?: RepairMaxOrderByAggregateInput
    _min?: RepairMinOrderByAggregateInput
    _sum?: RepairSumOrderByAggregateInput
  }

  export type RepairScalarWhereWithAggregatesInput = {
    AND?: RepairScalarWhereWithAggregatesInput | RepairScalarWhereWithAggregatesInput[]
    OR?: RepairScalarWhereWithAggregatesInput[]
    NOT?: RepairScalarWhereWithAggregatesInput | RepairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repair"> | number
    date?: DateTimeWithAggregatesFilter<"Repair"> | Date | string
    price?: FloatWithAggregatesFilter<"Repair"> | number
    comment?: StringWithAggregatesFilter<"Repair"> | string
  }

  export type OilWhereInput = {
    AND?: OilWhereInput | OilWhereInput[]
    OR?: OilWhereInput[]
    NOT?: OilWhereInput | OilWhereInput[]
    id?: IntFilter<"Oil"> | number
    date?: DateTimeFilter<"Oil"> | Date | string
    price?: FloatFilter<"Oil"> | number
    comment?: StringFilter<"Oil"> | string
  }

  export type OilOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type OilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OilWhereInput | OilWhereInput[]
    OR?: OilWhereInput[]
    NOT?: OilWhereInput | OilWhereInput[]
    date?: DateTimeFilter<"Oil"> | Date | string
    price?: FloatFilter<"Oil"> | number
    comment?: StringFilter<"Oil"> | string
  }, "id">

  export type OilOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
    _count?: OilCountOrderByAggregateInput
    _avg?: OilAvgOrderByAggregateInput
    _max?: OilMaxOrderByAggregateInput
    _min?: OilMinOrderByAggregateInput
    _sum?: OilSumOrderByAggregateInput
  }

  export type OilScalarWhereWithAggregatesInput = {
    AND?: OilScalarWhereWithAggregatesInput | OilScalarWhereWithAggregatesInput[]
    OR?: OilScalarWhereWithAggregatesInput[]
    NOT?: OilScalarWhereWithAggregatesInput | OilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Oil"> | number
    date?: DateTimeWithAggregatesFilter<"Oil"> | Date | string
    price?: FloatWithAggregatesFilter<"Oil"> | number
    comment?: StringWithAggregatesFilter<"Oil"> | string
  }

  export type FertilizerWhereInput = {
    AND?: FertilizerWhereInput | FertilizerWhereInput[]
    OR?: FertilizerWhereInput[]
    NOT?: FertilizerWhereInput | FertilizerWhereInput[]
    id?: IntFilter<"Fertilizer"> | number
    date?: DateTimeFilter<"Fertilizer"> | Date | string
    type?: StringFilter<"Fertilizer"> | string
    machineCount?: IntNullableFilter<"Fertilizer"> | number | null
    tonAmount?: FloatNullableFilter<"Fertilizer"> | number | null
    comment?: StringFilter<"Fertilizer"> | string
  }

  export type FertilizerOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    machineCount?: SortOrderInput | SortOrder
    tonAmount?: SortOrderInput | SortOrder
    comment?: SortOrder
  }

  export type FertilizerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FertilizerWhereInput | FertilizerWhereInput[]
    OR?: FertilizerWhereInput[]
    NOT?: FertilizerWhereInput | FertilizerWhereInput[]
    date?: DateTimeFilter<"Fertilizer"> | Date | string
    type?: StringFilter<"Fertilizer"> | string
    machineCount?: IntNullableFilter<"Fertilizer"> | number | null
    tonAmount?: FloatNullableFilter<"Fertilizer"> | number | null
    comment?: StringFilter<"Fertilizer"> | string
  }, "id">

  export type FertilizerOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    machineCount?: SortOrderInput | SortOrder
    tonAmount?: SortOrderInput | SortOrder
    comment?: SortOrder
    _count?: FertilizerCountOrderByAggregateInput
    _avg?: FertilizerAvgOrderByAggregateInput
    _max?: FertilizerMaxOrderByAggregateInput
    _min?: FertilizerMinOrderByAggregateInput
    _sum?: FertilizerSumOrderByAggregateInput
  }

  export type FertilizerScalarWhereWithAggregatesInput = {
    AND?: FertilizerScalarWhereWithAggregatesInput | FertilizerScalarWhereWithAggregatesInput[]
    OR?: FertilizerScalarWhereWithAggregatesInput[]
    NOT?: FertilizerScalarWhereWithAggregatesInput | FertilizerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fertilizer"> | number
    date?: DateTimeWithAggregatesFilter<"Fertilizer"> | Date | string
    type?: StringWithAggregatesFilter<"Fertilizer"> | string
    machineCount?: IntNullableWithAggregatesFilter<"Fertilizer"> | number | null
    tonAmount?: FloatNullableWithAggregatesFilter<"Fertilizer"> | number | null
    comment?: StringWithAggregatesFilter<"Fertilizer"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type WorkerCreateInput = {
    date?: Date | string
    workerCount: number
    salaryPerOne: number
    totalSalary: number
  }

  export type WorkerUncheckedCreateInput = {
    id?: number
    date?: Date | string
    workerCount: number
    salaryPerOne: number
    totalSalary: number
  }

  export type WorkerUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workerCount?: IntFieldUpdateOperationsInput | number
    salaryPerOne?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workerCount?: IntFieldUpdateOperationsInput | number
    salaryPerOne?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerCreateManyInput = {
    id?: number
    date?: Date | string
    workerCount: number
    salaryPerOne: number
    totalSalary: number
  }

  export type WorkerUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workerCount?: IntFieldUpdateOperationsInput | number
    salaryPerOne?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workerCount?: IntFieldUpdateOperationsInput | number
    salaryPerOne?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type DrainageCreateInput = {
    date?: Date | string
    hoursWorked: number
    totalSalary: number
  }

  export type DrainageUncheckedCreateInput = {
    id?: number
    date?: Date | string
    hoursWorked: number
    totalSalary: number
  }

  export type DrainageUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type DrainageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type DrainageCreateManyInput = {
    id?: number
    date?: Date | string
    hoursWorked: number
    totalSalary: number
  }

  export type DrainageUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type DrainageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    totalSalary?: FloatFieldUpdateOperationsInput | number
  }

  export type EnergyCreateInput = {
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type EnergyUncheckedCreateInput = {
    id?: number
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type EnergyUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyCreateManyInput = {
    id?: number
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type EnergyUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateInput = {
    date?: Date | string
    shopName?: string | null
    price: number
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    date?: Date | string
    shopName?: string | null
    price: number
  }

  export type FoodUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodCreateManyInput = {
    id?: number
    date?: Date | string
    shopName?: string | null
    price: number
  }

  export type FoodUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxCreateInput = {
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type TaxUncheckedCreateInput = {
    id?: number
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type TaxUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TaxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TaxCreateManyInput = {
    id?: number
    date: Date | string
    amountPaid: number
    comment: string
  }

  export type TaxUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TaxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TransportCreateInput = {
    date: Date | string
    transportType: string
    comment: string
  }

  export type TransportUncheckedCreateInput = {
    id?: number
    date: Date | string
    transportType: string
    comment: string
  }

  export type TransportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    transportType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TransportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    transportType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TransportCreateManyInput = {
    id?: number
    date: Date | string
    transportType: string
    comment: string
  }

  export type TransportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    transportType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TransportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    transportType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RepairCreateInput = {
    date: Date | string
    price: number
    comment: string
  }

  export type RepairUncheckedCreateInput = {
    id?: number
    date: Date | string
    price: number
    comment: string
  }

  export type RepairUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RepairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RepairCreateManyInput = {
    id?: number
    date: Date | string
    price: number
    comment: string
  }

  export type RepairUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RepairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type OilCreateInput = {
    date: Date | string
    price: number
    comment: string
  }

  export type OilUncheckedCreateInput = {
    id?: number
    date: Date | string
    price: number
    comment: string
  }

  export type OilUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type OilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type OilCreateManyInput = {
    id?: number
    date: Date | string
    price: number
    comment: string
  }

  export type OilUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type OilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FertilizerCreateInput = {
    date: Date | string
    type: string
    machineCount?: number | null
    tonAmount?: number | null
    comment: string
  }

  export type FertilizerUncheckedCreateInput = {
    id?: number
    date: Date | string
    type: string
    machineCount?: number | null
    tonAmount?: number | null
    comment: string
  }

  export type FertilizerUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    machineCount?: NullableIntFieldUpdateOperationsInput | number | null
    tonAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FertilizerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    machineCount?: NullableIntFieldUpdateOperationsInput | number | null
    tonAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FertilizerCreateManyInput = {
    id?: number
    date: Date | string
    type: string
    machineCount?: number | null
    tonAmount?: number | null
    comment: string
  }

  export type FertilizerUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    machineCount?: NullableIntFieldUpdateOperationsInput | number | null
    tonAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FertilizerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    machineCount?: NullableIntFieldUpdateOperationsInput | number | null
    tonAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    id?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    id?: SortOrder
    workerCount?: SortOrder
    salaryPerOne?: SortOrder
    totalSalary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DrainageCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type DrainageAvgOrderByAggregateInput = {
    id?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type DrainageMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type DrainageMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type DrainageSumOrderByAggregateInput = {
    id?: SortOrder
    hoursWorked?: SortOrder
    totalSalary?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnergyCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type EnergyAvgOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnergyMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type EnergyMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type EnergySumOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    shopName?: SortOrder
    price?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    shopName?: SortOrder
    price?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    shopName?: SortOrder
    price?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TaxCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type TaxAvgOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
  }

  export type TaxMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type TaxMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amountPaid?: SortOrder
    comment?: SortOrder
  }

  export type TaxSumOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    transportType?: SortOrder
    comment?: SortOrder
  }

  export type TransportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    transportType?: SortOrder
    comment?: SortOrder
  }

  export type TransportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    transportType?: SortOrder
    comment?: SortOrder
  }

  export type TransportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepairCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type RepairAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type RepairMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type RepairMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type RepairSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type OilCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type OilAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type OilMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type OilMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    comment?: SortOrder
  }

  export type OilSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FertilizerCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    machineCount?: SortOrder
    tonAmount?: SortOrder
    comment?: SortOrder
  }

  export type FertilizerAvgOrderByAggregateInput = {
    id?: SortOrder
    machineCount?: SortOrder
    tonAmount?: SortOrder
  }

  export type FertilizerMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    machineCount?: SortOrder
    tonAmount?: SortOrder
    comment?: SortOrder
  }

  export type FertilizerMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    machineCount?: SortOrder
    tonAmount?: SortOrder
    comment?: SortOrder
  }

  export type FertilizerSumOrderByAggregateInput = {
    id?: SortOrder
    machineCount?: SortOrder
    tonAmount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}