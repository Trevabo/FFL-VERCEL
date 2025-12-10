import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Terminal, HelpCircle, Boxes, LucideIcon } from 'lucide-react';

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
    description: 'Receba uma carta aleatória de jogador profissional de LoL. Disponível a cada poucas horas!',
    color: 'text-primary',
  },
  {
    icon: Boxes,
    command: '/colecao',
    description: 'Visualize todas as cartas que você já coletou, organize por raridade, time ou jogador.',
    color: 'text-accent',
  },
  {
    icon: HelpCircle,
    command: '/ajuda',
    description: 'Veja todos os comandos disponíveis e aprenda como usar cada funcionalidade do bot.',
    color: 'text-pink-400',
  },
];

export default function CommandsSection() {
  return (
    <section id="comandos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Comandos{' '}
            <span className="text-gradient-primary">
              Principais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece sua jornada com estes comandos essenciais
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
    </section>
  );
}
