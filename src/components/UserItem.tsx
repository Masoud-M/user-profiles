import { useNavigate } from "react-router";
import { userProps } from "../utils/types";

function UserItem({ user }: { user: userProps }) {
  const navigate = useNavigate();
  return (
    <div
      id={JSON.stringify(user.id)}
      className="flex flex-row items-center transition-all cursor-pointer hover:text-blue-400"
      onClick={() => navigate(`/user/${JSON.stringify(user.id)}`)}
    >
      <div className="w-20 h-20 mr-4">
        <img
          className="object-cover w-full h-full rounded-full"
          src={user.avatar}
          alt={`${user.first_name} avatar`}
        />
      </div>
      <div className="flex flex-row">
        <div className="mr-2 text-lg font-semibold">{user.first_name}</div>
        <div className="text-lg font-semibold">{user.last_name}</div>
      </div>
      <div className="ml-auto text-lg font-semibold">{user.email}</div>
    </div>
  );
}

export default UserItem;
