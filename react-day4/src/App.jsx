import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "container dark" : "container light"}>
      <h1>Name</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className={isDark ? "text dark" : "text light"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p className="Displa">{name}</p>
      
      <h2>Counter App</h2>

      <p className="count Display">{count}</p>

      <button
        className={isDark ? "button dark" : "button light"}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className={isDark ? "button dark" : "button light"}
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      <button
        className={isDark ? "button dark" : "button light"}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <h3>{isDark ? "Dark Mode" : "Light Mode"}</h3>

      <button
        className={isDark ? "button dark" : "button light"}
        onClick={toggleTheme}
      >
        {isDark ? "Switch to Light Theme ?" : "Switch to Dark Theme ?"}
      </button>
    </div>
  );
}

export default App;
