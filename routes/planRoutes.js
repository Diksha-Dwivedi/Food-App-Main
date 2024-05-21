const express = require("express");
const planRouter = express.Router();
const PlanModel = require('../models/planModel');

const{getAllPlans}=require('../controllers/planController'); 

planRouter.route('/')
.get(getAllPlans)

module.exports=planRouter;