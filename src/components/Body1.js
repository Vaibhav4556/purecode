import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Typography from "@mui/material/Typography";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function Body1() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Box sx={{  display:"flex", flexDirection:"column", marginTop:"16px"}}>
        <Typography variant="h4" component="div">
          Hello there, admin@example.com
        </Typography>
        <Typography variant="body2">
          Here is some information we gathered about your store
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          marginBottom: "30px",
          maxWidth: 1000,
          
        }}
      >
        <Card
          sx={{
            width:320,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Sales
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Today
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginLeft: "35px" }}
            >
              PLN 0.00
            </Typography>
          </CardContent>
          <CardContent>
            <SignalCellularAltIcon
              sx={{
                fontSize: "50px",
                marginTop: "20px",
                backgroundColor: "rgba(240,244,247,255)",
                padding: "10px"
              }}
            />
          </CardContent>
        </Card>

        <Card
          sx={{
            width:320,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Orders
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Today
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginLeft: "150px" }}
            >
              0
            </Typography>
          </CardContent>
          <CardContent>
            <BookmarkAddedIcon
              sx={{
                fontSize: "50px",
                marginTop: "20px",
                backgroundColor: "rgba(240,244,247,255)",
                padding: "10px"
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
