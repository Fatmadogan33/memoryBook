/* import { NextFunction, Request, Response } from "express";
import RequestPagination from "src/interface/requestPagination";
import { ValidationError } from "../exceptions/Http-exception";


async function paginationMiddleware(request: RequestPagination, response: Response, next: NextFunction) {


    const paginationOptions = new RequestPagination();

    if (request.query.sortBy && request.query.orderBy) {
        paginationOptions.enable = true;
        paginationOptions.orderBy = request.query.orderBy.toString();
        paginationOptions.orderSort = request.query.sortBy === "desc" ? "desc" : "asc";
    }
    else{
        paginationOptions.orderSort = "asc";
    }

    if(request.query.limit != undefined || request.query.limit != "" ) {
        paginationOptions.enable = true;
        paginationOptions.limit = Number(request.query.limit);
    }
    else{
        paginationOptions.limit = 15;
    }

    if (request.query.skip != undefined || request.query.skip != "") {
    paginationOptions.enable = true;
    paginationOptions.skip = Number(request.query.skip);
    }
    else {
        paginationOptions.skip = 0;
    }

    try {
        request.paginationOptions = paginationOptions;
        next();
    }
    catch (error) {
        next(new ValidationError());
    }
    

}
 */