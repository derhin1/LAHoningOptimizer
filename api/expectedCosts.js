const express = require("express");
const expectedCostsRouter = express.Router();
const { Cost } = require("../db/models");

expectedCostsRouter.post("/addCost/7-11", async (req, res, next) => {
  try {
    // console.log(req.body);
    let cost_7_11 = await Cost.getSuccessRates_7_11(); // cost_7_11 is an array of objects with key value = to col name
    let materialArmorCosts = await Cost.getArmorMaterialCosts();
    let materialWeaponCosts = await Cost.getWeaponMaterialCosts();
    let expectedWeaponCost = {};
    let expectedArmorCost = {};
    // console.log(materialWeaponCosts);
    cost_7_11.forEach((row) => {
      expectedWeaponCost.combination = row.combination;
      expectedArmorCost.combination = row.combination;
      let bookCount = expectedWeaponCost.combination.substring(
        expectedWeaponCost.combination.indexOf("S") + 2,
        expectedWeaponCost.combination.length
      );
      let graceCount = expectedWeaponCost.combination.substring(
        2,
        expectedWeaponCost.combination.indexOf("B")
      );
      graceCount = parseInt(graceCount);
      let blessingCount = expectedWeaponCost.combination.substring(
        expectedWeaponCost.combination.indexOf("B") + 2,
        expectedWeaponCost.combination.indexOf("P")
      );
      blessingCount = parseInt(blessingCount);
      let protectionCount = expectedWeaponCost.combination.substring(
        expectedWeaponCost.combination.indexOf("P") + 2,
        expectedWeaponCost.combination.indexOf("S")
      );
      protectionCount = parseInt(protectionCount);
      expectedWeaponCost[7] = Math.floor(
        (1 / row[7]) *
          (materialWeaponCosts[0].destruction_stone * req.body[1] +
            materialWeaponCosts[0].ghl * req.body[2] +
            materialWeaponCosts[0].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[0].gold)
      );
      expectedArmorCost[7] = Math.floor(
        (1 / row[7]) *
          (materialArmorCosts[0].guardian_stone * req.body[0] +
            materialArmorCosts[0].ghl * req.body[2] +
            materialArmorCosts[0].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[0].gold)
      );
      expectedWeaponCost[8] = Math.floor(
        (1 / row[8]) *
          (materialWeaponCosts[1].destruction_stone * req.body[1] +
            materialWeaponCosts[1].ghl * req.body[2] +
            materialWeaponCosts[1].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[1].gold)
      );
      expectedArmorCost[8] = Math.floor(
        (1 / row[8]) *
          (materialArmorCosts[1].guardian_stone * req.body[0] +
            materialArmorCosts[1].ghl * req.body[2] +
            materialArmorCosts[1].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[1].gold)
      );
      expectedWeaponCost[9] = Math.floor(
        (1 / row[9]) *
          (materialWeaponCosts[2].destruction_stone * req.body[1] +
            materialWeaponCosts[2].ghl * req.body[2] +
            materialWeaponCosts[2].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[2].gold)
      );
      expectedArmorCost[9] = Math.floor(
        (1 / row[9]) *
          (materialArmorCosts[2].guardian_stone * req.body[0] +
            materialArmorCosts[2].ghl * req.body[2] +
            materialArmorCosts[2].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[2].gold)
      );
      expectedWeaponCost[10] = Math.floor(
        (1 / row[10]) *
          (materialWeaponCosts[3].destruction_stone * req.body[1] +
            materialWeaponCosts[3].ghl * req.body[2] +
            materialWeaponCosts[3].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[3].gold)
      );
      expectedArmorCost[10] = Math.floor(
        (1 / row[10]) *
          (materialArmorCosts[3].guardian_stone * req.body[0] +
            materialArmorCosts[3].ghl * req.body[2] +
            materialArmorCosts[3].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[3].gold)
      );
      expectedWeaponCost[11] = Math.floor(
        (1 / row[11]) *
          (materialWeaponCosts[4].destruction_stone * req.body[1] +
            materialWeaponCosts[4].ghl * req.body[2] +
            materialWeaponCosts[4].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[4].gold)
      );
      expectedArmorCost[11] = Math.floor(
        (1 / row[11]) *
          (materialArmorCosts[4].guardian_stone * req.body[0] +
            materialArmorCosts[4].ghl * req.body[2] +
            materialArmorCosts[4].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[4].gold)
      );
      Cost.addExpectedCost_weapon_7_11(expectedWeaponCost);
      Cost.addExpectedCost_armor_7_11(expectedArmorCost);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = expectedCostsRouter;
