import httpModule from "@/helpers/http.module";

// crud

// Create {Post}
export const createCompany = async (company: any) => {
  const response = await httpModule.post("/Company/CreateCompany", {
    ...company,
  });
  console.log(response.data);
  return response.data;
};

// Read {Get}
export const getAllCompany = async () => {
  const response = await httpModule.get("/Company/GetCompany");
  const date = response.data;

  return date;
};

// Update {Put}
export const updateCompany = async (id: string, company: any) => {
  try {
    const response = await httpModule.put(`/Company/updateCompany/${id}`, {
      ...company,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete {Delete}
export const deleteCompany = async (id: string) => {
  const response = await httpModule.delete(`/Company/Delete/${id}`);
  console.log(response.status);
  return response;
};
