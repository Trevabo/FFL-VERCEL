import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/Logo-02.jpg';

const navLinks = [
  { name: 'Início', href: '/', isRoute: true },
  { name: 'Funcionalidades', href: '/#funcionalidades', isRoute: false },
  { name: 'Comandos', href: '/comandos', isRoute: true },
  { name: 'Apoiadores', href: '/apoiadores', isRoute: true },
  { name: 'Comunidade', href: '/#comunidade', isRoute: false },
  { 
    name: 'Votar', 
    href: 'https://top.gg/bot/1389341948149497886/vote', 
    isRoute: false,
    external: true,
    icon: Vote 
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={logo}
                alt="FFL Logo" 
                className="w-10 h-10 object-contain rounded-full transition-transform group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none">FFL</span>
              <span className="text-xs text-muted-foreground">Fast Fight League</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium hover:scale-105"
                  >
                    {link.name}
                  </Link>
                );
              } else {
                // Para links externos (como Votar)
                if (link.external) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium hover:scale-105 group/vote"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover/vote:text-yellow-500" />}
                      {link.name}
                    </a>
                  );
                } else {
                  // Para âncoras internas
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium hover:scale-105"
                    >
                      {link.name}
                    </a>
                  );
                }
              }
            })}
            <Button variant="hero" size="default" asChild>
              <a href="https://discord.com/oauth2/authorize?client_id=1389341948149497886&permissions=1126881307388944&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
                Adicionar Bot
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-primary/20"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => {
                  if (link.isRoute) {
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-primary/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.name}
                      </Link>
                    );
                  } else {
                    if (link.external) {
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-primary/5"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.icon && <link.icon className="w-4 h-4" />}
                          {link.name}
                          <span className="text-xs bg-yellow-500/20 text-yellow-600 px-2 py-1 rounded-full">Votar</span>
                        </a>
                      );
                    } else {
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-primary/5"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      );
                    }
                  }
                })}
                <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                  <a href="https://discord.com/oauth2/authorize?client_id=1389341948149497886&permissions=1126881307388944&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Adicionar Bot
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
