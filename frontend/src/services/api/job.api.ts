import httpModule from "@/helpers/http.module";

//post
export const createJob = async (jobData: any) => {
  try {
    const responce = await httpModule.post("/Job/CreateJob", jobData);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

// Get

// put

// delete

export const deleteJob = async (id: string) => {
  try {
    const responce = await httpModule.delete(`/Job/Delete/${id}`);
    console.log("delete job " + id);
  } catch (error) {
    console.log(error);
  }
};
