import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Terminal, HelpCircle, Boxes, Gift, Trophy, Users, Repeat, Star, LucideIcon } from 'lucide-react';

interface Command {
  icon: LucideIcon;
  command: string;
  description: string;
  color: string;
}

const commands: Command[] = [
  {
    icon: Terminal,
    command: '/drop',
    description: 'Receba uma carta aleatória de jogador profissional de LoL. Disponível a cada 30 minutos! Você escolhe 1 entre 3 cartas apresentadas.',
    color: 'text-primary',
  },
  {
    icon: Boxes,
    command: '/colecao',
    description: 'Visualize todas as cartas que você já coletou, organize por raridade, time ou jogador.',
    color: 'text-accent',
  },
  {
    icon: Gift,
    command: '/daily',
    description: 'Resgate sua recompensa diária e ganhe moedas extras para trocar cartas.',
    color: 'text-yellow-400',
  },
  {
    icon: Repeat,
    command: '/trade',
    description: 'Troque cartas com outros jogadores do servidor. Negocie para completar sua coleção!',
    color: 'text-green-400',
  },
  {
    icon: Trophy,
    command: '/ranking',
    description: 'Veja o ranking dos maiores colecionadores do servidor e do mundo.',
    color: 'text-orange-400',
  },
  {
    icon: Users,
    command: '/lineup',
    description: 'Monte sua lineup com suas melhores cartas para competir em torneios e ranqueadas.',
    color: 'text-blue-400',
  },
  {
    icon: Star,
    command: '/favoritos',
    description: 'Marque suas cartas favoritas para acessá-las rapidamente.',
    color: 'text-pink-400',
  },
  {
    icon: HelpCircle,
    command: '/ajuda',
    description: 'Veja todos os comandos disponíveis e aprenda como usar cada funcionalidade do bot.',
    color: 'text-muted-foreground',
  },
];

export default function Comandos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Todos os{' '}
              <span className="text-gradient-primary">Comandos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda todos os comandos disponíveis no FFL e domine o bot
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="glass" className="group hover:border-primary/40">
                    <CardContent className="p-6 flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <cmd.icon className={`w-7 h-7 ${cmd.color}`} />
                      </div>
                      <div className="flex-1">
                        <code className="text-lg font-bold text-primary font-mono bg-primary/10 px-3 py-1 rounded-lg">
                          {cmd.command}
                        </code>
                        <p className="text-muted-foreground mt-3">{cmd.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
