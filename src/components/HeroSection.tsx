import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Trophy, ExternalLink } from 'lucide-react';
import cardTinowns from '@/assets/card-tinowns.png';
import cardChovy from '@/assets/card-chovy.png';
import cardFaker from '@/assets/card-faker.png';

const cards = [
  { image: cardTinowns, alt: 'Card FFL - Tinowns' },
  { image: cardChovy, alt: 'Card FFL - Chovy' },
  { image: cardFaker, alt: 'Card FFL - Faker' },
];

export default function HeroSection() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{
          animationDelay: '2s'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Coleção de Cards • League of Legends</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-display">
              Colecione os{' '}
              <span className="text-gradient">
                Melhores Jogadores
              </span>{' '}
              de LoL
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Monte sua coleção de cartas dos jogadores profissionais mais icônicos de League of Legends.
              Use nosso bot no Discord e comece a colecionar agora!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://discord.com/oauth2/authorize?client_id=1389341948149497886&permissions=1126881307388944&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Adicionar ao Discord
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/comandos">
                  <ExternalLink className="w-5 h-5" />
                  Comandos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                {
                  label: 'Cartas',
                  value: '25K+',
                  icon: Sparkles
                },
                {
                  label: 'Servidores',
                  value: '350+',
                  icon: Users
                },
                {
                  label: 'Colecionadores',
                  value: '600+',
                  icon: Trophy
                }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon className="w-6 h-6 text-primary" />
                    <span className="text-3xl md:text-4xl font-bold text-foreground font-display">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div> {/* Fecha o Left Content */}

          {/* Right Content - Cards Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute animate-float"
                >
                  <img 
                    src={cards[currentCard].image} 
                    alt={cards[currentCard].alt} 
                    className="w-64 h-auto rounded-xl shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Card indicators */}
              <div className="absolute bottom-0 flex gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCard 
                        ? 'bg-primary w-6' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div> {/* Fecha o grid principal */}
      </div> {/* Fecha o container */}
    </section>
  );
}
