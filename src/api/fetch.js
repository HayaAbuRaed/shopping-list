const BASE_URL = "https://fakestoreapi.com";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

const fetchData = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  return handleResponse(response);
};

export default fetchData;
