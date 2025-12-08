const BASE_URL = "https://react-project-jbmu.onrender.com/api/tours";

// export async function searchItems(query) {
//   const res = await fetch(`${BASE_URL}/?search=${query}`);
//   return res.json();
// }

export async function searchItems(filters = {}) {
  const params = new URLSearchParams();

 
  if (filters.search) params.append("search", filters.search);
  if (filters.category) params.append("categories__slug", filters.category);
  if (filters.continent) params.append("continent__slug", filters.continent);
  if (filters.page) params.append("page", filters.page);
  if (filters.page_size) params.append("page_size", filters.page_size);

  
  const res = await fetch(`${BASE_URL}/?${params.toString()}`);
  return res.json();
}

export async function getItemById(id) {
  const res = await fetch(`${BASE_URL}/${id}/`);
  return res.json();
}
