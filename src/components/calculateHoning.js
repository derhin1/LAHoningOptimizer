import {
  getExpectedArmorCost_7_11,
  getExpectedArmorCost_12_17,
  getExpectedArmorCost_18_20,
} from "../axios-services";
async function calculateHoning(alignment, startingValue, endValue) {
  let lowestCostArr = [];
  let start = startingValue;
  let end = endValue;
  if (alignment === "armor") {
    for (let i = 0; i < end - start; i++) {
      startingValue++;
      if (startingValue <= 11) {
        let costs = await getExpectedArmorCost_7_11(startingValue);
        let min = costs.reduce((prev, curr) => {
          return prev[startingValue] < curr[startingValue] ? prev : curr;
        });
        console.log(min);
        let graceCount = min.combination.substring(
          2,
          min.combination.indexOf("B")
        );
        graceCount = parseInt(graceCount);
        let blessingCount = min.combination.substring(
          min.combination.indexOf("B") + 2,
          min.combination.indexOf("P")
        );
        blessingCount = parseInt(blessingCount);
        let protectionCount = min.combination.substring(
          min.combination.indexOf("P") + 2,
          min.combination.indexOf("S")
        );
        protectionCount = parseInt(protectionCount);
        let costRow = {};
        costRow.toLevel = startingValue;
        costRow.graceCount = graceCount;
        costRow.blessingCount = blessingCount;
        costRow.protectionCount = protectionCount;
        costRow.minCost = min[startingValue];
        lowestCostArr.push(costRow);
      } else if (startingValue <= 17) {
        let costs = await getExpectedArmorCost_12_17(startingValue);
        let min = costs.reduce((prev, curr) => {
          return prev[startingValue] < curr[startingValue] ? prev : curr;
        });
        console.log(min);
        let graceCount = min.combination.substring(
          2,
          min.combination.indexOf("B")
        );
        graceCount = parseInt(graceCount);
        let blessingCount = min.combination.substring(
          min.combination.indexOf("B") + 2,
          min.combination.indexOf("P")
        );
        blessingCount = parseInt(blessingCount);
        let protectionCount = min.combination.substring(
          min.combination.indexOf("P") + 2,
          min.combination.indexOf("S")
        );
        protectionCount = parseInt(protectionCount);
        let costRow = {};
        costRow.toLevel = startingValue;
        costRow.graceCount = graceCount;
        costRow.blessingCount = blessingCount;
        costRow.protectionCount = protectionCount;
        costRow.minCost = min[startingValue];
        lowestCostArr.push(costRow);
      } else if (startingValue <= 20) {
        let costs = await getExpectedArmorCost_18_20(startingValue);
        let min = costs.reduce((prev, curr) => {
          return prev[startingValue] < curr[startingValue] ? prev : curr;
        });
        console.log(min);
        let graceCount = min.combination.substring(
          2,
          min.combination.indexOf("B")
        );
        graceCount = parseInt(graceCount);
        let blessingCount = min.combination.substring(
          min.combination.indexOf("B") + 2,
          min.combination.indexOf("P")
        );
        blessingCount = parseInt(blessingCount);
        let protectionCount = min.combination.substring(
          min.combination.indexOf("P") + 2,
          min.combination.indexOf("S")
        );
        protectionCount = parseInt(protectionCount);
        let costRow = {};
        costRow.toLevel = startingValue;
        costRow.graceCount = graceCount;
        costRow.blessingCount = blessingCount;
        costRow.protectionCount = protectionCount;
        costRow.minCost = min[startingValue];
        lowestCostArr.push(costRow);
      }
    }
    console.log(lowestCostArr);
    return lowestCostArr;
  } else {
  }
}

export default calculateHoning;
