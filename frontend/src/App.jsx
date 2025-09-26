import { useEffect, useState } from "react";

export default function App() {
  const [ok, setOk] = useState("loading…");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/health` : "http://localhost:3000/health")
      .then(r => r.json())
      .then(() => setOk("frontend up • backend reachable"))
      .catch(() => setOk("frontend up • backend NOT reachable"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>HMCTS Task Web</h1>
      <p>Status: {ok}</p>
    </div>
  );
}
