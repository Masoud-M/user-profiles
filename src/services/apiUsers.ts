import { URL } from "../utils/constants";

// Fetching all the users based on the current page
export async function getUsers({ page }: { page: string }) {
  const currentPage = "users?page=" + page;
  const res = await fetch(`${URL}${currentPage}`);
  if (!res.ok) throw new Error("Something went wrong while fetching data");
  const data = res.json();
  return data;
}

// Fetching a user data based on userId
export async function getUser({ userId }: { userId: string }) {
  const api = "users/" + userId;
  const res = await fetch(`${URL}${api}`);
  if (!res.ok) throw new Error("Something went wrong while fetching data");
  const data = res.json();
  return data;
}
