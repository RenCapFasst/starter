import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: login, password: password }),
    });
    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-example">
        <div className="form-example">
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="login"
            id="login"
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-example">
          <label htmlFor="email">Enter your email: </label>
          <input
            type="text"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-example">
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
    </>
  );
}

export default App;
