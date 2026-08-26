import React, { useEffect, useRef, useState } from 'react';

const CanvasParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        setCanvasSize();

        let mouse = { x: null, y: null, radius: 150 };
        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let particlesArray = [];
        const numberOfParticles = Math.min(Math.floor(window.innerWidth / 20), 80);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
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
                        const directionX = forceDirectionX * force * 5;
                        const directionY = forceDirectionY * force * 5;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                const isDark = document.documentElement.classList.contains('dark');
                ctx.fillStyle = isDark ? 'rgba(34, 211, 238, 0.5)' : 'rgba(99, 102, 241, 0.5)';
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
        }
        init();

        const connect = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const lineColor = isDark ? '34, 211, 238' : '99, 102, 241';
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 120) {
                        let opacityValue = 1 - (distance / 120);
                        ctx.strokeStyle = `rgba(${lineColor}, ${opacityValue * 0.4})`;
                        ctx.lineWidth = 1;
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
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        const handleResize = () => {
            setCanvasSize();
            init();
        };

        window.addEventListener('resize', handleResize);

        // Add listener for theme change
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = () => { init() };
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
