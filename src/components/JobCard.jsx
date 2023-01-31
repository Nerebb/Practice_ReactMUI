import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../useContext/GlobalContext";

function JobCard({ data, onClick }) {
  const { title, skills, description, id } = data;
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLearnMore() {
    isLogin ? navigate(`/job/${id}`) : navigate("/login");
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 345,
        display: "flex",
        flexDirection: "column",
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <CardContent
        sx={{
          height: 1,
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px !important",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box>
          {skills.slice(0, 4).map((i, idx) => (
            <Chip
              key={`${id}-${idx}`}
              label={i}
              onClick={() => onClick(i)}
              sx={{ m: "3px" }}
            />
          ))}
        </Box>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ flexGrow: 1, mt: 1 }}
        >
          {description}
        </Typography>
        <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              px: 2,
              fontWeight: 700,
              color: (theme) => theme.palette.text.secondary,
            }}
            onClick={() => handleLearnMore()}
          >
            Learn more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default JobCard;
