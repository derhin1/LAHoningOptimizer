import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { postNewMarketPrices } from "../axios-services";
const PriceInputs = () => {
  const [guardianPrice, setGuardianPrice] = useState(0);
  const [destructionPrice, setDestructionPrice] = useState(0);
  const [GHLPrice, setGHLPrice] = useState(0);
  const [basicFusionPrice, setBasicFusionPrice] = useState(0);
  const [solarGracePrice, setSolarGracePrice] = useState(0);
  const [solarBlessingPrice, setSolarBlessingPrice] = useState(0);
  const [solarProtectionPrice, setSolarProtectionPrice] = useState(0);

  function updateHandler() {
    let priceArr = [
      guardianPrice,
      destructionPrice,
      GHLPrice,
      basicFusionPrice,
      solarGracePrice,
      solarBlessingPrice,
      solarProtectionPrice,
    ];
    postNewMarketPrices(priceArr);
  }
  return (
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
  );
};

export default PriceInputs;
