import fetch from "node-fetch"

export const fetchData = async (url, clave = "") => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      clave,
    },
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Hubo un error:", error);
    });
};
