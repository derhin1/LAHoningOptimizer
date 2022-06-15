import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import guardianStone from "../images/guardianStone.png";
import destructionStone from "../images/destructionStone.png";
import gold from "../images/gold.png";
import greatHonorLeapstone from "../images/greatHonorLeapstone.png";
import solarBlessing from "../images/solarBlessing.png";
import basicFusion from "../images/basicFusion.png";
import solarGrace from "../images/solarGrace.png";
import solarProtection from "../images/solarProtection.png";
import useAuth from "../hooks/useAuth.js";

const CostTable = ({ costArr, setCostArr }) => {
  const [graceTotal, setGraceTotal] = useState(0);
  const [blessingTotal, setBlessingTotal] = useState(0);
  const [protectionTotal, setProtectionTotal] = useState(0);
  const [goldTotal, setGoldTotal] = useState(0);
  const [destructionTotal, setDestructionTotal] = useState(0);
  const [guardianTotal, setGuardianTotal] = useState(0);
  const [ghlTotal, setghlTotal] = useState(0);
  const [basicFusionTotal, setBasicFusionTotal] = useState(0);
  const { pieceCount } = useAuth();
  function handleDelete(e) {
    let idx = e.target.id;
    let filtered = costArr.filter((row, i) => {
      return i != idx;
    });
    setCostArr(filtered);
  }

  function calculateTotals() {
    let graceAmount = 0;
    let blessingAmount = 0;
    let protectionAmount = 0;
    let goldAmount = 0;
    let destructionAmount = 0;
    let guardianAmount = 0;
    let ghlAmount = 0;
    let basicFusionAmount = 0;
    for (let i = 0; i < costArr.length; i++) {
      graceAmount += costArr[i].graceCount * costArr[i].pieceCount;
      blessingAmount += costArr[i].blessingCount * costArr[i].pieceCount;
      protectionAmount += costArr[i].protectionCount * costArr[i].pieceCount;
      goldAmount += costArr[i].minCost * costArr[i].pieceCount;
      destructionAmount += costArr[i].destructionStone * costArr[i].pieceCount;
      guardianAmount += costArr[i].guardianStone * costArr[i].pieceCount;
      ghlAmount += costArr[i].ghl * costArr[i].pieceCount;
      basicFusionAmount += costArr[i].basicFusion * costArr[i].pieceCount;
      setGraceTotal(graceAmount);
      setBlessingTotal(blessingAmount);
      setProtectionTotal(protectionAmount);
      setGoldTotal(goldAmount);
      setDestructionTotal(destructionAmount);
      setGuardianTotal(guardianAmount);
      setBasicFusionTotal(basicFusionAmount);
      setghlTotal(ghlAmount);
    }
  }

  useEffect(() => {
    calculateTotals();
  });
  return (
    <>
      <h2>Optimal Upgrade Path</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}></TableCell>
              <TableCell align="center" colSpan={11}>
                Expected Material Costs
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 140 }}></TableCell>
              <TableCell align="right" style={{ width: 190 }}>
                Optimal Combination
              </TableCell>
              <TableCell align="right">Avg # of Attempts</TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image-guardian"
                  src={guardianStone}
                  width={"35px"}
                  height={"35px"}
                  alt={`guardian stone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image-destruction"
                  src={destructionStone}
                  width={"35px"}
                  height={"35px"}
                  alt={`destruction stone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image"
                  src={greatHonorLeapstone}
                  width={"40px"}
                  height={"40px"}
                  alt={`great honor leapstone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image"
                  src={basicFusion}
                  width={"50px"}
                  height={"50px"}
                  alt={`basic fusion`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image"
                  src={solarGrace}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar grace`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image"
                  src={solarBlessing}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar blessing`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-header-image"
                  src={solarProtection}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar protection`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image-gold"
                  src={gold}
                  width={"40px"}
                  height={"40px"}
                  alt={`gold`}
                />
                Tap
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image-gold"
                  src={gold}
                  width={"40px"}
                  height={"40px"}
                  alt={`gold`}
                />
                Total
              </TableCell>
              <TableCell align="center">Remove Row</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">{guardianTotal}</TableCell>
              <TableCell align="right">{destructionTotal}</TableCell>
              <TableCell align="right">{ghlTotal}</TableCell>
              <TableCell align="right">{basicFusionTotal}</TableCell>
              <TableCell align="right">{graceTotal}</TableCell>
              <TableCell align="right">{blessingTotal}</TableCell>
              <TableCell align="right">{protectionTotal}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{goldTotal}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {costArr.map((row, i) => {
              return (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {`${row.alignment} +${row.toLevel} x${row.pieceCount}`}
                  </TableCell>
                  <TableCell align="right">
                    {row.graceCount}
                    <img
                      className="table-combination-image"
                      src={solarGrace}
                      width={"40px"}
                      height={"40px"}
                      alt={`solar grace`}
                    />
                    {row.blessingCount}
                    <img
                      className="table-combination-image"
                      src={solarBlessing}
                      width={"40px"}
                      height={"40px"}
                      alt={`solar grace`}
                    />
                    {row.protectionCount}
                    <img
                      className="table-combination-image"
                      src={solarProtection}
                      width={"40px"}
                      height={"40px"}
                      alt={`solar grace`}
                    />
                  </TableCell>
                  <TableCell align="right">{row.avgNumClicks}</TableCell>
                  <TableCell align="right">{row.guardianStone}</TableCell>
                  <TableCell align="right">{row.destructionStone}</TableCell>
                  <TableCell align="right">{row.ghl}</TableCell>
                  <TableCell align="right">{row.basicFusion}</TableCell>
                  <TableCell align="right">
                    {Math.ceil(
                      row.graceCount * row.avgNumClicks * row.pieceCount
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {Math.ceil(
                      row.blessingCount * row.avgNumClicks * row.pieceCount
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {Math.ceil(
                      row.protectionCount * row.avgNumClicks * row.pieceCount
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {Math.ceil(row.minCost / row.avgNumClicks)}
                  </TableCell>
                  <TableCell align="right">
                    {row.minCost * row.pieceCount}
                  </TableCell>
                  <TableCell>
                    <Button id={i} onClick={handleDelete} variant="contained">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CostTable;
