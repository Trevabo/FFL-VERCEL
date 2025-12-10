import { Link } from 'react-router-dom';
import { Mail, Twitter, Heart, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">FFL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Fast Fight League</span>
                <span className="text-sm text-muted-foreground">Bot de Discord</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              O melhor bot de coleção de cartas de jogadores profissionais de League of Legends. 
              Colecione, troque e compita com milhares de jogadores!
            </p>
          </div>

          {/* Atalhos */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Atalhos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/comandos" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Comandos
                </Link>
              </li>
              <li>
                <Link to="/apoiadores" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Apoiadores
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1389341948149497886&permissions=1126881307388944&integration_type=0&scope=bot+applications.commands" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Adicionar Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/FastFightLeague" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <span>Twitter / X</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:fastfightleague@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/email"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/email:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">fastfightleague@gmail.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links úteis e informações legais */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/termos-servico" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Shield className="w-3 h-3" />
                Termos de Serviço
              </Link>
              <Link 
                to="/politica-privacidade" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Shield className="w-3 h-3" />
                Política de Privacidade
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Bot Online</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 my-8" />

        {/* Copyright e informações */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fast Fight League. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Discord Bot ID: 1389341948149497886
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pela comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
