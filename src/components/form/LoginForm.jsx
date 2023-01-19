import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormProvider from "../../useContext/FormProvider";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../useContext/Validate";
import { useNavigate } from "react-router-dom";
import fetchData from "../../data/fetchData";
import AlertModal from "./Alert";

const loginSchema = yup.object().shape({
  Username: yup.string().required("Required"),
  Password: yup.string().required("Required").onlyNumber("Password invalid"),
});

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState({ Alert: false, message: "" });
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const defaultValues = {
    Username: "Admin",
    Password: 12345,
  };
  const methods = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  async function handleLogin(user) {
    const message = await fetchData.getUser(user);
    const Alert = message === "Login succeed" ? true : false;
    setIsLogin(true);
    setLoginStatus({ Alert, message });
  }

  const onSubmit = (data) => handleLogin(data);
  const message = "Login";

  return (
    <Modal
      open={true}
      onClose={() => navigate("/")}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLogin ? (
        <AlertModal loginStatus={loginStatus} />
      ) : (
        <Box
          sx={{
            maxWidth: 500,
            maxheight: 350,
            p: 2,
            bgcolor: (theme) => theme.palette.background.default,
            borderRadius: (theme) => theme.shape.borderRadius,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <FormProvider onSubmit={onSubmit} methods={methods}>
            <Stack spacing={2}>
              <Typography
                textAlign="center"
                fontSize={"20px"}
                fontWeight={"bold"}
              >
                {message}
              </Typography>
              <FormInput name="Username" label="Login username" />
              <FormInput
                name="Password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Show Password"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormCheckbox name="Remember" label="remember me" />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontWeight: 700,
                  px: 5,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Login
              </Button>
              <Box color={"red"}>
                <Typography>Forgot password ? Click here</Typography>
                <Typography>Don't have an account ? SignUp</Typography>
              </Box>
            </Stack>
          </FormProvider>
        </Box>
      )}
    </Modal>
  );
}

export default LoginForm;
