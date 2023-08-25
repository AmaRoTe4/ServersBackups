export const fechaNow = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hora = today.getHours();
  const minuto = today.getMinutes();
  const segundo = today.getSeconds();

  const formattedDate = `
        ${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}|${hora.toString().padStart(2, "0")}:${minuto
    .toString()
    .padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;

  return formattedDate;
};
