import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import {
  updateExpectedCost_7_11,
  updateExpectedCost_12_17,
  updateExpectedCost_18_20,
  updateMarketPrices,
  getMarketPrices,
} from "../axios-services";
import guardianStone from "../images/guardianStone.png";
import destructionStone from "../images/destructionStone.png";
import greatHonorLeapstone from "../images/greatHonorLeapstone.png";
import solarBlessing from "../images/solarBlessing.png";
import basicFusion from "../images/basicFusion.png";
import solarGrace from "../images/solarGrace.png";
import solarProtection from "../images/solarProtection.png";

const PriceInputs = () => {
  const [guardianPrice, setGuardianPrice] = useState(0);
  const [destructionPrice, setDestructionPrice] = useState(0);
  const [GHLPrice, setGHLPrice] = useState(0);
  const [basicFusionPrice, setBasicFusionPrice] = useState(0);
  const [solarGracePrice, setSolarGracePrice] = useState(0);
  const [solarBlessingPrice, setSolarBlessingPrice] = useState(0);
  const [solarProtectionPrice, setSolarProtectionPrice] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");
  const [loading, setLoading] = useState(false);

  async function updateHandler() {
    let priceArr = [
      guardianPrice,
      destructionPrice,
      GHLPrice,
      basicFusionPrice,
      solarGracePrice,
      solarBlessingPrice,
      solarProtectionPrice,
    ];
    setLoading(true);
    updateMarketPrices(priceArr);
    await updateExpectedCost_7_11(priceArr);
    await updateExpectedCost_12_17(priceArr);
    let response = await updateExpectedCost_18_20(priceArr);
    if (response.message === "Successfully updated market for 18-20") {
      setLoading(false);
    }
  }

  useEffect(() => {
    try {
      async function loadMarketPrices() {
        let marketPrices = await getMarketPrices();
        if (marketPrices.length) {
          setGuardianPrice(marketPrices[0].guardianStone);
          setDestructionPrice(marketPrices[0].destructionStone);
          setGHLPrice(marketPrices[0].ghl);
          setBasicFusionPrice(marketPrices[0].basicFusion);
          setSolarGracePrice(marketPrices[0].solarGrace);
          setSolarBlessingPrice(marketPrices[0].solarBlessing);
          setSolarProtectionPrice(marketPrices[0].solarProtection);
          let date = new Date(marketPrices[0].lastUpdated);
          setLastUpdated(date.toLocaleString());
        }
        return marketPrices;
      }
      loadMarketPrices();
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          className="testing"
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className="update-market-message">Updating Market Prices...</div>
          <CircularProgress className="loading-circle" color="inherit" />
        </Backdrop>
      ) : null}
      <div className="MarketPrice">
        <h2>Market Prices</h2>
        <TextField
          id="outlined-basic"
          label="1 Guardian Stone"
          variant="outlined"
          value={guardianPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={guardianStone}
                  width={"40px"}
                  height={"40px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setGuardianPrice(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="1 Destruction Stone"
          variant="outlined"
          value={destructionPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={destructionStone}
                  width={"40px"}
                  height={"40px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setDestructionPrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Great Honor Leapstone"
          variant="outlined"
          value={GHLPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={greatHonorLeapstone}
                  width={"45px"}
                  height={"45px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setGHLPrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Basic Oreha Fusion Material"
          variant="outlined"
          value={basicFusionPrice}
          onChange={(e) => {
            setBasicFusionPrice(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={basicFusion}
                  width={"60px"}
                  height={"60px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Solar Grace"
          variant="outlined"
          value={solarGracePrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={solarGrace}
                  width={"45px"}
                  height={"45px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSolarGracePrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Solar Blessing"
          variant="outlined"
          value={solarBlessingPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={solarBlessing}
                  width={"45px"}
                  height={"45px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSolarBlessingPrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Solar Protection"
          variant="outlined"
          value={solarProtectionPrice}
          onChange={(e) => {
            setSolarProtectionPrice(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={solarProtection}
                  width={"45px"}
                  height={"45px"}
                  alt={`guardian stone`}
                />
              </InputAdornment>
            ),
          }}
        />
        <div>Last Updated: {lastUpdated}</div>
        <Button onClick={updateHandler} variant="contained">
          Update Market Data
        </Button>
      </div>
    </>
  );
};

export default PriceInputs;
