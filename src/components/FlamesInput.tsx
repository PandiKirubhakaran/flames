import React from "react";
import { Box } from "@mui/material";
import GetInputValue from "./GetInputValue";
import { FlamesLabels } from "../constant";

interface FlamesInputProps {
  username: string;
  setUsername: (value: string) => void;
  userPartnerName: string;
  setUserPartnerName: (value: string) => void;
}

const FlamesInput: React.FC<FlamesInputProps> = ({ username, setUsername, userPartnerName, setUserPartnerName }) => {
  return (
    <Box>
      <GetInputValue label={FlamesLabels.YOUR_NAME} name="yourName" value={username} onChange={(e) => setUsername(e.target.value)} />
      <GetInputValue label={FlamesLabels.PARTNER_NAME} name="yourPartnerName" value={userPartnerName} onChange={(e) => setUserPartnerName(e.target.value)} />
    </Box>
  );
};

export default FlamesInput;
