// import { z } from "zod";
// import { ApiErrorResponseSchema } from "@support/types/Support";
// import { createDataSchema, createTopLevelSchema } from "@app/schemas";
// import { Prisma } from "@prisma/client";

// export const UserSchema = z.object({
//   id: z.string().uuid(),
//   email: z.string().email(),
//   firstName: z.string(),
//   lastName: z.string(),
//   testUser: z.boolean().default(false),
//   avatarUrl: z.string().url().nullable(),
//   createdAt: z.date(),
//   updatedAt: z.date(),
//   deletedAt: z.date().nullish(),
// });

// export const CreateUserSchema = z.object({
//   email: z.string().email(),
//   firstName: z.string().nonempty(),
//   lastName: z.string().nonempty(),
//   avatarUrl: z.string().url().nullable(),
//   testUser: z.boolean().default(false),
// });

// const UserCreateResponseSchema = createTopLevelSchema(
//   createDataSchema(Prisma.ModelName.User, UserSchema.omit({ id: true }), null),
//   null
// );

// export const UserSchemas = {
//   REQUESTS: {
//     CREATE_USER: {
//       body: CreateUserSchema,
//     },
//   },
//   RESPONSES: {
//     CREATE_USER: [
//       {
//         status: 201,
//         name: "Success",
//         description: "Successful response description",
//         schema: UserCreateResponseSchema,
//       },
//       {
//         status: 400,
//         name: "Bad Request",
//         description: "Bad request description",
//         schema: ApiErrorResponseSchema,
//       },
//       {
//         status: 500,
//         name: "Internal Server Error",
//         description: "Internal server error description",
//         schema: ApiErrorResponseSchema,
//       },
//     ],
//   },
// };
