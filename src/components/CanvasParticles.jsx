import React, { useEffect, useRef } from 'react';

const CanvasParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        let mouse = { x: null, y: null, radius: 150 };
        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let particlesArray = [];
        const numberOfParticles = Math.min(Math.floor(window.innerWidth / 22), 70);

        // Get palette based on current mode
        const getPalette = () => {
            const isDark = document.documentElement.classList.contains('dark');
            return {
                dot:  isDark ? 'rgba(229, 57, 53, 0.45)'   : 'rgba(255, 197, 27, 0.5)',
                line: isDark ? '229, 57, 53'               : '23, 23, 23',
            };
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.6;
                this.speedY = (Math.random() - 0.5) * 0.6;
            }
            update() {
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 4;
                        this.y -= forceDirectionY * force * 4;
                    }
                }
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw(palette) {
                ctx.fillStyle = palette.dot;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        };
        init();

        const connect = (palette) => {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 110) {
                        let opacityValue = 1 - (distance / 110);
                        ctx.strokeStyle = `rgba(${palette.line}, ${opacityValue * 0.25})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const palette = getPalette();
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw(palette);
            }
            connect(palette);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            setCanvasSize();
            init();
        };
        window.addEventListener('resize', handleResize);

        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = () => { init(); };
        mediaQueryList.addEventListener('change', handleThemeChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mediaQueryList.removeEventListener('change', handleThemeChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default CanvasParticles;
