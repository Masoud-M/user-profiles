export async function getUsers() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  if (!res.ok) throw new Error("Something went wrong while fetching data");
  const data = res.json();
  return data;
}
