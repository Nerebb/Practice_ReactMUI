import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DetailJobCard({ curJob }) {
  return (
    <Box
      sx={{
        maxWidth: 375,
        maxHeight: 500,
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {curJob.city}
            </Typography>
            <Typography variant="h5" component="div">
              {curJob.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              ${curJob.salaryLow} - ${curJob.salaryHigh}
            </Typography>
            <Typography variant="body2">{curJob.description}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
