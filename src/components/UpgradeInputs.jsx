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
  const {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
    pieceCount,
    setPieceCount,
  } = useAuth();
  const [alignment, setAlignment] = useState("Armor");
  const [costArr, setCostArr] = useState([]);

  const handleStartingInput = (event) => {
    setStartingValue(event.target.value);
  };

  const handleEndInput = (event) => {
    setEndValue(event.target.value);
  };

  const handlePieceCountInput = (event) => {
    setPieceCount(event.target.value);
  };

  const handleChange = (event, newAlignment) => {
    setPieceCount(1);
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
        endValue,
        pieceCount
      );
      setCostArr([...costArr, ...cheapestCosts]);
    }
  }

  return (
    <div className="honing-values">
      <h2>Honing Inputs</h2>
      <ToggleButtonGroup
        color="primary"
        size="large"
        sx={{ bgcolor: "#BDC0C2" }}
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="Armor">Armor</ToggleButton>
        <ToggleButton value="Weapon">Weapon</ToggleButton>
      </ToggleButtonGroup>
      <br></br>
      <br></br>
      <br></br>
      <div className="honing-input-container">
        <Box className="honing-input">
          <FormControl fullWidth>
            <InputLabel
              className="select-label"
              sx={{
                color: "white",
              }}
            >
              From
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: "white",
              }}
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
            <InputLabel
              className="select-label"
              sx={{
                color: "white",
              }}
            >
              To
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={endValue}
              sx={{
                color: "white",
              }}
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
        <Box className="honing-input">
          <FormControl fullWidth>
            <InputLabel
              className="select-label"
              sx={{
                color: "white",
              }}
            >
              Number of Pieces
            </InputLabel>
            {alignment === "Armor" ? (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pieceCount}
                sx={{
                  color: "white",
                }}
                label="Number of Pieces"
                onChange={handlePieceCountInput}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            ) : (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pieceCount}
                sx={{
                  color: "white",
                }}
                label="Number of Pieces"
                onChange={handlePieceCountInput}
              >
                <MenuItem value={1}>1</MenuItem>
              </Select>
            )}
          </FormControl>
        </Box>
      </div>
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
