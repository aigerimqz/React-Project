const BASE_URL = "https://react-project-jbmu.onrender.com/api/tours";

export async function searchItems(query) {
  const res = await fetch(`${BASE_URL}/?search=${query}`);
  return res.json();
}

export async function getItemById(id) {
  const res = await fetch(`${BASE_URL}/${id}/`);
  return res.json();
}
