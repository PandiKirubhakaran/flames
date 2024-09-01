import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Typography,
} from "@mui/material";
import LandingImage from "../components/LandingImage";
import GetInputValue from "../components/GetInputValue";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  FlamesTitles,
  FlamesLabels,
  FlamesButtonTexts,
  FlamesResultText,
} from "../constant";
import classes from "./Flames.module.css";

const Flames = () => {
  const [username, setUsername] = useState<string>("");
  const [userPartnerName, setUserPartnerName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [partnerName, setPartnerName] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [flame, setFlame] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setFlame(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSetPartnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerName(e.target.value);
  };
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUserPartnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPartnerName(e.target.value);
  };

  const handleClear = () => {
    setUsername("");
    setUserPartnerName("");
    setResult("");
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };
  const handleCalculateFlames = () => {
    // Check if user has provided names
    if (!username || !userPartnerName) {
      setSnackbarMessage("Kindly enter your name and your partner's name");
      setOpen(true);
      return;
    }

    // Check if the provided names match the pre-set names
    if (
      username.toLowerCase().replace(/\s+/g, "") ===
        name.toLowerCase().replace(/\s+/g, "") &&
      userPartnerName.toLowerCase().replace(/\s+/g, "") ===
        partnerName.toLowerCase().replace(/\s+/g, "")
    ) {
      setResult(flame);
    } else {
      // Perform the FLAMES calculation
      let name1 = username.toLowerCase().replace(/\s+/g, "");
      let name2 = userPartnerName.toLowerCase().replace(/\s+/g, "");

      // Remove matching characters between the two names
      for (let char of name1) {
        if (name2.includes(char)) {
          name1 = name1.replace(char, "");
          name2 = name2.replace(char, "");
        }
      }

      const remainingLetters = name1.length + name2.length;

      let flamesArray = ["F", "L", "A", "M", "E", "S"];
      let index = 0;

      // Calculate the final FLAMES result based on the remaining letters
      while (flamesArray.length > 1) {
        index = (remainingLetters - 1 + index) % flamesArray.length;
        flamesArray.splice(index, 1);
      }

      // Map the final result to the relationship type
      const finalResult = flamesArray[0];
      let relationship = "";
      switch (finalResult) {
        case "F":
          relationship = "Friends";
          break;
        case "L":
          relationship = "Lovers";
          break;
        case "A":
          relationship = "Affection";
          break;
        case "M":
          relationship = "Marriage";
          break;
        case "E":
          relationship = "Enemies";
          break;
        case "S":
          relationship = "Siblings";
          break;
        default:
          relationship = "Unknown";
      }
      setResult(relationship);
    }
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        {FlamesTitles.FLAMES_CALCULATOR}
      </Typography>
      <Box className={classes.formContainer}>
        <Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                mb: 1.5,
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
            >
              <Typography color="yellow">Set Default Flames</Typography>
              <IconButton>
                <TipsAndUpdatesIcon
                  sx={{ color: "yellow" }}
                />
              </IconButton>
            </Box>
            <Dialog open={openDialog} onClose={handleClose}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <DialogTitle>Set Default</DialogTitle>
                <IconButton onClick={handleClose}>
                  <HighlightOffIcon />
                </IconButton>
              </Box>
              <DialogContent>
                <Typography>
                  You can enter your name and your partner's name, along with a
                  preferred FLAMES result. Once you set and calculate, the
                  chosen result will be displayed below. For example, if you
                  enter your name as "Sivan," your partner's name as "Parvathi,"
                  and select "Love" from the dropdown, the result will be
                  locked. Even if you close the tab, the next time you enter
                  your names and calculate, it will always display "Love." This
                  feature is designed to prevent unexpected outcomes and impress
                  your partner.
                </Typography>
                <Typography color="gray" fontWeight={600}>
                  Note:
                </Typography>
                <Typography mb={2}>
                  If the names match the default values you set and the
                  calculation criteria are met, the pre-selected result will be
                  shown. Otherwise, the normal FLAMES calculation will be
                  displayed.
                </Typography>
                <GetInputValue
                  label={FlamesLabels.YOUR_NAME}
                  name="setName"
                  value={name}
                  onChange={handleSetName}
                />
                <GetInputValue
                  label={FlamesLabels.PARTNER_NAME}
                  name="setPartnerName"
                  value={partnerName}
                  onChange={handleSetPartnerName}
                />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Flames
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={flame}
                      label="Flames"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Friends"}>Friends</MenuItem>
                      <MenuItem value={"Lovers"}>Lovers</MenuItem>
                      <MenuItem value={"Affection"}>Affection</MenuItem>
                      <MenuItem value={"Marriage"}>Marriage</MenuItem>
                      <MenuItem value={"Enemies"}>Enemies</MenuItem>
                      <MenuItem value={"Siblings"}>Siblings</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
          <GetInputValue
            label={FlamesLabels.YOUR_NAME}
            name="yourName"
            value={username}
            onChange={handleUserName}
          />
          <GetInputValue
            label={FlamesLabels.PARTNER_NAME}
            name="yourPartnerName"
            value={userPartnerName}
            onChange={handleUserPartnerName}
          />
          <Button className={classes.button} onClick={handleCalculateFlames}>
            {FlamesButtonTexts.CALCULATE}
          </Button>
          <Button className={classes.clearButton} onClick={handleClear}>
            {FlamesButtonTexts.CLEAR}
          </Button>
        </Box>
        <LandingImage />
      </Box>
      <>
        {result && username && userPartnerName && (
          <Typography className={classes.resultText}>
            {FlamesResultText.RELATIONSHIP_RESULT}{" "}
            <span className={classes.resultHighlight}>{username}</span> and{" "}
            <span className={classes.resultHighlight}>{userPartnerName}</span> :{" "}
            <span style={{ color: "yellow" }}>"{result}"</span>
          </Typography>
        )}
      </>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        key="snackbar"
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#fff",
            color: "#e30022",
            fontWeight: "600",
          },
        }}
      />
    </Box>
  );
};

export default Flames;
