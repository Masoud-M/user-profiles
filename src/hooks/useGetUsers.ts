import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";
import { status, usersData } from "../utils/types";
import { useSearchParams } from "react-router-dom";

export function useGetUsers(): {
  users: usersData;
  status: status;
} {
  const [searchParams, setSearchParams] = useSearchParams();

  // If there is no value for page in the url then set the default value to 1
  if (!searchParams.get("page")) {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }
  const page = searchParams.get("page") || "1";

  const { data: users, status } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers({ page }),
  });
  return { users, status };
}
