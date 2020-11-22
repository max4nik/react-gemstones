import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "@material-ui/core/Slider";
function valuetext(value) {
  return `${value} $`;
}
const PriceSlider = () => {
  const [value, setValue] = React.useState([400, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
      <Accordion
        style={{ background: "black", color: "white" }}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 style={{ fontSize: "150%", marginTop: "0.5rem" }}>
            Choose price range:
          </h2>
        </AccordionSummary>

        <AccordionDetails>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            step={100}
            max={3000}
            getAriaValueText={valuetext}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PriceSlider;
