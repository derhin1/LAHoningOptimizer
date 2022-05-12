const { client } = require("./");
const { Hone } = require("./index");
const weapon_mats = require("./material-costs/weapon-mats");
const armor_mats = require("./material-costs/armor-mats");
const { Cost } = require("./models");

async function buildTables() {
  try {
    console.log("Beginning to build tables...");
    await client.connect();
    await client.query(`
    DROP TABLE IF EXISTS adjusted_rates_7_11;
    DROP TABLE IF EXISTS adjusted_rates_12_17;
    DROP TABLE IF EXISTS adjusted_rates_18_20;
    DROP TABLE IF EXISTS expected_costs_weapon_7_11;
    DROP TABLE IF EXISTS expected_costs_weapon_12_17;
    DROP TABLE IF EXISTS expected_costs_weapon_18_20;
    DROP TABLE IF EXISTS expected_costs_armor_7_11;
    DROP TABLE IF EXISTS expected_costs_armor_12_17;
    DROP TABLE IF EXISTS expected_costs_armor_18_20;
    DROP TABLE IF EXISTS material_costs_weapon;
    DROP TABLE IF EXISTS material_costs_armor;


    CREATE TABLE adjusted_rates_7_11(
      combination VARCHAR(255) NOT NULL,
      "7" DECIMAL(11,10),
      "8" DECIMAL(11,10),
      "9" DECIMAL(11,10),
      "10" DECIMAL(11,10),
      "11" DECIMAL(11,10)
      );

    CREATE TABLE adjusted_rates_12_17(
      combination VARCHAR(255) NOT NULL,
      "12" DECIMAL(11,10),
      "13" DECIMAL(11,10),
      "14" DECIMAL(11,10),
      "15" DECIMAL(11,10),
      "16" DECIMAL(11,10),
      "17" DECIMAL(11,10)
      );

    CREATE TABLE adjusted_rates_18_20(
      combination VARCHAR(255) NOT NULL, 
      "18" DECIMAL(11,10),
      "19" DECIMAL(11,10),
      "20" DECIMAL(11,10)
    );

    CREATE TABLE expected_costs_weapon_7_11(
      combination VARCHAR(255) NOT NULL,
      "7" INTEGER,
      "8" INTEGER,
      "9" INTEGER,
      "10" INTEGER,
      "11" INTEGER
      );

      CREATE TABLE expected_costs_weapon_12_17(
      combination VARCHAR(255) NOT NULL,
      "12" INTEGER,
      "13" INTEGER,
      "14" INTEGER,
      "15" INTEGER,
      "16" INTEGER,
      "17" INTEGER
      );

      CREATE TABLE expected_costs_weapon_18_20(
      combination VARCHAR(255) NOT NULL,
      "18" INTEGER,
      "19" INTEGER,
      "20" INTEGER
      );

       CREATE TABLE expected_costs_armor_7_11(
      combination VARCHAR(255) NOT NULL,
      "7" INTEGER,
      "8" INTEGER,
      "9" INTEGER,
      "10" INTEGER,
      "11" INTEGER
      );

      CREATE TABLE expected_costs_armor_12_17(
      combination VARCHAR(255) NOT NULL,
      "12" INTEGER,
      "13" INTEGER,
      "14" INTEGER,
      "15" INTEGER,
      "16" INTEGER,
      "17" INTEGER
      );

      CREATE TABLE expected_costs_armor_18_20(
      combination VARCHAR(255) NOT NULL,
      "18" INTEGER,
      "19" INTEGER,
      "20" INTEGER
      );

      CREATE TABLE material_costs_weapon(
        honing_level INTEGER,
        destruction_stone INTEGER,
        honor_shard INTEGER,
        ghl INTEGER,
        basic_fusion INTEGER,
        silver INTEGER,
        gold INTEGER
      );

      CREATE TABLE material_costs_armor(
        honing_level INTEGER,
        guardian_stone INTEGER,
        honor_shard INTEGER,
        ghl INTEGER,
        basic_fusion INTEGER,
        silver INTEGER,
        gold INTEGER
      );
    `);
    console.log("... Tables successfully created!");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    console.log("Starting to seed Data...");
    await Promise.all(weapon_mats.map(Cost.addWeaponMaterialCostRow));
    await Promise.all(armor_mats.map(Cost.addArmorMaterialCostRow));
    await Hone.seed();
    console.log("... Finished Seeding Honing Rates!");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
