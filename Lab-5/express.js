// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const userData = [
//   {
//     id: 101,
//     name: "abc",
//     email: "abc@gmail.com",
//   },
// ];

// app.get("/users", (req, res) => {
//   res.status(200).json(userData);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const userData = [
//   {
//     id: 101,
//     name: "abc",
//     email: "abc@gmail.com",
//   },
// ];

// app.get("/users", (req, res) => {
//   res.status(200).json(userData);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from "express";

const app = express();

app.use(express.json());

const userData = [
  {
    id: 101,
    name: "abc",
    email: "abc@gmail.com",
  },
];
app.get("/msg", (req, res) => {
  res.status(200).json({msg:"welcome user"});
});
app.get("/users", (req, res) => {
  res.status(200).json(userData);
});
app.post("/create",(resq,res)=>{
    const{id,name,email} =req.body
    const newuser={
        id,
        name,
        email
    }
    userData.push(newuser)
    res.status(201).json({message : "user created successfully",newuser})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});