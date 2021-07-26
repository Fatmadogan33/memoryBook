import * as express from "express";
import BaseController from "./base.controller";
import schemas from "../validation/memory.validation";
import Joi from "joi";
import { ValidationError } from "../exceptions/ValidationError";
import { MemoryService }from "../services/memory.service";



export class MemoryController extends BaseController{
    memoryService : MemoryService;
    
  constructor() {
    super();
    this.initializeRoutes();
    this.memoryService = new MemoryService();
  }

  getAllMemories(req: express.Request, res: express.Response, next: express.NextFunction) {
    this.memoryService.getAllMemory().then((memory) => {
        return res.status(200).send(memory);
      })
      .catch((err) => {
        next(err);
      });
  }

  addMemory(req: express.Request, res: express.Response, next: express.NextFunction) {

    const { body } = req;

    schemas.validateMemory
      .validateAsync(body)
      .then((validatedMemory) => {

        this.memoryService
          .addMemory(validatedMemory)
          .then((memory) => {
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

    schemas.validateMemoryId
      .validateAsync(memory_id)
      .then((validatedId) => {
        this.memoryService
          .getMemoryById(validatedId)
          .then((memory) => {
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

    schemas.validateMemoryId
      .validateAsync(memory_id)
      .then((validatedId) => {
        this.memoryService
          .deleteMemoryById(validatedId)
          .then((_) => {
            return res.status(200).send();
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
    validateObj.id = memory_id;

    schemas.validateUpdateMemory
      .validateAsync(validateObj)
      .then((validatedMemory) => {
            this.memoryService
              .updateMemory(validatedMemory)
              .then((memory) => {
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

  initializeRoutes() {
    this.router.get("/", this.getAllMemories.bind(this));
    this.router.post("/", this.addMemory.bind(this));
    this.router.get("/:memory_id", this.getMemory.bind(this));
    this.router.delete("/:memory_id", this.deleteMemory.bind(this));
    this.router.put("/:memory_id", this.updateMemory.bind(this))
  }
}

const memoryController = new MemoryController();
export default memoryController.router;
    
  
}