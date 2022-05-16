import React, { useState } from "react";
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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>To</TableCell>
            <TableCell align="right">Solar Grace</TableCell>
            <TableCell align="right">Solar Blessing</TableCell>
            <TableCell align="right">Solar Protection</TableCell>
            <TableCell align="right">Expected Gold Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {costArr.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.toLevel}
              </TableCell>
              <TableCell align="right">{row.graceCount}</TableCell>
              <TableCell align="right">{row.blessingCount}</TableCell>
              <TableCell align="right">{row.protectionCount}</TableCell>
              <TableCell align="right">{row.minCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CostTable;
