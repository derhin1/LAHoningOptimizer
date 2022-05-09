const fs = require("fs");
const { Pool } = require("pg");
const fastcsv = require("fast-csv");

async function seed_7_11() {
  let stream = fs.createReadStream(__dirname + "/adjusted_rates_7-11.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();
      // create a new connection to the database
      const pool = new Pool({
        host: "localhost",
        user: "postgres",
        database: "la-sim",
        password: "123",
        port: 5432,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
      });
      const query =
        'INSERT INTO adjusted_rates_7_11 (combination, "7", "8", "9", "10", "11") VALUES ($1, $2 , $3, $4, $5, $6)';
      pool.connect((err, client, done) => {
        if (err) throw err;
        try {
          csvData.forEach((row) => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                console.log("inserted " + res.rowCount + " row:", row);
              }
            });
          });
        } finally {
          done();
        }
      });
    });
  stream.pipe(csvStream);
}

async function seed_12_17() {
  let stream = fs.createReadStream(__dirname + "/adjusted_rates_12-17.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();
      // create a new connection to the database
      const pool = new Pool({
        host: "localhost",
        user: "postgres",
        database: "la-sim",
        password: "123",
        port: 5432,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
      });
      const query =
        'INSERT INTO adjusted_rates_12_17 (combination, "12", "13", "14", "15", "16", "17") VALUES ($1, $2 , $3, $4, $5, $6, $7)';
      pool.connect((err, client, done) => {
        if (err) throw err;
        try {
          csvData.forEach((row) => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                console.log("inserted " + res.rowCount + " row:", row);
              }
            });
          });
        } finally {
          done();
        }
      });
    });
  stream.pipe(csvStream);
}

async function seed_18_20() {
  let stream = fs.createReadStream(__dirname + "/adjusted_rates_18-20.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();
      // create a new connection to the database
      const pool = new Pool({
        host: "localhost",
        user: "postgres",
        database: "la-sim",
        password: "123",
        port: 5432,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
      });
      const query =
        'INSERT INTO adjusted_rates_18_20 (combination, "18", "19", "20") VALUES ($1, $2, $3, $4)';
      pool.connect((err, client, done) => {
        if (err) throw err;
        try {
          csvData.forEach((row) => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                console.log("inserted " + res.rowCount + " row:", row);
              }
            });
          });
        } finally {
          done();
        }
      });
    });
  stream.pipe(csvStream);
}

async function seed() {
  await seed_7_11();
  await seed_12_17();
  await seed_18_20();
}

seed();
