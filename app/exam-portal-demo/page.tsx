"use client";

import { useEffect, useRef, useState } from "react";

export default function ExamPortalDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Muted autoplay in background so video is ready when user clicks
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const handleStart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    if (video.paused) video.play().catch(() => {});
    setStarted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src="https://blr1.digitaloceanspaces.com/vilva-backup/Marketing/social_media_management/clients/xtragenius/whatsapp_bot_assets/Xtragenius%20-%20Portal%20-%20Final.mp4"
        controls
        loop
        playsInline
        muted
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#000",
        }}
      />

      {!started && (
        <div
          onClick={handleStart}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "3px solid rgba(255,255,255,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 18,
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 1,
              textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Tap to Play with Sound
          </span>
        </div>
      )}
    </div>
  );
}
