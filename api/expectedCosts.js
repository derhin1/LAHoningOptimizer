const express = require("express");
const expectedCostsRouter = express.Router();
const { Cost } = require("../db/models");

expectedCostsRouter.post("/addCost/7-11", async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

module.exports = expectedCostsRouter;
