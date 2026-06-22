// // src/controllers/auth.controller.ts

// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { User } from "../models/User";

// export const loginUser = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
  
//   try {
   
//     const { email, password } = req.body;
    

//     const user = await User.findOne({
//       where: { email },
//     });
//     console.log("USER FROM DB:", user);
//     console.log("DB PASSWORD:", user?.password);
//     console.log("INPUT PASSWORD:", password);
//     if (!user) {
//       res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//       return;
//     }

//     const isMatch = await bcrypt.compare(password, user.dataValues.password);

//     if (!isMatch) {
//       res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//       return;
//     }
//     console.log("LOGIN USER:", user);
// console.log("USER ID:", user.id);
// console.log("USER ROLE:", user.role);

//     const token = jwt.sign(
//       {
//         id: user.id,
//         role: user.role,
//       },
//       process.env.JWT_SECRET!,
//       {
//         expiresIn: "1d",
//       }
//     );

//     res.status(200).json({
//       success: true,
//       token,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // ✅ FIX: always use getDataValue
    const dbPassword = user.getDataValue("password");

    const isMatch = await bcrypt.compare(password, dbPassword);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const userId = user.getDataValue("id");
    const userRole = user.getDataValue("role");
    const userName = user.getDataValue("name");
    const userEmail = user.getDataValue("email");

    console.log("LOGIN USER:", {
      id: userId,
      role: userRole,
    });

    const token = jwt.sign(
      {
        id: userId,
        role: userRole,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: userId,
        name: userName,
        email: userEmail,
        role: userRole,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};