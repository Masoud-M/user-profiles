import UserItem from "../components/UserItem";
import { useGetUser } from "../hooks/useGetUser";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function UserPage() {
  const { status, user } = useGetUser();

  // Handling loading state
  if (status === "pending") return <Spinner />;

  // Handling error state
  if (status === "error") return <Error />;

  return (
    <div className="mx-auto  w-[75%] md:w-[50%] my-10  p-4 rounded-xl shadow-lg justify-center flex items-center flex-col md:items-start bg-gray-100 gap-6">
      <UserItem user={user.data} />
    </div>
  );
}

export default UserPage;
