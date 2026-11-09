import React, { useEffect, useRef } from 'react';

/**
 * SparkleCanvas
 * High-performance 2D canvas particle system rendering falling light sparkles
 * tuned precisely to the Xpressions brand palette:
 *  - 45% Warm Golden Cream (#F4EBDD, #FFE6B5, #FFF3D6)
 *  - 30% Festival Scarlet Red (#F12B25, #FF5A52, #FF8A85)
 *  - 25% Midnight Cobalt Blue (#1554D1, #4E86FF, #8AB4F8)
 *
 * Density presets:
 *  - 'hero': dense, vibrant particles with burst stars, glow halos, and mouse trail
 *  - 'page': atmospheric, elegant drifting dust & gentle glimmers
 *  - 'banner': horizontal drift with occasional flash stars
 */
export default function SparkleCanvas({
  density = 'page',
  interactive = true,
  className = ''
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Color palette distribution
    const colors = [
      // Creams / Gold (45%)
      { r: 244, g: 235, b: 221, weight: 0.25 },
      { r: 255, g: 230, b: 181, weight: 0.15 },
      { r: 255, g: 255, b: 255, weight: 0.05 },
      // Reds (30%)
      { r: 241, g: 43,  b: 37,  weight: 0.18 },
      { r: 255, g: 90,  b: 82,  weight: 0.08 },
      { r: 255, g: 150, b: 140, weight: 0.04 },
      // Blues (25%)
      { r: 21,  g: 84,  b: 209, weight: 0.14 },
      { r: 78,  g: 134, b: 255, weight: 0.07 },
      { r: 138, g: 180, b: 248, weight: 0.04 },
    ];

    function pickColor() {
      const rand = Math.random();
      let acc = 0;
      for (const c of colors) {
        acc += c.weight;
        if (rand <= acc) return c;
      }
      return colors[0];
    }

    const counts = {
      hero: Math.min(105, Math.floor((width * height) / 9500)),
      page: Math.min(55,  Math.floor((width * height) / 18000)),
      banner: Math.min(40, Math.floor((width * height) / 14000)),
    };
    const count = Math.max(22, counts[density] || 45);

    class Sparkle {
      constructor(randomY = true) {
        this.reset(randomY);
      }

      reset(randomY = false) {
        this.x = Math.random() * width;
        this.y = randomY ? Math.random() * height : -15;
        this.radius = Math.random() < 0.2 ? 2.2 + Math.random() * 1.8 : 0.8 + Math.random() * 1.4;
        this.color = pickColor();
        this.speedY = 0.35 + Math.random() * 0.85;
        this.speedX = (Math.random() - 0.5) * 0.45;
        this.twinkleSpeed = 0.02 + Math.random() * 0.04;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.maxAlpha = 0.45 + Math.random() * 0.5;
        this.isStar = Math.random() < (density === 'hero' ? 0.32 : 0.18);
        this.spikes = Math.random() < 0.5 ? 4 : 6;
        this.rotation = Math.random() * Math.PI;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.twinklePhase * 0.6) * 0.2;
        this.twinklePhase += this.twinkleSpeed;
        this.rotation += this.rotSpeed;

        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw(context) {
        const twinkle = (Math.sin(this.twinklePhase) + 1) / 2;
        const alpha = Math.max(0.08, twinkle * this.maxAlpha);
        const { r, g, b } = this.color;

        context.save();
        context.translate(this.x, this.y);

        if (this.isStar && twinkle > 0.4) {
          // Draw 4-point light star / glint
          context.rotate(this.rotation);
          const starLen = this.radius * (2.8 + twinkle * 3.5);
          const grad = context.createRadialGradient(0, 0, 0, 0, 0, starLen);
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          grad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`);
          grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          // Cross sparkle
          context.fillStyle = grad;
          context.beginPath();
          context.ellipse(0, 0, starLen, this.radius * 0.55, 0, 0, Math.PI * 2);
          context.fill();
          context.beginPath();
          context.ellipse(0, 0, this.radius * 0.55, starLen, 0, 0, Math.PI * 2);
          context.fill();

          // Core point
          context.beginPath();
          context.arc(0, 0, this.radius * 0.7, 0, Math.PI * 2);
          context.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.3)})`;
          context.fill();
        } else {
          // Draw soft glowing orb
          const glowRadius = this.radius * 2.8;
          const radial = context.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
          radial.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
          radial.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${alpha * 0.7})`);
          radial.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          context.fillStyle = radial;
          context.beginPath();
          context.arc(0, 0, glowRadius, 0, Math.PI * 2);
          context.fill();
        }

        context.restore();
      }
    }

    const sparkles = Array.from({ length: count }, () => new Sparkle(true));

    // Optional mouse interaction: extra spark particles on mouse movement
    const mouseParticles = [];
    const handleMouseMove = (e) => {
      if (!interactive || density !== 'hero') return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (mx < 0 || mx > width || my < 0 || my > height) return;

      if (Math.random() < 0.45 && mouseParticles.length < 25) {
        const c = pickColor();
        mouseParticles.push({
          x: mx + (Math.random() - 0.5) * 20,
          y: my + (Math.random() - 0.5) * 20,
          radius: 1.2 + Math.random() * 2.2,
          color: c,
          alpha: 0.9,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -0.4 - Math.random() * 1.2,
          life: 30 + Math.random() * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient sparkles
      for (let i = 0; i < sparkles.length; i++) {
        sparkles[i].update();
        sparkles[i].draw(ctx);
      }

      // Render interactive mouse sparkles
      for (let i = mouseParticles.length - 1; i >= 0; i--) {
        const p = mouseParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;
        p.life -= 1;

        if (p.life <= 0 || p.alpha <= 0) {
          mouseParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    />
  );
}

