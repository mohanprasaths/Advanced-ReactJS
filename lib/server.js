import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine' , 'ejs');

app.get('/',(req,res) => {
  const intialContent = serverRender();
  res.render('index', { intialContent });
});

app.listen(config.port,function listenHandler(){
  console.info(`Running on port  ${config.port}`);
});
