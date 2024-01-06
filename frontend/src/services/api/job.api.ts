import httpModule from "@/helpers/http.module";

//post
export const createJob = async (jobData: any) => {
  try {
    const response = await httpModule.post("/Job/CreateJob", jobData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get
export const getAllJobs = async () => {
  try {
    const response = await httpModule.get("/Job/GetJob");
    // console.log( await response.request?.responseUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// put
export const updateJob = async (id: string, jobData: any) => {
  try {
    // getAllJobs();

    const response = await httpModule.put(`/Job/updateJob/${id}`, {
      ...jobData,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// delete
