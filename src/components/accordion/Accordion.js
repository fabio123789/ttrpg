import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled } from "@mui/system";

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  backgroundColor: "none",
  "& .MuiAccordionSummary-expandIconWrapper, .MuiAccordionSummary-content ": {
    color: "white",
  },
}));

const CustomAccordion = ({ children, summary }) => {
  return (
    <div>
      <AccordionStyled defaultExpanded={true} style={{background: 'none', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </AccordionStyled>
    </div>
  );
};

export default CustomAccordion;
