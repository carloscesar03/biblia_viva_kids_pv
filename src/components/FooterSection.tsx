import { Heart, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t-8 border-emerald-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Um Convite Simples Para a Sua Família
        </h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 sm:p-12 mb-12">
          <p className="text-2xl font-serif italic text-amber-400 mb-8">
            “Ensina a criança no caminho em que deve andar…”
          </p>
          <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-8">
            Provérbios 22:6
          </p>
          
          <div className="space-y-6 text-lg text-slate-300">
            <p>Mas sabemos que educar um filho no mundo digital de hoje não é fácil.</p>
            <p className="font-medium text-white">O Bíblia Viva Kids não substitui os pais.</p>
            <p>Ele apenas cria uma ponte moderna entre a tecnologia e a Palavra de Deus.</p>
            <p>Um pequeno momento diário.</p>
            <p className="text-xl font-bold text-amber-400">Que pode plantar sementes espirituais para a vida inteira.</p>
          </div>
        </div>

        <div className="mb-16">
          <a 
            href="https://payfast.greenn.com.br/redirect/270668" 
            className="inline-block w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl py-5 px-10 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 mb-5"
          >
            Quero Começar Hoje
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs font-medium text-slate-400">
            <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5"/> Compra Segura</span>
            <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5"/> Satisfação Garantida</span>
            <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5"/> Privacidade Protegida</span>
          </div>

          <p className="text-lg text-slate-400 font-medium">Comece o desafio hoje.</p>
          <p className="text-lg text-slate-300 mt-2">
            E veja o que acontece quando a tecnologia passa a trabalhar a favor da fé dentro da sua casa.
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center justify-center">
          <div className="flex items-center text-slate-500 text-sm mb-4">
            Feito com <Heart className="w-4 h-4 text-rose-500 mx-1 fill-current" /> para famílias cristãs
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Bíblia Viva Kids. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
