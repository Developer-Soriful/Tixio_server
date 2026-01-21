import { z } from "zod";

export const getUsersQuerySchema = z.object({
  search: z.string().min(1).optional(),
  role: z.enum(["admin", "editor", "viewer"]).optional(),
});

export const userIdParamSchema = z.object({
  id: z.string().min(1),
});

export type GetUsersQueryDto = z.infer<typeof getUsersQuerySchema>;
export type UserIdParamDto = z.infer<typeof userIdParamSchema>;
