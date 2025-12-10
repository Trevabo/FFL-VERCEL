import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermosServico() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8 font-display">TERMOS DE SERVIÇO</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Este Contrato de Termos de Serviço é celebrado entre SRТIZBOOM e o usuário do bot FASТ FIGHТ LEAGUE do Discord.
            </p>
            <p>
              Ao utilizar o Bot, o Usuário concorda em ficar vinculado aos termos deste Contrato. Caso o Usuário não concorde com os termos deste Contrato, deverá interromper imediatamente o uso do Bot.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Utilização do Bot</h2>
            <p>
              O proprietário do Bot concede ao Usuário uma licença não exclusiva, intransferível e limitada para usar o Bot para fins pessoais ou não comerciais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Uso Proibido</h2>
            <p>
              O Usuário não poderá utilizar o Bot de nenhuma forma que viole as leis, normas ou regulamentos aplicáveis, ou que infrinja os direitos de terceiros. O Usuário não poderá utilizar o Bot para fins comerciais sem o consentimento expresso e por escrito do Proprietário do Bot.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Limitação de Responsabilidade</h2>
            <p>
              O Proprietário do Bot não será responsável por quaisquer danos decorrentes do uso ou da impossibilidade de usar o Bot, incluindo, entre outros, danos por lucros cessantes, perda de dados ou outras perdas intangíveis.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Modificações no Bot</h2>
            <p>
              O Proprietário do Bot poderá modificar ou descontinuar o Bot a qualquer momento, sem aviso prévio. O Usuário concorda que o Proprietário do Bot não será responsabilizado perante o Usuário ou terceiros por qualquer modificação, suspensão ou descontinuação do Bot.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p>
              O Bot e todos os direitos de propriedade intelectual a ele inerentes são e permanecerão propriedade do Proprietário do Bot. O Usuário concorda em não copiar, modificar ou distribuir o Bot ou qualquer parte dele sem o consentimento expresso e por escrito do Proprietário do Bot.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Indenização</h2>
            <p>
              O Usuário concorda em indenizar e isentar o Proprietário do Bot, suas afiliadas e seus respectivos diretores, executivos, funcionários e agentes de quaisquer reclamações, danos, responsabilidades, custos e despesas, incluindo honorários advocatícios razoáveis, decorrentes do uso do Bot pelo Usuário.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Rescisão</h2>
            <p>
              Este Contrato poderá ser rescindido por qualquer uma das partes a qualquer momento e por qualquer motivo. Após a rescisão, o Usuário deverá cessar imediatamente todo o uso do Bot.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Lei Aplicável</h2>
            <p>
              Este Contrato será regido e interpretado de acordo com as leis do Brasil. Qualquer disputa decorrente deste Contrato ou relacionada a ele será resolvida por arbitragem, de acordo com as regras da Câmara de Arbitragem do Mercado (CAM).
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Acordo Integral</h2>
            <p>
              Este Acordo constitui o acordo integral entre as partes e substitui todos os acordos ou declarações anteriores ou contemporâneos, sejam escritos ou verbais, relativos ao Bot.
            </p>

            <p className="mt-8 text-sm">
              Ao utilizar o Bot, o Usuário reconhece que leu este Contrato, o compreende e concorda em ficar vinculado aos seus termos e condições.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
