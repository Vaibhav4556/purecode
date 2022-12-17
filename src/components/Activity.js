import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function Activity() {
  return (
    <Card sx={{ minWidth:300 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Activity
        </Typography>

        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11639 was placed</Typography>
          <Typography color="text.secondary">a day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11638 was placed</Typography>
          <Typography color="text.secondary">2 day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11637 was placed</Typography>
          <Typography color="text.secondary">2 day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11636 was placed</Typography>
          <Typography color="text.secondary">2 day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11635 was placed</Typography>
          <Typography color="text.secondary">2 day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11634 was placed</Typography>
          <Typography color="text.secondary">3 day ago</Typography>
        </Box>
        <Box sx={{ margin: "25px 0 25px 0" }}>
          <Typography>Order #11633 was placed</Typography>
          <Typography color="text.secondary">3 day ago</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
