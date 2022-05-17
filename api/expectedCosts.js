const express = require("express");
const expectedCostsRouter = express.Router();
const { Cost } = require("../db/models");

expectedCostsRouter.patch("/addCost/7-11", async (req, res, next) => {
  try {
    let cost_7_11 = await Cost.getSuccessRates_7_11();
    let materialArmorCosts = await Cost.getArmorMaterialCosts();
    let materialWeaponCosts = await Cost.getWeaponMaterialCosts();
    let expectedWeaponCost = {};
    let expectedArmorCost = {};
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
    res.send({ message: "Successfully updated market for 7-11" });
    console.log("successfully updated Market for 7-11");
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.patch("/addCost/12-17", async (req, res, next) => {
  try {
    let cost_12_17 = await Cost.getSuccessRates_12_17();
    let materialArmorCosts = await Cost.getArmorMaterialCosts();
    let materialWeaponCosts = await Cost.getWeaponMaterialCosts();
    let expectedWeaponCost = {};
    let expectedArmorCost = {};
    cost_12_17.forEach((row) => {
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
      expectedWeaponCost[12] = Math.floor(
        (1 / row[12]) *
          (materialWeaponCosts[5].destruction_stone * req.body[1] +
            materialWeaponCosts[5].ghl * req.body[2] +
            materialWeaponCosts[5].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[5].gold)
      );
      expectedArmorCost[12] = Math.floor(
        (1 / row[12]) *
          (materialArmorCosts[5].guardian_stone * req.body[0] +
            materialArmorCosts[5].ghl * req.body[2] +
            materialArmorCosts[5].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[5].gold)
      );
      expectedWeaponCost[13] = Math.floor(
        (1 / row[13]) *
          (materialWeaponCosts[6].destruction_stone * req.body[1] +
            materialWeaponCosts[6].ghl * req.body[2] +
            materialWeaponCosts[6].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[6].gold)
      );
      expectedArmorCost[13] = Math.floor(
        (1 / row[13]) *
          (materialArmorCosts[6].guardian_stone * req.body[0] +
            materialArmorCosts[6].ghl * req.body[2] +
            materialArmorCosts[6].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[6].gold)
      );
      expectedWeaponCost[14] = Math.floor(
        (1 / row[14]) *
          (materialWeaponCosts[7].destruction_stone * req.body[1] +
            materialWeaponCosts[7].ghl * req.body[2] +
            materialWeaponCosts[7].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[7].gold)
      );
      expectedArmorCost[14] = Math.floor(
        (1 / row[14]) *
          (materialArmorCosts[7].guardian_stone * req.body[0] +
            materialArmorCosts[7].ghl * req.body[2] +
            materialArmorCosts[7].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[7].gold)
      );
      expectedWeaponCost[15] = Math.floor(
        (1 / row[15]) *
          (materialWeaponCosts[8].destruction_stone * req.body[1] +
            materialWeaponCosts[8].ghl * req.body[2] +
            materialWeaponCosts[8].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[8].gold)
      );
      expectedArmorCost[15] = Math.floor(
        (1 / row[15]) *
          (materialArmorCosts[8].guardian_stone * req.body[0] +
            materialArmorCosts[8].ghl * req.body[2] +
            materialArmorCosts[8].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[8].gold)
      );
      expectedWeaponCost[16] = Math.floor(
        (1 / row[16]) *
          (materialWeaponCosts[9].destruction_stone * req.body[1] +
            materialWeaponCosts[9].ghl * req.body[2] +
            materialWeaponCosts[9].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[9].gold)
      );
      expectedArmorCost[16] = Math.floor(
        (1 / row[16]) *
          (materialArmorCosts[9].guardian_stone * req.body[0] +
            materialArmorCosts[9].ghl * req.body[2] +
            materialArmorCosts[9].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[9].gold)
      );
      expectedWeaponCost[17] = Math.floor(
        (1 / row[17]) *
          (materialWeaponCosts[10].destruction_stone * req.body[1] +
            materialWeaponCosts[10].ghl * req.body[2] +
            materialWeaponCosts[10].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[10].gold)
      );
      expectedArmorCost[17] = Math.floor(
        (1 / row[17]) *
          (materialArmorCosts[10].guardian_stone * req.body[0] +
            materialArmorCosts[10].ghl * req.body[2] +
            materialArmorCosts[10].basic_fusion * req.body[3] +
            graceCount * req.body[5] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[10].gold)
      );
      Cost.addExpectedCost_weapon_12_17(expectedWeaponCost);
      Cost.addExpectedCost_armor_12_17(expectedArmorCost);
    });
    res.send({ message: "Successfully updated market for 12-17" });
    console.log("successfully updated market for 12-17");
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.patch("/addCost/18-20", async (req, res, next) => {
  try {
    let cost_18_20 = await Cost.getSuccessRates_18_20();
    console.log(cost_18_20);
    let materialArmorCosts = await Cost.getArmorMaterialCosts();
    let materialWeaponCosts = await Cost.getWeaponMaterialCosts();
    let expectedWeaponCost = {};
    let expectedArmorCost = {};
    console.log(materialWeaponCosts);
    cost_18_20.forEach((row) => {
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
      expectedWeaponCost[18] = Math.floor(
        (1 / row[18]) *
          (materialWeaponCosts[11].destruction_stone * req.body[1] +
            materialWeaponCosts[11].ghl * req.body[2] +
            materialWeaponCosts[11].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[11].gold)
      );
      expectedArmorCost[18] = Math.floor(
        (1 / row[18]) *
          (materialArmorCosts[11].guardian_stone * req.body[0] +
            materialArmorCosts[11].ghl * req.body[2] +
            materialArmorCosts[11].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[11].gold)
      );
      expectedWeaponCost[19] = Math.floor(
        (1 / row[19]) *
          (materialWeaponCosts[12].destruction_stone * req.body[1] +
            materialWeaponCosts[12].ghl * req.body[2] +
            materialWeaponCosts[12].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[12].gold)
      );
      expectedArmorCost[19] = Math.floor(
        (1 / row[19]) *
          (materialArmorCosts[12].guardian_stone * req.body[0] +
            materialArmorCosts[12].ghl * req.body[2] +
            materialArmorCosts[12].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[12].gold)
      );
      expectedWeaponCost[20] = Math.floor(
        (1 / row[20]) *
          (materialWeaponCosts[13].destruction_stone * req.body[1] +
            materialWeaponCosts[13].ghl * req.body[2] +
            materialWeaponCosts[13].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialWeaponCosts[13].gold)
      );
      expectedArmorCost[20] = Math.floor(
        (1 / row[20]) *
          (materialArmorCosts[13].guardian_stone * req.body[0] +
            materialArmorCosts[13].ghl * req.body[2] +
            materialArmorCosts[13].basic_fusion * req.body[3] +
            graceCount * req.body[4] +
            blessingCount * req.body[5] +
            protectionCount * req.body[6] +
            materialArmorCosts[13].gold)
      );
      Cost.addExpectedCost_weapon_18_20(expectedWeaponCost);
      Cost.addExpectedCost_armor_18_20(expectedArmorCost);
    });
    res.send({ message: "Successfully updated market for 18-20" });
    console.log("successfully updated Market for 18-20");
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/armor/7-11", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedArmorCost_7_11(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/armor/12-17", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedArmorCost_12_17(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/armor/18-20", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedArmorCost_18_20(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/weapon/7-11", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedWeaponCost_7_11(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/weapon/12-17", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedWeaponCost_12_17(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.post("/weapon/18-20", async (req, res, next) => {
  try {
    let costArray = await Cost.getExpectedWeaponCost_18_20(`${req.body.level}`);
    let filtered = costArray.filter((obj) => {
      if (obj.combination[obj.combination.length - 1] === "0") {
        return true;
      }
    });
    res.send(filtered);
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.patch("/market/update", async (req, res, next) => {
  try {
    let priceObj = {};
    priceObj.guardianStone = req.body[0];
    priceObj.destructionStone = req.body[1];
    priceObj.ghl = req.body[2];
    priceObj.basicFusion = req.body[3];
    priceObj.solarGrace = req.body[4];
    priceObj.solarBlessing = req.body[5];
    priceObj.solarProtection = req.body[6];
    priceObj.lastUpdated = new Date().toLocaleString();
    console.log(priceObj);
    let updatedPrices = await Cost.updateMarketPrices(priceObj);
    res.send({ message: "Successfully updated Market", updatedPrices });
  } catch (error) {
    next(error);
  }
});

expectedCostsRouter.get("/market", async (req, res, next) => {
  try {
    let marketPrices = await Cost.getMarketPrices();
    res.send(marketPrices);
  } catch (error) {
    next(error);
  }
});

module.exports = expectedCostsRouter;
