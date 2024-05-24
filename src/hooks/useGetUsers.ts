import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";
import { status, usersData } from "../utils/types";

export function useGetUsers(): { users: usersData; status: status } {
  const { data: users, status } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users, status };
}
