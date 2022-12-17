import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CardContent } from "@mui/material";
export default function Body2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Card sx={{
          maxWidth: 690,
        }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              
              <span style={{ fontWeight: "bold" }}>6 </span>orders are ready to
              fulfill
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {" "}
              <span style={{ fontWeight: "bold" }}>3 </span> payments to capture
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> No products are out of stocks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>

      <Card
        sx={{
          maxWidth: 690,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Top Products
          </Typography>
          <Typography sx={{ marginTop: "30px" }}>No products found</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
