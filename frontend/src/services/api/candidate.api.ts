import httpModule from "@/helpers/http.module";
// crud

// create (Post)
export const CreateCandidate = async (candidate: any) => {
  try {
    const response = await httpModule.post("/Candidate/CreateCandidate", {
      ...candidate,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Read (Get)
export const GetAllCandidate = async () => {
  try {
    const response = await httpModule.get("/Candidate/GetCandidate");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Update (Put)
export const UpdateCandidate = async (id: string, candidate: any) => {
  try {
    const response = await httpModule.put(`/Candidate/Update/${id}`, {
      ...candidate,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete (Delete)

export const DeleteCandidate = async (id: string) => {
  try {
    const response = await httpModule.delete(
      `/Candidate/DeleteCandidate/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
