import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  updateExpectedCost_7_11,
  updateExpectedCost_12_17,
  updateExpectedCost_18_20,
} from "../axios-services";
import { Backdrop, CircularProgress } from "@mui/material";
const PriceInputs = () => {
  const [guardianPrice, setGuardianPrice] = useState(0);
  const [destructionPrice, setDestructionPrice] = useState(0);
  const [GHLPrice, setGHLPrice] = useState(0);
  const [basicFusionPrice, setBasicFusionPrice] = useState(0);
  const [solarGracePrice, setSolarGracePrice] = useState(0);
  const [solarBlessingPrice, setSolarBlessingPrice] = useState(0);
  const [solarProtectionPrice, setSolarProtectionPrice] = useState(0);
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
    await updateExpectedCost_7_11(priceArr);
    await updateExpectedCost_12_17(priceArr);
    let response = await updateExpectedCost_18_20(priceArr);
    if (response.message === "Successfully updated market for 18-20") {
      setLoading(false);
    }
  }
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
          onChange={(e) => {
            setGuardianPrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="1 Destruction Stone"
          variant="outlined"
          value={destructionPrice}
          onChange={(e) => {
            setDestructionPrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Great Honor Leapstone"
          variant="outlined"
          value={GHLPrice}
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
        />
        <TextField
          id="outlined-basic"
          label="Solar Grace"
          variant="outlined"
          value={solarGracePrice}
          onChange={(e) => {
            setSolarGracePrice(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Solar Blessing"
          variant="outlined"
          value={solarBlessingPrice}
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
        />
        <Button onClick={updateHandler} variant="contained">
          Update Market Data
        </Button>
      </div>
    </>
  );
};

export default PriceInputs;
