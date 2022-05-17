const client = require("../client");

async function addExpectedCost_weapon_7_11(fields = {}) {
  const { combination } = fields;
  delete fields.combination;

  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_weapon_7_11
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding weapon cost to 7-11", error);
  }
}

async function addExpectedCost_armor_7_11(fields = {}) {
  const { combination } = fields;
  delete fields.combination;
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_armor_7_11
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding armor cost to 7-11", error);
  }
}

async function addExpectedCost_weapon_12_17(fields = {}) {
  const { combination } = fields;
  delete fields.combination;

  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_weapon_12_17
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding weapon cost to 12-17", error);
  }
}

async function addExpectedCost_armor_12_17(fields = {}) {
  const { combination } = fields;
  delete fields.combination;
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_armor_12_17
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding armor cost to 12-17", error);
  }
}

async function addExpectedCost_weapon_18_20(fields = {}) {
  const { combination } = fields;
  delete fields.combination;

  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_weapon_18_20
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding weapon cost to 18-20", error);
  }
}

async function addExpectedCost_armor_18_20(fields = {}) {
  const { combination } = fields;
  delete fields.combination;
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE expected_costs_armor_18_20
    SET ${setString}
    WHERE combination = $1
    RETURNING *;
    `,
      [combination, ...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("problem adding armor cost to 18-20", error);
  }
}

async function getSuccessRates_7_11() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM adjusted_rates_7_11;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting success rates 7-11", error);
  }
}

async function getSuccessRates_12_17() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM adjusted_rates_12_17;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting success rates 12-17", error);
  }
}

async function getSuccessRates_18_20() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM adjusted_rates_18_20;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting success rates 12-17", error);
  }
}

async function addWeaponMaterialCostRow({
  honing_level,
  destruction_stone,
  honor_shard,
  ghl,
  basic_fusion,
  silver,
  gold,
}) {
  try {
    const {
      rows: [row],
    } = await client.query(
      `
    INSERT INTO material_costs_weapon(honing_level, destruction_stone, honor_shard, ghl, basic_fusion, silver, gold)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *;
    `,
      [
        honing_level,
        destruction_stone,
        honor_shard,
        ghl,
        basic_fusion,
        silver,
        gold,
      ]
    );
    return row;
  } catch (error) {
    console.error("Problem adding material weapon costs...", error);
  }
}

async function addArmorMaterialCostRow({
  honing_level,
  guardian_stone,
  honor_shard,
  ghl,
  basic_fusion,
  silver,
  gold,
}) {
  try {
    const {
      rows: [row],
    } = await client.query(
      `
    INSERT INTO material_costs_armor(honing_level, guardian_stone, honor_shard, ghl, basic_fusion, silver, gold)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *;
    `,
      [
        honing_level,
        guardian_stone,
        honor_shard,
        ghl,
        basic_fusion,
        silver,
        gold,
      ]
    );
    return row;
  } catch (error) {
    console.error("Problem adding material armor costs...", error);
  }
}

async function getWeaponMaterialCosts() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM material_costs_weapon;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting weapon material costs...", error);
  }
}

async function getArmorMaterialCosts() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM material_costs_armor;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting armor material costs...", error);
  }
}

async function getExpectedArmorCost_7_11(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_armor_7_11;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Armor Cost 7-11");
  }
}

async function getExpectedArmorCost_12_17(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_armor_12_17;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Armor Cost 12-17");
  }
}

async function getExpectedArmorCost_18_20(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_armor_18_20;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Armor Cost 18-20");
  }
}

async function getExpectedWeaponCost_7_11(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_weapon_7_11;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Weapon Cost 7-11");
  }
}

async function getExpectedWeaponCost_12_17(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_weapon_12_17;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Weapon Cost 12-17");
  }
}

async function getExpectedWeaponCost_18_20(num) {
  try {
    const { rows } = await client.query(`
    SELECT combination, "${num}" FROM expected_costs_weapon_18_20;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting Expected Weapon Cost 18-20");
  }
}

async function addInitialMarketPrice({
  guardianStone,
  destructionStone,
  honorShard,
  ghl,
  basicFusion,
  solarGrace,
  solarBlessing,
  solarProtection,
}) {
  try {
    const { rows } = await client.query(
      `
   INSERT INTO current_market_prices("guardianStone","destructionStone", "honorShard", ghl, "basicFusion", "solarGrace", "solarBlessing", "solarProtection")
   VALUES($1, $2, $3, $4, $5, $6, $7, $8)
   RETURNING *
   `,
      [
        guardianStone,
        destructionStone,
        honorShard,
        ghl,
        basicFusion,
        solarGrace,
        solarBlessing,
        solarProtection,
      ]
    );
    return rows;
  } catch (error) {
    console.error("Problem adding initial market price");
  }
}

async function updateMarketPrices(fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const { rows } = await client.query(
      `
    UPDATE current_market_prices
    SET ${setString}
    WHERE id=1
    RETURNING *;
    `,
      [...Object.values(fields)]
    );
    return rows;
  } catch (error) {
    console.error("Problem updating market prices", error);
  }
}

async function getMarketPrices() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM current_market_prices
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting market prices");
  }
}

async function getMinimumAdjustedRate_7_11({ level, combination }) {
  try {
    const {
      rows: [singleRate],
    } = await client.query(
      `
    SELECT "${level}" FROM adjusted_rates_7_11
    WHERE combination = $1
    `,
      [combination]
    );
    console.log(singleRate);
    return singleRate;
  } catch (error) {
    console.error("Problem getting minimum adjusted rate");
  }
}

module.exports = {
  addExpectedCost_weapon_7_11,
  getSuccessRates_7_11,
  addArmorMaterialCostRow,
  addWeaponMaterialCostRow,
  getArmorMaterialCosts,
  getWeaponMaterialCosts,
  addExpectedCost_armor_7_11,
  getSuccessRates_12_17,
  addExpectedCost_armor_12_17,
  addExpectedCost_weapon_12_17,
  addExpectedCost_armor_18_20,
  addExpectedCost_weapon_18_20,
  getSuccessRates_18_20,
  getExpectedArmorCost_7_11,
  getExpectedArmorCost_12_17,
  getExpectedArmorCost_18_20,
  getExpectedWeaponCost_7_11,
  getExpectedWeaponCost_12_17,
  getExpectedWeaponCost_18_20,
  updateMarketPrices,
  addInitialMarketPrice,
  getMarketPrices,
  getMinimumAdjustedRate_7_11,
};
