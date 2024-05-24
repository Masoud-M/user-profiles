import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { users } = useGlobalContext();
  console.log(users);
  return <div>app</div>;
}

export default App;
