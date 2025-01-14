
//const express = require("express");
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
//const mongoose = require("mongoose");
const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
//const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://abhishek867492:UWRkany9ofQ0JcTw@cluster0.y5npipz.mongodb.net/ongodb.net/todoList',{  dbName: "todoApp" });
