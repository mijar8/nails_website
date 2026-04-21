import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const runtime = "edge";
export const alt = "Premium Nagelstudio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#5C1F2B",
          color: "#F5F1EA",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20, opacity: 0.8 }}>
          Premium Nagelstudio
        </div>
        <div style={{ fontSize: 96, fontStyle: "italic", marginBottom: 40 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>
          {siteConfig.contact.address.city} • Maniküre • Nageldesign
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
