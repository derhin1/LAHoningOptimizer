import React, { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import useAuth from "../hooks/useAuth.js";
import { calculateHoning, CostTable } from "./";
import { toast } from "react-toastify";

const UpgradeInputs = () => {
  const { startingValue, setStartingValue, endValue, setEndValue } = useAuth();
  const [alignment, setAlignment] = useState("Armor");
  const [costArr, setCostArr] = useState([]);

  const handleStartingInput = (event) => {
    setStartingValue(event.target.value);
  };

  const handleEndInput = (event) => {
    setEndValue(event.target.value);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function handleReset() {
    setCostArr([]);
  }

  async function handleCalculate() {
    if (startingValue === endValue) {
      toast.error("Start and End Inputs must be different");
    } else if (startingValue > endValue) {
      toast.error("Start must be lower than End input");
    } else {
      let cheapestCosts = await calculateHoning(
        alignment,
        startingValue,
        endValue
      );
      console.log(cheapestCosts);
      setCostArr([...costArr, ...cheapestCosts]);
    }
  }

  return (
    <div className="honing-values">
      <h2>Honing Inputs</h2>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="Armor">Armor</ToggleButton>
        <ToggleButton value="Weapon">Weapon</ToggleButton>
      </ToggleButtonGroup>
      <Box className="honing-input">
        <FormControl fullWidth>
          <InputLabel className="select-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={startingValue}
            label="From"
            onChange={handleStartingInput}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="honing-input">
        <FormControl fullWidth>
          <InputLabel className="select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={endValue}
            label="To"
            onChange={handleEndInput}
          >
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handleCalculate} variant="contained">
        Calculate
      </Button>
      <Button onClick={handleReset} variant="contained">
        Reset
      </Button>
      {costArr.length > 0 ? (
        <div className="cost-table">
          {<CostTable costArr={costArr} setCostArr={setCostArr} />}
        </div>
      ) : null}
    </div>
  );
};

export default UpgradeInputs;
