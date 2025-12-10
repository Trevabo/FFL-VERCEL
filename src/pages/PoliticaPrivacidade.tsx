import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticaPrivacidade() {
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
          <h1 className="text-4xl font-bold text-primary mb-8 font-display">Política de Privacidade do Fast Fight League (FFL)</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introdução e Aceitação</h2>
            <p>
              O Fast Fight League é um bot de Discord de gerenciamento de ligas e cartas. Ao adicionar o Bot a um servidor ou interagir com ele, você concorda com a coleta e o uso de suas informações de acordo com esta Política.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Informações Coletadas</h2>
            <p>Coletamos as seguintes informações essenciais para a operação do Bot:</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Identificadores do Discord:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ID de Usuário (User ID):</strong> Seu identificador exclusivo no Discord. Essencial para salvar o progresso do jogo.</li>
              <li><strong>ID de Servidor (Guild ID):</strong> O identificador do servidor onde você joga. Essencial para o gerenciamento de torneios e placares.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dados de Jogo do FFL:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inventário de cartas (IDs únicos, atributos, upgrades).</li>
              <li>Saldos de moedas (Dolions e Lingotes).</li>
              <li>Estatísticas de jogo (vitórias, derrotas, elo, histórico de drops, etc.).</li>
              <li>Configurações de Lineup e cosméticos equipados.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Como Usamos Suas Informações</h2>
            <p>Seus dados são usados exclusivamente para os seguintes propósitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Operação do Serviço:</strong> Salvar, manter e sincronizar seu progresso no jogo FFL.</li>
              <li><strong>Fornecimento de Funcionalidade:</strong> Processar comandos, realizar simulações de partidas e exibir dados de inventário e perfis.</li>
              <li><strong>Comunicação:</strong> Envio de mensagens diretas transacionais (ex: confirmações de troca, lembretes).</li>
              <li><strong>Melhoria do Serviço:</strong> Análise interna de uso para melhorar a jogabilidade e as funcionalidades do Bot.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Nós não vendemos, alugamos ou trocamos seus dados pessoais. Seus dados de jogo (como estatísticas e inventário público de cartas) podem ser exibidos publicamente dentro dos servidores onde o Bot está presente, conforme as funcionalidades padrão do jogo.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Idade Mínima</h2>
            <p>
              O FFL não se destina a menores de 13 anos. Se você for menor de 13 anos, não use o Bot. Se tomarmos conhecimento de que coletamos informações pessoais de um menor de 13 anos sem verificação do consentimento dos pais, tomaremos medidas para remover essas informações.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Exclusão e Retenção de Dados</h2>
            <p>
              Você pode solicitar a exclusão de todos os seus dados do FFL entrando em contato com o desenvolvedor através do e-mail de contato listado abaixo. Retemos seus dados pelo tempo necessário para fornecer o serviço e para cumprir obrigações legais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contato</h2>
            <p>
              Para quaisquer perguntas sobre esta Política de Privacidade ou para solicitar a exclusão de dados, entre em contato através do canal de suporte no servidor oficial do FFL.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
