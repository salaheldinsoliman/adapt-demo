import { useState } from "react";

export default function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  const positionStyles = {
    top:    { bottom: "110%", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "110%",   left: "50%", transform: "translateX(-50%)" },
    left:   { right: "110%", top: "50%",  transform: "translateY(-50%)" },
    right:  { left: "110%",  top: "50%",  transform: "translateY(-50%)" },
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div style={{
          position: "absolute",
          ...positionStyles[position],
          backgroundColor: "#1e2327",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "6px",
          fontSize: "12px",
          whiteSpace: "nowrap",
          zIndex: 9999,
          pointerEvents: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}>
          {text}
        </div>
      )}
    </div>
  );
}