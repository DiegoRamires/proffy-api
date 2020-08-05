import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnnectionController from "./controllers/ConnectionController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnnectionController();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
