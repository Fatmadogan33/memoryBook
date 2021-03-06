import * as express from "express";
import BaseController from "./base.controller";
import schemas from "../validation/memory.validation";
import Joi, { number } from "joi";
import { ValidationError } from "../exceptions/Http-exception";
import { MemoryService } from "../services/memory.service";



export class MemoryController extends BaseController {
  memoryService: MemoryService;

  constructor() {
    super();
    this.initializeRoutes();
    this.memoryService = new MemoryService();
  }

  getAllMemories(req: express.Request, res: express.Response, next: express.NextFunction) {
    const memory_id = req.params;

    this.memoryService.getAllMemories(req.params).then((memory) => {
      return res.status(200).send(memory);
    })
      .catch((err) => {
        next(err);
      });
  }

  addMemory(req: express.Request, res: express.Response, next: express.NextFunction) {

    const { body } = req;

    console.log("add memory istegi geldi.");

    schemas.validateAllValues.validateAsync(body).then((validatedMemory) => {
      this.memoryService.addMemory(validatedMemory).then((memory) => {
        return res.status(201).send(memory);
      })
        .catch((err) => {
          next(err);
        });

    })
      .catch((err: Joi.ValidationError) => {
        next(new ValidationError(err.message));
      });
  }

  getMemory(req: express.Request, res: express.Response, next: express.NextFunction) {

    const memory_id = req.params.memory_id;

    const validateObj = req.body;
    validateObj.memory_id = memory_id;

    console.log("get memory istegi geldi.");

    schemas.validateId.validateAsync(validateObj).then((validatedId) => {
      this.memoryService.getMemory(validatedId).then((memory) => {
        if (memory == null) {
          console.log("User Not Found! Id:" + memory_id);
          return res.status(404).send("User Not Found! Id:" + memory_id);
        }
        console.log("User Found. Id:" + memory_id);

        return res.status(200).send(memory);
      })
        .catch((err) => {
          next(err);
        });
    })
      .catch((err: Joi.ValidationError) => {
        next(new ValidationError(err.message));
      });
  }

  deleteMemory(req: express.Request, res: express.Response, next: express.NextFunction) {

    const memory_id = req.params.memory_id;

    const validateObj = req.body;
    validateObj.memory_id = memory_id;

    console.log("delete memory istegi geldi.");

    schemas.validateId.validateAsync(validateObj).then((validatedId) => {
      this.memoryService.deleteMemory(validatedId).then((isSuccess) => {
        if(isSuccess){
          return res.status(200).send(memory_id+" memory successfully deleted.");
        }
        return res.status(404).send(memory_id+" memory not found!");
      })
        .catch((err) => {
          next(err);
        });
    })
      .catch((err: Joi.ValidationError) => {
        next(new ValidationError(err.message));
      });
  }

  updateMemory(req: express.Request, res: express.Response, next: express.NextFunction) {

    const memory_id = req.params.memory_id;
    const { body } = req;

    const validateObj = req.body;
    validateObj.memory_id = memory_id;

    console.log("update memory istegi geldi.");

    schemas.validateAllValues.validateAsync(validateObj).then((validatedMemory) => {
      this.memoryService.updateMemory(validatedMemory).then((memory) => {
        return res.status(200).send(memory);
      })
        .catch((err) => {
          next(err);
        });
    })
      .catch((err: Joi.ValidationError) => {
        next(new ValidationError(err.message));
      });
  }

  initializeRoutes() {
    this.router.get("/all-:order_column-:order_type", this.getAllMemories.bind(this));
    this.router.post("/", this.addMemory.bind(this));
    this.router.get("/:memory_id", this.getMemory.bind(this));
    this.router.delete("/:memory_id", this.deleteMemory.bind(this));
    this.router.put("/:memory_id", this.updateMemory.bind(this))
  }
}

const memoryController = new MemoryController();
export default memoryController.router;