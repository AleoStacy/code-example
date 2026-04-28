import { useEffect, useState } from "react";
import Best from "./components/Best";
import Another from "./components/Another";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>I LOVE YOU 🔥</h1>
      <p>{message}</p>
      <Best />
      <Another />
    </div>
  );
}

export default App;
