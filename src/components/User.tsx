import { userProps } from "../utils/types";
import UserItem from "./UserItem";

function User({ user }: { user: userProps }) {
  return (
    <div className="flex flex-col justify-between w-full h-full ">
      <UserItem user={user} />
    </div>
  );
}

export default User;
