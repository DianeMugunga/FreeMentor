import express from "express";
import sessionControler from "../controler/sessioncontroler";
import verifyAccess from "../midleware/verifyAccess";
import verifyToken from "../midleware/verifyToken";

const sessionRouter=express.Router();
sessionRouter.post("/request",verifyToken,verifyAccess("user"),sessionControler.sessionRequest);
sessionRouter.post("/reg",sessionControler.sessionRegister);
sessionRouter.get("/all",sessionControler.getAllSession);
sessionRouter.get("/:id",sessionControler.getOneSession);
sessionRouter.patch("/:id/status",verifyToken,verifyAccess("mentor"),sessionControler.updateSessionStatusAproved);
sessionRouter.patch("/:id/dec",verifyToken,verifyAccess("mentor"),sessionControler.updateSessionStatusDeclined);
sessionRouter.patch("/:id",sessionControler.updateOneSession);
sessionRouter.delete("/:id",sessionControler.DeleteOneSession);

export default sessionRouter; 
