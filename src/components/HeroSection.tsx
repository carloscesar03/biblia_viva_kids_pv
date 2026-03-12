import { CheckCircle2, Smartphone, Zap, Heart, Lock, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const MockupImage = () => (
    <div className="relative mx-auto w-full max-w-md lg:max-w-full">
      <img 
        src="https://i.postimg.cc/fLkYXBZ5/mockup_head_biblia_viva_kids.webp" 
        alt="Mockup Bíblia Viva Kids" 
        className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      
      {/* Floating elements for visual interest */}
      <div className="absolute -top-6 -right-2 sm:-top-10 sm:-right-6 bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-full shadow-lg transform rotate-6 animate-pulse z-10">
        Apenas R$ 17!
      </div>
    </div>
  );

  return (
    <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
            Transforme o Tempo de Tela do Seu Filho em <span className="text-amber-400">Tempo com Deus</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed mb-8">
            E se o celular deixasse de ser um problema e se tornasse a ferramenta que ensina princípios eternos, em apenas 15 minutos por dia?
          </p>

          {/* Image visible only on mobile/tablet, right after subheadline */}
          <div className="block lg:hidden mb-10 mt-4">
            <MockupImage />
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-slate-400">
              Um mini-app bíblico gamificado que seu filho acessa direto no navegador. Seguro, educativo e sem anúncios.
            </p>

            <ul className="space-y-4">
              {[
                "Sem brigas para largar o celular.",
                "Histórias que ensinam valores reais.",
                "Acesso imediato, sem complicação."
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg font-medium text-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <p className="text-lg font-semibold text-white mb-6">
                Seu filho clica no link… e começa o desafio.
              </p>
              <a 
                href="https://payfast.greenn.com.br/u8v74a5" 
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105"
              >
                Quero Acesso Imediato
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-xs font-medium text-slate-400">
                <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5"/> Compra Segura</span>
                <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5"/> Satisfação Garantida</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5"/> Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image visible only on desktop */}
        <div className="hidden lg:block">
          <MockupImage />
        </div>
      </div>
    </section>
  );
}
