import express, { Request, Response, NextFunction, Router } from 'express';
import { testApiRouter } from './router/testApi';
import { APIRouter } from './router/api';
import { home } from './router/home';
const app = express();

/// <backend-router> 
app.use('/testapi',testApiRouter);
app.use('/api,',APIRouter);
app.use('/.well-known',express.Router().get('/acme-challenge/VGxbCYzhs2N4cgqK86z3d3uuFVY6KwDeLxuicJIdquo',async (req,res) => {
  res.send('VGxbCYzhs2N4cgqK86z3d3uuFVY6KwDeLxuicJIdquo.Vw_s_h3rVig6w1KrvLYX2AHVdqdIiPn8y3TU6nUyAv4')
}))
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
 
