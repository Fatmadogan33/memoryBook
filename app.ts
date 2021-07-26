import express from "express";
import memoryController from "./src/controller/memory.controller";
import errorHandler from "./src/middleware/errormiddleware";
 

class MemoryApp {
    app: express.Application;
    appRouter: express.Router;

    constructor() {
      this.app = express();
      this.appRouter = express.Router();
    }
  
    init() {
      return new Promise((resolve, reject) => {
        try {
          this.app.appConfig();
          this.app.routeConfig();
          

        } catch (error) {
          console.log(error);

        } finally {
          this.app.use(errorHandler);
          
    
        }
      })
      });

      private appConfig(){
        
        this.app.use(express.json());
    }
    private routeConfig() {
      const apiPath: string = "/api";
      this.app.use(apiPath, this.appRouter);
      this.appRouter.use("/memory", memoryController);
    }
  
    listen(): Promise<boolean> {
      return new Promise((resolve, reject) => {
  
        const port = Number(process.env.APP_PORT || 3000);
        this.app.listen(port, () => {
          console.log("Express server started on port: " + port);
          resolve(true);
        });
  
      });
    }
  

  const application = new MemoryApp();
  
  export default application;
