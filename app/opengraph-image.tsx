import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Linden Pain Relief Health Center, Orange NJ";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F1E8",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#2E5A45",
              color: "#F6F1E8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 26, color: "#3A463E", letterSpacing: 2 }}>
            LINDEN PAIN RELIEF HEALTH CENTER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, color: "#1C2620", lineHeight: 1.05 }}>
            We find where the pain
          </div>
          <div style={{ fontSize: 78, color: "#C8633C", fontStyle: "italic", lineHeight: 1.05 }}>
            actually started.
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#6E7468" }}>
          Chiropractic &amp; recovery · 439 Main Street, Orange, NJ · (973) 675-8700
        </div>
      </div>
    ),
    { ...size }
  );
}
