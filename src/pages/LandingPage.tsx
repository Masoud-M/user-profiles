import Heading from "../components/Heading";
import Pagination from "../components/Pagination";
import User from "../components/User";
import { useGetUsers } from "../hooks/useGetUsers";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function LandingPage() {
  const { users, status } = useGetUsers();

  if (status === "pending") return <Spinner />;
  if (status === "error") return <Error />;

  return (
    <div className="mx-auto w-[90%] md:w-[50%] my-10  p-4 rounded-xl shadow-lg justify-center flex items-center flex-col md:items-start bg-gray-100 gap-6">
      <Heading label="Users list:" />

      {users.data.length === 0 ? (
        <h3>There is nothing to show</h3>
      ) : (
        users.data.map((user) => <User key={user.id} user={user} />)
      )}

      {!users.data.length === 0 && <Pagination users={users} />}
    </div>
  );
}

export default LandingPage;
