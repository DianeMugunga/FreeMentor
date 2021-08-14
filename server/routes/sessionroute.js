import express from "express";
import sessionControler from "../controler/sessioncontroler";

const sessionRouter=express.Router();
sessionRouter.post("/reg",sessionControler.sessionRegister);
sessionRouter.get("/all",sessionControler.getAllSession);
sessionRouter.get("/:id",sessionControler.getOneSession);
sessionRouter.patch("/:id/status",sessionControler.updateSessionStatusAproved);
sessionRouter.patch("/:id/dec",sessionControler.updateSessionStatusDeclined);
sessionRouter.patch("/:id",sessionControler.updateOneSession);
sessionRouter.delete("/:id",sessionControler.DeleteOneSession);

export default sessionRouter;
