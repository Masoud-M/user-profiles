import { useNavigate } from "react-router";
import { userProps } from "../utils/types";

function UserItem({ user }: { user: userProps }) {
  const navigate = useNavigate();
  return (
    <div
      id={JSON.stringify(user.id)}
      className="flex flex-col justify-start gap-4 text-xl font-semibold transition-all cursor-pointer sm:flex-row hover:text-blue-400 md:justify-between"
      onClick={() => navigate(`/users/${JSON.stringify(user.id)}`)}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="mr-4 w-14 h-14 md:w-20 md:h-20">
          <img
            className="object-cover w-full h-full rounded-full"
            src={user.avatar}
            alt={`${user.first_name} avatar`}
          />
        </div>
        <div className="flex flex-row">
          <div className="mr-2 ">{user.first_name}</div>
          <div>{user.last_name}</div>
        </div>
      </div>
      <div className="flex items-center">{user.email}</div>
    </div>
  );
}

export default UserItem;
