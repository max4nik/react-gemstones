import React from "react";
import { Checkbox } from "antd";
import { CheckElement, Checker, CheckTitle } from "./CheckBox.styled";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const gemstoneTypes = [
  {
    id: 1,
    type: "Diamond",
  },
  {
    id: 2,
    type: "Ruby",
  },
  {
    id: 3,
    type: "Nephrite",
  },
  {
    id: 4,
    type: "Opal",
  },
  {
    id: 5,
    type: "Perl",
  },
  {
    id: 6,
    type: "Sapphire",
  },
  {
    id: 7,
    type: "Emerald",
  },
];

const renderCheckboxList = () =>
  gemstoneTypes.map((value, index) => (
    <CheckElement key={index}>
      <Checkbox type="checkbox" />
      <span style={{ marginLeft: "0.35rem" }}>{value.type}</span>
    </CheckElement>
  ));

function CheckBox() {
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
          <CheckTitle>Choose gemstone type:</CheckTitle>
        </AccordionSummary>

        <AccordionDetails>
          <Checker>{renderCheckboxList()}</Checker>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CheckBox;
