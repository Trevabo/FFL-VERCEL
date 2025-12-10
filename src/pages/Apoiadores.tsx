import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, Crown, Zap, Gift, ExternalLink } from 'lucide-react';
const tiers = [
  {
    name: 'Apoiador Esmeralda',
    icon: Heart,
    price: 'R$ 4,99/mês',
    color: 'text-green-400',
    borderColor: 'border-green-400/30',
    benefits: ['Cargo de acordo com o seu apoiador no discord oficial.', 'Emote mensal.', 'Votação em cosméticos.'],
    mercadopagoLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=d13e08943a07423789a80e93b94f37f8'
  },
  {
    name: 'Apoiador Diamante',
    icon: Star,
    price: 'R$ 14,99/mês',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    benefits: ['Todos os benefícios anteriores.', '+4 Stack de drops.', 'Banner exclusivo mensal.'],
    mercadopagoLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=3115c3973ade4d11b6fbda10372e5498'
  },
  {
    name: 'Apoiador Ametista',
    icon: Crown,
    price: 'R$ 24,99/mês',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    benefits: ['Todos os benefícios anteriores.', 'Criação de 1 torneio personalizado por dia.', 'Aumento de ganho de lingotes por drops (1-5).'],
    mercadopagoLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=ded3a7cace6a401391b3cca1bb97c923'
  }
];
export default function Apoiadores() {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Apoie o FFL</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Torne-se um{' '}
              <span className="text-gradient-primary">Apoiador</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ajude a manter o FFL funcionando e ganhe benefícios exclusivos!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }}>
                <Card variant="glass" className={`h-full hover:border-primary/40 ${tier.borderColor}`}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <tier.icon className={`w-8 h-8 ${tier.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-display">{tier.name}</h3>
                      <p className={`text-3xl font-bold mt-2 ${tier.color}`}>{tier.price}</p>
                    </div>
                    
                    <ul className="space-y-3 flex-1 mb-6">
                      {tier.benefits.map((benefit, i) => <li key={i} className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>)}
                    </ul>
                    
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={tier.mercadopagoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 !no-underline !cursor-pointer"
                      >
                        <Gift className="w-5 h-5" />
                        Apoiar Agora
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-center mt-16 space-y-8">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-foreground font-medium mb-2">
                Após apoiar, abra um ticket no Discord!
              </p>
              <p className="text-muted-foreground text-sm">
                Entre em contato conosco pelo Discord para ativar seus benefícios.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground mb-4">
                Prefere fazer uma doação única? 
              </p>
              <Button variant="heroOutline" size="lg">
                <ExternalLink className="w-5 h-5" />
                MercadoPago   
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>;
}
