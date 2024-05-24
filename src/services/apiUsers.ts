import { URL } from "../utils/constants";

export async function getUsers({ currentPage }: { currentPage: string }) {
  const res = await fetch(`${URL}${currentPage}`);
  if (!res.ok) throw new Error("Something went wrong while fetching data");
  const data = res.json();
  return data;
}
