import { Grid, Pagination } from "@mui/material";
import React, { useContext } from "react";
import BaseLayout from "./BaseLayout";
import JobCard from "../components/JobCard";

import { SearchContext } from "../useContext/GlobalContext";
import { Outlet } from "react-router-dom";

function Home() {
  const { data, setCurPage, totalPages, handleSkillFilter } =
    useContext(SearchContext);

  return (
    <BaseLayout>
      <Grid container spacing={2} mt={1}>
        {data.length > 0 &&
          data.map((i, idx) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={idx}>
              <JobCard data={i} onClick={handleSkillFilter} />
            </Grid>
          ))}
      </Grid>
      {totalPages > 0 && (
        <Pagination
          count={totalPages}
          color="primary"
          onChange={(_, value) => setCurPage(value)}
          sx={{
            mt: 2,
            ul: {
              justifyContent: "center",
            },
            button: {
              color: (theme) => theme.palette.text.pagination,
            },
          }}
        />
      )}
      <Outlet />
    </BaseLayout>
  );
}

export default Home;
