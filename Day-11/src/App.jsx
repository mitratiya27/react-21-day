import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <h1>Context API Demo</h1>

      <p>
        Current Theme :
        <b> {isDark ? "Dark" : "Light"}</b>
      </p>

      <ThemeButton />
    </div>
  );
}

export default App;