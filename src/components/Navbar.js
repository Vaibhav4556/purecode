import React from "react";
import Box from "@mui/material/Box";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        padding:"20px",
        gap: "20px",
        height: "40px",
        width: "100%",
        
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(247,248,250,255)",
        }}
      >
        <BoltIcon sx={{ p: 1 }} />
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,255)",
          p: 1, display:"flex",alignItems:"center",gap:"30px"
        }}
      >
        Channel-PLN
        <ArrowDropDownIcon/>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(247,248,250,255)",
          display: "flex",
        flexDirection: "row",
        marginRight:"200px"
        
        }}
      >
        <AccountBoxRoundedIcon sx={{ p: 1,
        backgroundColor:"rgba(153,202,251,255)" ,
        borderRadius:"50%"}} />
        <Box style={{display:"flex", alignItems:"center" , padding:"5px"}}>admin@example.com</Box>
      </Box>
    </div>
  );
}

export default Navbar;
