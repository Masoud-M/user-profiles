import Heading from "../components/Heading";
import Pagination from "../components/Pagination";
import UserItem from "../components/UserItem";
import { useGetUsers } from "../hooks/useGetUsers";
import Spinner from "../ui/Spinner";
import Error from "./Error";

function LandingPage() {
  const { users, status } = useGetUsers();

  if (status === "pending") return <Spinner />;
  if (status === "error") return <Error />;

  return (
    <div className="mx-auto w-[90%] lg:w-[50%] my-10  p-4 rounded-xl shadow-lg  flex  flex-col  bg-gray-100 gap-4">
      <Heading label="Users list:" />

      {users.data.length <= 0 ? (
        <h3>There is nothing to show</h3>
      ) : (
        users.data.map((user) => (
          <div className="flex flex-col w-full h-full mb-6">
            <UserItem key={user.id} user={user} />
          </div>
        ))
      )}

      {!users.data.length >= 0 && <Pagination users={users} />}
    </div>
  );
}

export default LandingPage;
