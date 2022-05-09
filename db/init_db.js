const { client } = require("./");
const fs = require("fs");
const fastcsv = require("fast-csv");
// let csvData = [];
// async function readCSV() {
//   try {
//     let stream = fs.createReadStream(__dirname + "/adjusted_rates.csv");
//     let csvData = [];
//     let csvStream = fastcsv
//       .parse()
//       .on("data", function (data) {
//         csvData.push(data);
//       })
//       .on("end", function () {
//         // remove the first line: header
//         csvData.shift();
//         console.log(csvData);
//         //     client.connect();
//         client.query(`
//         INSERT INTO adjusted_rates (combination, "7","8","9","10","11", "12", "13", "14","15", "16", "17", "18", "19", "20") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
//         `);

//         // connect to the PostgreSQL database
//         // save csvData
//       });
//     stream.pipe(csvStream);
//   } catch (error) {
//     throw error;
//   }
// }

let arr = [];

async function buildTables() {
  try {
    await client.connect();
    await client.query(`
    DROP TABLE IF EXISTS adjusted_rates_7_11;
    DROP TABLE IF EXISTS adjusted_rates_12_17;
    DROP TABLE IF EXISTS adjusted_rates_18_20;


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
    `);

    // build tables in correct order
  } catch (error) {
    throw error;
  }
}

/* 
   COPY adjusted_rates("7","8","9","10","11", "12", "13", "14","15", "16", "17", "18", "19", "20")
    FROM './assets/AdjustedRates.csv'
    DELIMITER ','
    CSV HEADER;
*/

async function populateInitialData() {
  try {
    console.log(arr, "arr");
    // console.log(csvData);
    //   await client.query(`
    // INSERT INTO adjusted_rates (combination, "7","8","9","10","11", "12", "13", "14","15", "16", "17", "18", "19", "20") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
    // `);
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
