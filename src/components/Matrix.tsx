"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface MatrixRainProps {
  className?: string;
  fontSize?: number;
  color?: string;
  characters?: string;
  speed?: number; // Lower = slower (0.1 to 1.0 recommended)
}

export default function MatrixRain({
  className = "",
  fontSize = 14,
  color,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:',.<>?/~`",
  speed = 0.5, // Default slower speed
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fill container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Calculate columns based on font size
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops at random positions
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen at random heights
    }

    const chars = characters.split("");

    // Theme-aware colors
    const getColors = () => {
      const isDark = resolvedTheme === "dark";
      return {
        textColor: color || (isDark ? "#70f37d" : "#000000"), // Green in dark, black in light
        trailColor: isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(34, 197, 94, 0.05)", // Matches CSS background 142 72% 50%
      };
    };

    let animationId: number;
    let lastTime = 0;
    const frameInterval = 1000 / (30 * speed); // Control speed via frame rate

    function draw(currentTime: number = 0) {
      if (!canvas || !ctx) return;

      animationId = requestAnimationFrame(draw);

      // Throttle based on speed
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = currentTime - (deltaTime % frameInterval);

      const { textColor, trailColor } = getColors();

      // Create trail effect by drawing semi-transparent background
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = textColor;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Move drop down
        drops[i]++;

        // Reset drop to top with random chance when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    draw();

    const handleResize = () => {
      resizeCanvas();
      // Recalculate columns on resize
      const newColumns = Math.floor(canvas.width / fontSize);
      while (drops.length < newColumns) {
        drops.push(Math.random() * -100);
      }
      drops.length = newColumns;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme, fontSize, color, characters, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
    />
  );
}
