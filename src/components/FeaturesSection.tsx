import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Boxes, Repeat, Users, Sparkles, Swords, LucideIcon, Gem } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Boxes,
    title: 'Coleção Completa',
    description: 'Mais de 25.000 cartas únicas de jogadores profissionais dos principais campeonatos nacionais e internacionais de LoL.',
    color: 'text-primary',
  },
  {
    icon: Sparkles,
    title: 'Sistema de Drops',
    description: 'Use /drop a cada 30 minutos para escolher 1 dentre 3 cartas aleatórias e monte sua coleção',
    color: 'text-accent',
  },
  {
    icon: Repeat,
    title: 'Trocas entre Jogadores',
    description: 'Negocie com outros colecionadores e complete sua coleção com as cartas que faltam.',
    color: 'text-emerald-400',
  },
  {
    icon: Gem,
    title: 'Raridade e Valor',
    description: 'Cartas com overall mais alto ou com status elevados são mais raras e valiosas.',
    color: 'text-yellow-400',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Milhares de colecionadores ativos compartilhando, trocando e competindo diariamente.',
    color: 'text-pink-400',
  },
  {
    icon: Swords,
    title: 'Campeonato e Ranqueada',
    description: 'Crie lineups com suas cartas e simule partidas ou participe de campeonatos/ranqueadas contra outros jogadores.',
    color: 'text-orange-400',
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Funcionalidades{' '}
            <span className="text-gradient-primary">
              Incríveis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra tudo o que você pode fazer com nosso bot de coleção
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="feature" className="h-full">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
