import { parse } from "dotenv";
import express from "express";
import todosData from '../todos.json' assert { type: 'json' };


const app = express();



export {app}