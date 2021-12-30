import express, { Request, Response, NextFunction } from "express";
import { UserController } from "../controller/controller";


export class Routes {
  public userController: UserController = new UserController();
  public routes(app: express.Application): void {    
    app.get("/fetch", this.userController.getUser);
    app.delete("/del", this.userController.deleteUser);
    app.post("/insert", this.userController.createUser);
    app.put("/update", this.userController.updateUser);
  }

}
