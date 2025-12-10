import { Trophy, Github, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary">FFL</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              O melhor bot de coleção de cartas de jogadores profissionais de League of Legends.
              Colecione, troque e compita com milhares de jogadores!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/comandos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Comandos
                </Link>
              </li>
              <li>
                <a href="https://discord.gg/TA7PyKVn7G" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://x.com/FastFightLeague" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 FFL. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link to="/termos-de-servico" className="hover:text-foreground transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/politica-de-privacidade" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}
