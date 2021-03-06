import express from 'express';
import config from './config';
import serverRender from './components/renderers/server';
import {data} from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine' , 'ejs');

app.get('/',async (req,res) => {
  const intialContent = await serverRender();
  res.render('index', { ...intialContent });
});

app.get('/data',(req,res) => {
  res.send(data);
});

app.listen(config.port,function listenHandler(){
  console.info(`Running on port  ${config.port}`);
});
