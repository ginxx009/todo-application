const Task = require("../Models/tasks");
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

route.post("/", async(req, res) => {
    try{
        const task = await new Task(req.body).save();
        res.send(task);
    }catch(error){
        res.send(error);
    }
});

router.get("/", async(req, res) => {
    try{
        const task = await Task.find();
        res.send(task);
    }catch(error){
        res.send(error)
    }
});

router.put("/:id", async(req, res) => {
    try{
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(task)
    }catch(error)
    {
        res.send(error);
    }
});

router.delete("/:id", async(req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    }catch(error){
        res.send(error);
    }
});

module.exports = router;