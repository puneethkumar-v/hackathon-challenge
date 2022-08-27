import React, { useState } from "react";
import data from "../../utils/multiple-intelligence";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const MultipleIntelligence = () => {
  const theme = useTheme();
  const [activeData, setActiveData] = React.useState(0);
  const [value, setValue] = useState([data[activeData].isSelected]);
  const maxData = data.length;

  const handleNext = () => {
    setActiveData((activeData) => activeData + 1);
  };

  const handleBack = () => {
    setActiveData((activeData) => activeData - 1);
  };
  const handleChange = () => {
    setValue((value) => !value);
  };
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}>
        <Typography>
          <strong>{activeData + 1}</strong>
        </Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        Question: <br />
        {data[activeData].question}
        <div>
          <input
            type="radio"
            id="yes"
            name="opinion"
            value={value}
            onChange={handleChange}
          />
          <label htmlFor="yes">YES</label>
          <br />
          <input
            type="radio"
            id="no"
            name="opinion"
            value={value}
            onChange={handleChange}
          />
          <label htmlFor="no">NO</label>
          <br />
        </div>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxData}
        position="static"
        activeStep={activeData}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeData === maxData - 1}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeData === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default MultipleIntelligence;
