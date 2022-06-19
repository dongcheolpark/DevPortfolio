import express, { Request, Response, NextFunction, Router } from 'express';
import { aboutRouter } from './router/aboutrouter';
import { testApiRouter } from './router/testApi';
import { home } from './router/home';
const app = express();
 
app.use('/aboutrouter',aboutRouter);
app.use('/testapi',testApiRouter);
app.use('/',home);

app.listen(3000, () => {
  console.log('listen t0 3000')
})
 
