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

const CostTable = ({ costArr }) => {
  const [graceTotal, setGraceTotal] = useState(0);
  const [blessingTotal, setBlessingTotal] = useState(0);
  const [protectionTotal, setProtectionTotal] = useState(0);
  const [goldTotal, setGoldTotal] = useState(0);

  function calculateTotals() {
    let graceAmount = 0;
    let blessingAmount = 0;
    let protectionAmount = 0;
    let goldAmount = 0;
    for (let i = 0; i < costArr.length; i++) {
      graceAmount += costArr[i].graceCount;
      blessingAmount += costArr[i].blessingCount;
      protectionAmount += costArr[i].protectionCount;
      goldAmount += costArr[i].minCost;
      setGraceTotal(graceAmount);
      setBlessingTotal(blessingAmount);
      setProtectionTotal(protectionAmount);
      setGoldTotal(goldAmount);
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
              <TableCell align="center" colSpan={4}>
                Expected Material Costs
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Optimal Combination</TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={guardianStone}
                  width={"40px"}
                  height={"40px"}
                  alt={`guardian stone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={destructionStone}
                  width={"40px"}
                  height={"40px"}
                  alt={`destruction stone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={greatHonorLeapstone}
                  width={"40px"}
                  height={"40px"}
                  alt={`great honor leapstone`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={basicFusion}
                  width={"40px"}
                  height={"40px"}
                  alt={`basic fusion`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={solarGrace}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar grace`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={solarBlessing}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar blessing`}
                />
              </TableCell>
              <TableCell align="right">
                <img
                  className="table-combination-image"
                  src={solarProtection}
                  width={"40px"}
                  height={"40px"}
                  alt={`solar protection`}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">{graceTotal}</TableCell>
              <TableCell align="right">{blessingTotal}</TableCell>
              <TableCell align="right">{protectionTotal}</TableCell>
              <TableCell align="right">{goldTotal}</TableCell>
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
                    {`to +${row.toLevel}`}
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
                  <TableCell align="right">{row.graceCount}</TableCell>
                  <TableCell align="right">{row.blessingCount}</TableCell>
                  <TableCell align="right">{row.protectionCount}</TableCell>
                  <TableCell align="right">{row.minCost}</TableCell>
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
