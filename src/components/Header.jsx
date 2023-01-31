import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import {
  AuthContext,
  SearchContext,
  ThemeModeContext,
} from "../useContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Switch, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  const { handleSkillFilter } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          backgroundColor: (theme) => theme.palette.mode,
        }}
      >
        <Toolbar>
          <Typography
            component="h5"
            variant="h5"
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Jobs
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e) => handleSkillFilter(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{
              fontWeight: 700,
              px: 5,
              color: (theme) => theme.palette.text.primary,
              bgcolor: (theme) => theme.palette.background.default,
            }}
            onClick={() => (isLogin ? setIsLogin(false) : navigate("/login"))}
          >
            {isLogin ? "Logout" : "Login"}
          </Button>
          <Switch
            onClick={() =>
              setThemeMode(() => {
                return themeMode === "light" ? "dark" : "light";
              })
            }
          ></Switch>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
