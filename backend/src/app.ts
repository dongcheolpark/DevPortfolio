import express, { Request, Response, NextFunction, Router } from 'express';
import { testApiRouter } from './router/testApi';
import { home } from './router/home';
import { APIRouter } from './router/api';
import { refererCheck } from './middleware/referCheck';
import { sessionData } from './lib/DbConfig';
const app = express();

/// <middle-ware>
app.use(sessionData);
app.use(refererCheck);
/// </middle-ware>

/// <backend-router> 
app.use('/testapi',testApiRouter);
app.use('/api',APIRouter);
/// </backend-router> 

/// <frontend-router> 
app.use('/',home);
app.use('/about',home);
app.use('/admin',home);
/// </frontend-router> 

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listen ' + port)
})
 
