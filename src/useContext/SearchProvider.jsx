import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchData from "../data/fetchData";
import { SearchContext } from "./GlobalContext";

function SearchProvider({ children }) {
  const [searchJobs, setSearchJobs] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [params, setParams] = useSearchParams();
  const querySkills = params.get("skills");

  useEffect(() => {
    const fetch = async () => {
      const { data, totalPages } = await fetchData.getData(
        curPage,
        querySkills
      );
      setSearchJobs(data);
      setTotalPages(totalPages);
    };
    fetch();
  }, [curPage, querySkills]);

  function handleSkillFilter(skill) {
    setParams({ skills: skill });
  }

  return (
    <SearchContext.Provider value={{ data: searchJobs, curPage,setCurPage, totalPages,handleSkillFilter }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
