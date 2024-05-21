const PlanModel = require('../models/planModel');

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await PlanModel.find();
    if (plans) {
      return res.json({
        message: "All plans retrieved",
        data: plans,
      });
    } else {
      return res.json({
        message: "Plans not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
