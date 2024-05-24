import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUsers";
import { useParams } from "react-router";
import { status, userData } from "../utils/types";

export function useGetUser(): { user: userData; status: status } {
  // Get the userId from the url
  const { userId } = useParams();

  const { data: user, status } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser({ userId }),
  });
  return { user, status };
}
