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
    console.log("test");
    const { rows } = await client.query(`
    SELECT * FROM adjusted_rates_7_11;
    `);
    return rows;
  } catch (error) {
    console.error("Problem getting success rates 7-11", error);
  }
}

module.exports = {
  addExpectedCost_7_11,
  getSuccessRates_7_11,
};
