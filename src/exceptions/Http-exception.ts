export class Exception extends Error {
    status: number;
    message: string;
    status_code: number;
  
    constructor(status: number, message: string, status_code: number) {
        super(message);
        this.status = status;
        this.message = message;
        this.status_code = status_code;
      }
    }

    export class MemoryNotFoundError extends Exception {
        constructor(message?: string) {
          message = message || " Did not found memory !!";
          super(404, message, 103);
        }
      }
      
      export class ValidationError extends Exception {
        constructor(message?: string) {
          message = message || " Input did not pass validation !! ";
          super(500, message, 104);
        }
      }

      export class DatabaseError extends Exception {
        constructor(message?: string) {
          message = message || " Something wrong with database !! ";
          super(500, message, 105);
        }
      }