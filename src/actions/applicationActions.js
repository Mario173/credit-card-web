import { sendRequest } from "../services/apiServices";

const BASE_URL = "/credit/card/applications";

export const getApplicationList = async () => {
  return await sendRequest(BASE_URL);
};

export const getApplication = async (id) => {
  return await sendRequest(`${BASE_URL}/${id}`);
};

export const addApplication = async (application) => {
  return await sendRequest(BASE_URL, "POST", application);
};

export const updateApplication = async (application) => {
  return await sendRequest(`${BASE_URL}/${application.creditCardApplicantId}`, "PUT", application);
};

export const deleteApplication = async (id) => {
  return await sendRequest(`${BASE_URL}/${id}`, "DELETE");
};
