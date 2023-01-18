import srcData from "../data/sourceData.json";

async function getData(curPage, params) {
  try {
    let resData;
    if (params) {
      const filteredJobs = srcData.filter((i) =>
        i.skills.some((string) => string.includes(params))
      );
      resData =
        filteredJobs.length > 6
          ? {
              data: filteredJobs.slice((curPage - 1) * 6, curPage * 6 - 1),
              totalPages: Math.floor(srcData.length / 5 + 1),
            }
          : { data: filteredJobs, totalPages: 0 };
    } else {
      resData = {
        data: srcData.slice((curPage - 1) * 6, curPage * 6 - 1),
        totalPages: Math.floor(srcData.length / 5 + 1),
      };
    }
    return resData;
  } catch (error) {
    console.log("FilterData -->", error);
  }
}

async function getJobDetail(id) {
  const selectedJob = srcData.find((i) => i.id === id);
  return selectedJob;
}

const fetchData = { getData, getJobDetail };

export default fetchData;
