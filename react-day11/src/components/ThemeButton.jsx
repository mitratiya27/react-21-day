import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <button onClick={changeTheme}>
      Change Theme
    </button>
  );
}

export default ThemeButton;