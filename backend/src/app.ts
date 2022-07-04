import express, { Request, Response, NextFunction, Router } from 'express';
import { aboutRouter } from './router/aboutrouter';
import { testApiRouter } from './router/testApi';
import { home } from './router/home';
const app = express();

/// <backend-router> 
app.use('/aboutrouter',aboutRouter);
app.use('/testapi',testApiRouter);
/// </backend-router> 

/// <frontend-router> 
app.use('/',home);
app.use('/about',home);
/// </frontend-router> 

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listen ' + port)
})
 
