import { toast } from "react-toastify";

/**
 * Method to send a request to the server
 * @param {string} url the endpoint to send the request to
 * @param {string} method the HTTP method to use
 * @param {object} body body of the request
 * @param {object} headers headers of the request
 * @returns {Promise} the response from the server
 */
export const sendRequest = async (
  url,
  method = "GET",
  body = null,
  headers = {}
) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
      ...headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  
  try {
    const response = await fetch("http://localhost:8080" + url, config);

    if (!response.ok) {
      const errorData = await response.json();
      handleError(response.status, errorData);
      throw new Error("Request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
  }
};

const getAuthHeader = () => {
  const username = "user";
  const password = "password";
  return { Authorization: "Basic " + btoa(username + ":" + password) };
};

const handleError = (status, errorData) => {
  console.error("API Error Status:", status);
  console.error("API Error Data:", errorData);

  if (errorData && typeof errorData === 'object') {
    toast.error(errorData.message || "An error occurred");
  } else {
    toast.error("An unknown error occurred");
  }
};
