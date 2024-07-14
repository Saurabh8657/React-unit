import AuthContextProvider from "./Context/AuthContext";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <AuthContextProvider>
      <div data-testid="users-app">
        {/* Add all Routes component here */}
        <AllRoutes/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
