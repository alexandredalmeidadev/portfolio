import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexandre d'ALMEIDA – Développeur Full-Stack Next.js & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#09090b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient blob top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.15) 60%, transparent 100%)",
          }}
        />

        {/* Gradient blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "380px",
            height: "380px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            width: "100%",
          }}
        >
          {/* Top: avatar + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "9999px",
                border: "3px solid rgba(250,204,21,0.8)",
                overflow: "hidden",
                display: "flex",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/43719341?v=4"
                width={72}
                height={72}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em" }}>
                Alexandre d&apos;ALMEIDA
              </span>
              <span style={{ color: "rgba(161,161,170,0.9)", fontSize: "15px", fontWeight: 600 }}>
                alexandredalmeida.vercel.app
              </span>
            </div>
          </div>

          {/* Center: main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "6px",
                  height: "48px",
                  borderRadius: "3px",
                  background: "linear-gradient(180deg, #a855f7, #ec4899)",
                }}
              />
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "68px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                Développeur
              </span>
            </div>
            <span
              style={{
                color: "transparent",
                fontSize: "68px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                paddingLeft: "18px",
                backgroundImage: "linear-gradient(90deg, #a855f7, #ec4899, #facc15)",
                backgroundClip: "text",
              }}
            >
              Full-Stack & IA
            </span>
          </div>

          {/* Bottom: tech badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {["Next.js", "ASP.NET Core", "IA Générative", "SaaS"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "15px",
                  fontWeight: 700,
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                backgroundColor: "#a855f7",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 800,
                display: "flex",
              }}
            >
              Disponible pour vos projets
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
