import User from "../components/User";
import { useGetUsers } from "../hooks/useGetUsers";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function LandingPage() {
  const { users, status } = useGetUsers();
  if (status === "success") {
    console.log(users.data);
  }

  if (status === "pending") return <Spinner />;
  if (status === "error") return <Error />;
  return (
    <div className="mx-auto w-[90%] md:w-[60%] my-10  p-4 rounded-xl shadow-lg justify-center flex items-center flex-col md:items-start bg-gray-100 gap-6">
      <h1 className="text-xl font-bold ">Users list:</h1>
      {users.data.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default LandingPage;
