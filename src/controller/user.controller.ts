// src/controllers/auth.controller.ts

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    // check existing user
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      isActive: true,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role", "isActive"],
    });

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getUserById = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email", "role", "isActive"],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const { name, email, role } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.update({
      name,
      email,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const activateUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.update({
      isActive: true,
    });

    return res.status(200).json({
      success: true,
      message: "User activated successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deactivateUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.update({
      isActive: false,
    });

    return res.status(200).json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};