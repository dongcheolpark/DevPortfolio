import express, { Request, Response, NextFunction, Router } from 'express';
import { home } from './router/home';
import { sessionData } from './lib/DbConfig';
import { Controller } from './common/interfaces/Icontroller';
import { ErrorMiddleware } from './middleware/errorMiddleware';
import LoginController from './API/login';
import { PortfolioController } from './API/portfolio';

class App {
  private app : express.Application;

  constructor(controller : Controller[]) {
    this.app = express();

    this.initialMiddleWare();
    this.initialController(controller);

    this.app.use(ErrorMiddleware);
  }

  public startServer() {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    })
  }

  private initialMiddleWare() {
    this.app.use(sessionData);
  }

  private initialController(controllers : Controller[]) {
    const router = Router();

    router.get('/', (req, res) => res.send('OK'));

    controllers.forEach((controller) => {
      router.use(controller.router);
    });

    this.app.use('/api', router);
  }
  private initialFrontRouter() {
    this.app.use('/',home);
    this.app.use('/about',home);
    this.app.use('/admin',home);

    this.app.use(express.static('public'));
  }
}

const app = new App([
  new LoginController(),
  new PortfolioController()
]);

app.startServer();
