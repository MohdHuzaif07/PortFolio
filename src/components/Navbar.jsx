import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONTACT', href: '#contact' },
];

const Navbar = ({ scrollProgress }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            // Determine active section
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 backdrop-blur-md ${
                isScrolled ? 'border-b border-[#b4324c]' : 'border-b border-[#2a2523]'
            }`}
            style={{ backgroundColor: 'rgba(10, 9, 8, 0.92)' }}
        >
            {/* Top 2px scroll progress bar */}
            <div
                className="absolute top-0 left-0 h-[2px] transition-all duration-75 pointer-events-none"
                style={{
                    width: `${scrollProgress * 100}%`,
                    backgroundColor: 'var(--maroon-bright)',
                }}
            />

            <div className="editorial-wrap h-[72px] flex items-center justify-between">
                {/* Brand Logo in Silkscreen */}
                <a
                    href="#hero"
                    className="font-silkscreen font-bold text-[15px] tracking-wide transition-colors"
                    style={{
                        color: 'var(--ink)',
                        textShadow: '3px 3px 0 rgba(140, 36, 56, 0.9)',
                    }}
                >
                    MOHAMMED HUZAIFA
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-7">
                    {navItems.map(item => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className="relative text-[10px] font-mono tracking-[0.14em] uppercase transition-colors duration-200 py-1"
                                style={{
                                    color: isActive ? 'var(--maroon-bright)' : 'var(--muted)',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) e.currentTarget.style.color = 'var(--maroon-bright)';
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) e.currentTarget.style.color = 'var(--muted)';
                                }}
                            >
                                {item.label}
                                {isActive && (
                                    <span
                                        className="absolute bottom-0 left-0 right-0 h-[1px]"
                                        style={{ backgroundColor: 'var(--maroon-bright)' }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-[var(--ink)] hover:text-[var(--maroon-bright)] transition-colors"
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {mobileOpen && (
                <div
                    className="md:hidden border-t border-[#2a2523] px-6 py-5 flex flex-col gap-4"
                    style={{ backgroundColor: 'var(--void)' }}
                >
                    {navItems.map(item => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-xs font-mono tracking-[0.14em] uppercase py-2 transition-colors flex items-center justify-between"
                                style={{
                                    color: isActive ? 'var(--maroon-bright)' : 'var(--muted)',
                                }}
                            >
                                <span>{item.label}</span>
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon-bright)]" />}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Navbar;
