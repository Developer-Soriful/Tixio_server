import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      ...req.params,
      ...req.query,
      ...req.body,
    });

    if (!result.success) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request data",
        errors: result.error.flatten().fieldErrors,
      });
    }

    next();
  };
