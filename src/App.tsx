import { useGetUsers } from "./hooks/useGetUsers";

function App() {
  const { status, users } = useGetUsers();
  console.log(status);
  console.log(users);
  return <div>app</div>;
}

export default App;
