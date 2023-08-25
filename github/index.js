import { fechaNow } from "../fecha/index.js"; 
import { fetchData } from "../fetch/index.js"; 
import { subirFile } from "../save/index.js"; 

const crearNewFile = async (name, folderName, respuesta, clave = "") => {
  const tipo = respuesta.tipos.find((n) => n.name === name);
  if (!tipo) return console.log("tipo no encontrado");
  const urlCreate = folderName + "/" + tipo.name + "/" + fechaNow() + ".json";

  const urlData = respuesta.url + tipo.path;
  const data = await fetchData(urlData, clave);

  const resultado = await subirFile(urlCreate, data);
  return resultado;
};

export const crearNewFiles = async (respuesta) => {
  const tipos = respuesta.tipos;
  const titulo = respuesta.titulo;
  let resultados = [];

  for (let i = 0; i < tipos.length; i++) {
    const resultado = await crearNewFile(
      tipos[i].name,
      titulo,
      respuesta,
      tipos[i].clave ?? ""
    );
    resultados.push(resultado);
  }

  //console.log(resultados)
};
