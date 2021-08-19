import { ValidationError } from "../exceptions/Http-exception"
import { Request, Response, NextFunction } from "express";


export default function errorHandler(error : ValidationError, req : Request, res : Response, next : NextFunction) {
    const errObject = {
        message : error.message || "Something went wrong",
        status_code : error.status_code || 100,
    };
    res.status(error.status).send(error.message);
}