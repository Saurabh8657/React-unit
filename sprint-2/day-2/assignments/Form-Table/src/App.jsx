import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { UserDataContextProvider } from "./context/UserDataContext";
function App() {
  return (
    <UserDataContextProvider>
      <div>
        <div data-testid="container">
          <Form/>
          <Table/>
        </div>
      </div>
    </UserDataContextProvider>
  );
}

export default App;
