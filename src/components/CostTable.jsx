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
      console.log(costArr[i].graceCount);
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
              <TableCell></TableCell>
              <TableCell align="right">Solar Grace</TableCell>
              <TableCell align="right">Solar Blessing</TableCell>
              <TableCell align="right">Solar Protection</TableCell>
              <TableCell align="right">Expected Gold Cost</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
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
