import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Users, Heart, ExternalLink, Shield, Code } from 'lucide-react';

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
              Um bot de Discord para gerenciar suas ligas e torneios de forma rápida e divertida.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links Rápidos</h3>
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

          {/* Links úteis */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contato - ADICIONADO EMAIL AQUI */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                {/* EMAIL DE CONTATO ADICIONADO */}
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
              <li>
                <a 
                  href="https://discord.gg/SEU_CONVITE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/support"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover/support:bg-blue-500/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Suporte</p>
                    <p className="text-sm">Servidor do Discord</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/community"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover/community:bg-green-500/20 transition-colors">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Comunidade</p>
                    <p className="text-sm">Discord Oficial</p>
                  </div>
                </a>
              </li>
            </ul>
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
          
          <div className="flex items-center gap-6">
            {/* Status do bot */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Bot Online</span>
            </div>
            
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pela comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
