import { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    const starCount = 400;
    const speed = 0.2; // Slower speed for more ambient feel

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          size: Math.random() * 2,
          brightness: Math.random(),
        });
      }
    };

    const updateStars = () => {
      for (const star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.brightness = Math.random();
        }
      }
    };

    const drawStars = () => {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height); // Transparent background
      
      const cx = width / 2;
      const cy = height / 2;

      for (const star of stars) {
        const scale = 300 / (300 + star.z); 
        const x2d = star.x * scale + cx;
        const y2d = star.y * scale + cy;

        if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
           const size = Math.max(0.5, star.size * scale);
           // Twinkle based on position and time
           const brightness = Math.min(1, Math.max(0.2, (1 - star.z / width) + (Math.sin(Date.now() * 0.003 + star.x) * 0.3)));
           
           ctx.beginPath();
           ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
           ctx.fill();
        }
      }
    };

    const animate = () => {
      updateStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    initStars();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default StarField;
