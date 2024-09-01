import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Custom Title</DialogTitle>
      <DialogContent>
        <Typography>Your custom text goes here.</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
