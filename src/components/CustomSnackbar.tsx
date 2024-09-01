import React from "react";
import { Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  snackbar: { open: boolean; message: string };
  onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ snackbar, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snackbar.open}
      onClose={onClose}
      message={snackbar.message}
      key="snackbar"
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "#fff",
          color: "#e30022",
          fontWeight: "600",
        },
      }}
    />
  );
};

export default CustomSnackbar;
