import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f8f8",
    }}>
      <h1 style={{
        fontSize: "4rem",
        marginBottom: "1rem",
        color: "#ff4444",
      }}>Oops! 🤒</h1>
      <p style={{
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#777",
        margin: 0,
      }}>Lo lamento A ocurrido un pequeño error.</p>
      <p style={{
        fontSize: "1.2rem",
        textAlign: "center",
        color: "#999",
        margin: "1rem 0",
      }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;