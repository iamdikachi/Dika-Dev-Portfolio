import { ImageResponse } from "next/og";

export const alt = "Onyedikachi Emmanuel Nnadi, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          color: "#d1d5db",
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "radial-gradient(circle, rgba(45, 212, 191, 0.2), transparent 62%)",
            height: "700px",
            position: "absolute",
            right: "-120px",
            top: "-140px",
            width: "700px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "900px" }}>
          <div style={{ color: "#2dd4bf", fontSize: 32, letterSpacing: 4 }}>DIKA.DEV</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ color: "#2dd4bf", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
              Onyedikachi<br />Emmanuel Nnadi
            </div>
            <div style={{ fontSize: 34 }}>Full-Stack Developer</div>
            <div style={{ color: "#9ca3af", fontSize: 24 }}>Next.js / React / Node.js / Laravel / AI Integrations</div>
          </div>
          <div style={{ color: "#2dd4bf", fontSize: 24 }}>dikachi-portfolio.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
