import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function AlertModal({ loginStatus }) {
  return loginStatus.Alert ? (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {loginStatus.message}
    </Alert>
  ) : (
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      {loginStatus.message}
    </Alert>
  );
}

export default AlertModal;
