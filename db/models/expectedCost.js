const client = require("../client");

async function addExpectedCost_7_11(costs) {
  try {
    const { rows } = await client.query(
      `
    INSERT INTO expected_costs_7_11 ('7', '8', '9', '10', '11')
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *
    `,
      [costs]
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

module.exports = {
  addExpectedCost_7_11,
  getSuccessRates_7_11,
  addArmorMaterialCostRow,
  addWeaponMaterialCostRow,
};
