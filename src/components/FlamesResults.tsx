import React from "react";
import { Typography } from "@mui/material";
import classes from "../pages/Flames.module.css";
import { FlamesResultText } from "../constant";

interface FlamesResultProps {
  username: string;
  userPartnerName: string;
  result: string;
}

const FlamesResult: React.FC<FlamesResultProps> = ({ username, userPartnerName, result }) => {
  if (!result) return null;

  return (
    <Typography className={classes.resultText}>
      {FlamesResultText.RELATIONSHIP_RESULT} <span className={classes.resultHighlight}>{username}</span> and{" "}
      <span className={classes.resultHighlight}>{userPartnerName}</span>: <span style={{ color: "yellow" }}>"{result}"</span>
    </Typography>
  );
};

export default FlamesResult;
