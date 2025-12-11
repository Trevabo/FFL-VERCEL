import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, Award, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, value: '250+', label: 'Membros' },
  { icon: MessageCircle, value: '1K+', label: 'Mensagens/dia' },
  { icon: Award, value: '1.2M+', label: 'Cartas Coletadas' },
  { icon: Sparkles, value: '24/7', label: 'Suporte Ativo' },
];

export default function CommunitySection() {
  return (
    <section id="comunidade" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Main Community Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="gradient" className="overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full mb-4 sm:mb-6"
                  >
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
                    Junte-se à Nossa{' '}
                    <span className="text-gradient-primary">
                      Comunidade
                    </span>
                  </h2>

                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 px-2 sm:px-0 max-w-2xl mx-auto">
                    Conecte-se com milhares de colecionadores, participe de eventos exclusivos,
                    troque cartas e fique por dentro de todas as novidades!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto">
                    <a 
                      href="https://discord.gg/TA7PyKVn7G" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="discord" size="xl" className="w-full sm:w-auto px-8">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Entrar no Discord
                      </Button>
                    </a>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl mb-2 sm:mb-3">
                          <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
