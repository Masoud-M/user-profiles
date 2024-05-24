import { useGetUsers } from "../hooks/useGetUsers";

function LandingPage() {
  const { users, status } = useGetUsers();
  if (status === "success") {
    console.log(users);
  }
  return <div>Landing page</div>;
}

export default LandingPage;
