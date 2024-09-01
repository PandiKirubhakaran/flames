import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import classes from "../pages/Flames.module.css";
import { FlamesButtonTexts } from "../constant";

interface FlamesActionsProps {
  onCalculate: () => void;
  onClear: () => void;
  onOpenDialog: () => void;
}

const FlamesActions: React.FC<FlamesActionsProps> = ({ onCalculate, onClear, onOpenDialog }) => {
  return (
    <Box>
      <IconButton onClick={onOpenDialog}>
        <TipsAndUpdatesIcon sx={{ color: "yellow" }} />
      </IconButton>
      <Button className={classes.button} onClick={onCalculate}>
        {FlamesButtonTexts.CALCULATE}
      </Button>
      <Button className={classes.clearButton} onClick={onClear}>
        {FlamesButtonTexts.CLEAR}
      </Button>
    </Box>
  );
};

export default FlamesActions;
