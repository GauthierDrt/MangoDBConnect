import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect'
import {logger} from './helpers/logger';

const app = express();

app.listen(3000, ()=>{
    logger.info("Hallo Welt !");
    connect();
});

