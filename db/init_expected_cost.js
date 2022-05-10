const { client } = require("./");
async function fillExpectedCost() {
  client.connect();
  await client.query(`
    INSERT INTO expected_costs_7_11
    SELECT combination
    FROM adjusted_rates_7_11;

    INSERT INTO expected_costs_12_17
    SELECT combination
    FROM adjusted_rates_12_17;

    INSERT INTO expected_costs_18_20
    SELECT combination
    FROM adjusted_rates_18_20;
    `);
}

fillExpectedCost().finally(() => client.end());
