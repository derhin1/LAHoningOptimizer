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
    console.error("problem adding cost...", error);
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
    console.error("problem adding cost...", error);
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

module.exports = {
  addExpectedCost_weapon_7_11,
  getSuccessRates_7_11,
  addArmorMaterialCostRow,
  addWeaponMaterialCostRow,
  getArmorMaterialCosts,
  getWeaponMaterialCosts,
  addExpectedCost_armor_7_11,
};
