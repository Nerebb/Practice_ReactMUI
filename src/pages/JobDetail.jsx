import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailJobCard from "../components/DetailJobCard";
import fetchData from "../data/fetchData";

function JobDetail() {
  const [curJob, setCurJob] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  //Fake fetch data
  useEffect(() => {
    const fetchedData = async () => {
      const resData = await fetchData.getJobDetail(id);
      setCurJob(resData);
    };
    fetchedData();
  }, [id]);
  return (
    <Box
      onClick={() => navigate("/")}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#00000040",
      }}
    >
      {curJob && <DetailJobCard curJob={curJob} />}
    </Box>
  );
}

export default JobDetail;
