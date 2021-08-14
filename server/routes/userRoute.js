import express from "express";
import UserControler from "../controler/userControler";
import validator from "../midleware/validator";
import Datachecker from "../midleware/datachecker";
import verifyToken from "../midleware/verifyToken.js";
import verifyAccess from "../midleware/verifyAccess.js";
import Validator from "../midleware/validator";

const userRoutes =express.Router();

userRoutes.post("/signup",
    validator.newAccountRules(),
    validator.validateInput,
    Datachecker.validateEmailDuplication,
    Datachecker.checkAge,
    UserControler.signupUser);

userRoutes.post("/signup",UserControler.signupUser);

userRoutes.get("/all",UserControler.getAllUser);

userRoutes.get("/all/mentors",verifyToken,verifyAccess("user"),UserControler.getAllMentors);

userRoutes.get("/:id",verifyToken,verifyAccess("user"),validator.checkId(),validator.validateInput, UserControler.getOneUser);

userRoutes.patch("/:id",Validator.checkId(),Validator.validateInput,UserControler.updateOneUser);

userRoutes.delete("/:id",validator.checkId(),validator.validateInput,UserControler.deleteOneUser);

userRoutes.patch("/:id/role",verifyToken,verifyAccess("admin"),UserControler.updateUserRole);

userRoutes.post("/signin", UserControler.signinUser);

userRoutes.patch("/:id/role",UserControler.updateUserRole);






export  default userRoutes;
