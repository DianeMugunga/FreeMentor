import express from "express";
import UserControler from "../userControler";

const userRoutes =express.Router();

userRoutes.post("/signup",UserControler.signupUser);

userRoutes.get("/all",UserControler.getAllUser);

userRoutes.get("/:id",UserControler.getOneUser);

userRoutes.patch("/:id",UserControler.updateOneUser);

userRoutes.delete("/:id",UserControler.deleteOneUser);

export  default userRoutes;
