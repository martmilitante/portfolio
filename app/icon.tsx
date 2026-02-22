import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 18,
        background: "#020617",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        fontWeight: 800,
        fontFamily: "sans-serif",
      }}
    >
      <span
        style={{
          backgroundImage: "linear-gradient(to right, #6366f1, #a855f7)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        RM
      </span>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
