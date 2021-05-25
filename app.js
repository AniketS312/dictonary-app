// fetch(
//   "https://dictionaryapi.com/api/v3/references/collegiate/json/human?key=6934e3f2-9fa0-4a69-bfdf-be5175f851c3"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const api =
  "https://dictionaryapi.com/api/v3/references/collegiate/json/human?key=6934e3f2-9fa0-4a69-bfdf-be5175f851c3";

//   Degfine async
async function getApi(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
getApi(api);
