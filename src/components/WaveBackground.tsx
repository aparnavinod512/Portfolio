import { useEffect, useRef } from "react";

const TABLE_SIZE = 1024;
const TWO_PI = Math.PI * 2;

const sinTable = new Float32Array(TABLE_SIZE);
const cosTable = new Float32Array(TABLE_SIZE);

for (let i = 0; i < TABLE_SIZE; i += 1) {
  const angle = (i / TABLE_SIZE) * TWO_PI;
  sinTable[i] = Math.sin(angle);
  cosTable[i] = Math.cos(angle);
}

function tableIndex(value: number) {
  const normalized = ((value % TWO_PI) + TWO_PI) % TWO_PI;
  return Math.floor((normalized / TWO_PI) * TABLE_SIZE) & (TABLE_SIZE - 1);
}

function fastSin(value: number) {
  return sinTable[tableIndex(value)];
}

function fastCos(value: number) {
  return cosTable[tableIndex(value)];
}

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let imageData: ImageData;
    let data: Uint8ClampedArray;
    let animationId = 0;
    const scale = window.innerWidth < 768 ? 4 : 3;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const startedAt = performance.now();

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * pixelRatio);
      canvas.height = Math.floor(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      width = Math.max(1, Math.floor(canvas.width / scale));
      height = Math.max(1, Math.floor(canvas.height / scale));
      imageData = context.createImageData(width, height);
      data = imageData.data;
    };

    const render = (timestamp = startedAt) => {
      const time = prefersReducedMotion.matches ? 0.8 : (timestamp - startedAt) * 0.00045;

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const unitX = (2 * x - width) / height;
          const unitY = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i += 1) {
            a += fastCos(i - d + time * 0.35 - a * unitX * 1.1);
            d += fastSin(i * unitY * 1.05 + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          const centerGlow = Math.max(0, 1 - Math.hypot(unitX * 0.8, unitY * 0.9));
          const base = 0.035 + 0.055 * fastCos(unitX * 0.9 + unitY + time * 0.2);
          const gray = Math.max(
            0,
            Math.min(1, base + (0.1 + 0.16 * wave) * 0.35 + centerGlow * 0.045),
          );
          const coolLift = centerGlow * 10;

          const index = (y * width + x) * 4;
          data[index] = gray * 210 + coolLift;
          data[index + 1] = gray * 220 + coolLift;
          data[index + 2] = gray * 245 + coolLift * 1.4;
          data[index + 3] = 255;
        }
      }

      context.putImageData(imageData, 0, 0);
      context.imageSmoothingEnabled = true;
      context.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);

      if (!prefersReducedMotion.matches) {
        animationId = requestAnimationFrame(render);
      }
    };

    resizeCanvas();
    render();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(8,8,11,0.18),rgba(8,8,11,0.78))]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.018)_0,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_4px)] mix-blend-overlay" />
    </div>
  );
}
