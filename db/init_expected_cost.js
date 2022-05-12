const { client } = require("./");
async function fillExpectedCost() {
  client.connect();
  await client.query(`
    INSERT INTO expected_costs_armor_7_11
    SELECT combination
    FROM adjusted_rates_7_11;

    INSERT INTO expected_costs_armor_12_17
    SELECT combination
    FROM adjusted_rates_12_17;

    INSERT INTO expected_costs_armor_18_20
    SELECT combination
    FROM adjusted_rates_18_20;

    INSERT INTO expected_costs_weapon_7_11
    SELECT combination
    FROM adjusted_rates_7_11;

    INSERT INTO expected_costs_weapon_12_17
    SELECT combination
    FROM adjusted_rates_12_17;

    INSERT INTO expected_costs_weapon_18_20
    SELECT combination
    FROM adjusted_rates_18_20;
    `);
}

fillExpectedCost().finally(() => client.end());
