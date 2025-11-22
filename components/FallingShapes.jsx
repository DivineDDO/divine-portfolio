"use client";

import { useEffect, useState } from "react";

export default function FallingShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const newShapes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      size: 15 + Math.random() * 40,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full bg-linear-to-br from-pink-500/40 to-purple-500/40 animate-fall"
          style={{
            left: `${shape.left}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}
    </div>
  );

}
