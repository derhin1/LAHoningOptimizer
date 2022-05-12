const express = require("express");
const expectedCostsRouter = express.Router();
const { Cost } = require("../db/models");

expectedCostsRouter.post("/addCost/7-11", async (req, res, next) => {
  try {
    console.log(req.body);
    let cost_7_11 = await Cost.getSuccessRates_7_11(); // cost_7_11 is an array of objects with key value = to col name
    let materialArmorCosts = await Cost.getArmorMaterialCosts();
    let materialWeaponCosts = await Cost.getWeaponMaterialCosts();
    console.log(materialArmorCosts);
    // cost_7_11.forEach((row) => {
    //   row[7] =
    // });
  } catch (error) {
    next(error);
  }
});

module.exports = expectedCostsRouter;
