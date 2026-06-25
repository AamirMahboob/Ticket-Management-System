import { Router } from "express";
import {
  activateUser,
  deactivateUser,
  getUserById,
  getUsers,
  registerUser,
  updateUser,
} from "../controller/user.controller";

import { loginUser } from "../controller/auth.controller";
import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

// Public Routes
router.post("/login", loginUser);

// Protected Routes
router.post("/register", authenticate, registerUser);
router.get("/users", authenticate,authorize("agent", "admin"), getUsers);
router.get("/user:id", authenticate, getUserById);
router.put("/user:id", authenticate, updateUser);
router.patch("/user:id/activate", authenticate, activateUser);
router.patch("/user:id/deactivate", authenticate, deactivateUser);

export default router;