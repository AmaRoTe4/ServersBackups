import fetch from "node-fetch";
import { fechaNow } from "../fecha/index.js" 
import { getAllData } from "../firebase/index.js"
import { crearNewFiles } from "../github/index.js"
import { REPONAME , REPOOWNER , ACCESS_TOKEN } from "../const.js" 

export const subirFile = async (filePath, newFileContent) => {
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents/${filePath}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${REPOOWNER}:${ACCESS_TOKEN}`)}`,
    },
    body: JSON.stringify({
      message: "Creando un nuevo archivo",
      content: btoa(JSON.stringify(newFileContent)),
    }),
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al crear el archivo:", error.message);
    });
};

export const GeneralSave = async () => {
  const data = await getAllData()
  for(let i = 0 ; i < data.length ; i++)
  await crearNewFiles(data[i])
  console.log("Copia guardada: " + fechaNow())
}