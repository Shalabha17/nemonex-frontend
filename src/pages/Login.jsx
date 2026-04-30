import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // basic validation
    if (!username || !password) {
      alert("Please enter username & password");
      return;
    }

    try {
      const res = await fetch("https://nemonex-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAdmin", "true");

        alert("Login successful ✅");
        window.location.href="/admin";
      } else {
        alert(data.message || "Invalid credentials ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          value={username}
           autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
           autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;