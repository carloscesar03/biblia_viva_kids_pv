import { CheckCircle2, Smartphone, ShieldCheck, Lock } from "lucide-react";

export default function OfferSection() {
  const deliverables = [
    "Mini app Bíblia Viva Kids",
    "Mini historinhas",
    "Lições do dia",
    "Quiz interativo",
    "Missões práticas",
    "Certificado ao final dos 7 dias",
    "Garantia de 7 dias",
    "Acesso vitalício",
    "Atualizações gratuitas"
  ];

  return (
    <section id="oferta" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            A Oferta Especial de Hoje
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Vamos ser sinceros por um momento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm mb-12">
          <p className="text-lg text-slate-700 mb-8 text-center font-medium">Hoje em dia:</p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <span className="text-lg font-medium text-slate-700">Um lanche simples no McDonald's custa</span>
              <span className="text-2xl font-bold text-red-500 line-through">R$ 40</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <span className="text-lg font-medium text-slate-700">Um brinquedo que quebra no mesmo dia custa</span>
              <span className="text-2xl font-bold text-red-500 line-through">R$ 80</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-600 mb-4">
              O Bíblia Viva Kids poderia facilmente custar <span className="font-bold text-slate-900">R$ 47 ou mais.</span>
            </p>
            <p className="text-2xl font-bold text-emerald-600">
              Mas decidimos fazer diferente.
            </p>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Por R$ 17,00, você não está comprando apenas um app. Você está comprando a tranquilidade de saber que seu filho está consumindo um conteúdo que edifica e protege.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">Tudo o que você vai receber hoje:</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mockup Column */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-full order-1">
                <img 
                  src="https://i.postimg.cc/fLkYXBZ5/mockup_head_biblia_viva_kids.webp" 
                  alt="Mockup da Oferta Bíblia Viva Kids" 
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Column */}
              <div className="order-2">
                <ul className="space-y-4 mb-10">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-center text-lg font-medium text-teal-50">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-8">
                  <p className="text-xl mb-2 font-medium">Acesso vitalício por apenas</p>
                  <div className="flex justify-center items-baseline mb-8">
                    <span className="text-3xl font-bold mr-2">R$</span>
                    <span className="text-7xl font-black tracking-tighter">17</span>
                    <span className="text-3xl font-bold ml-2">,00</span>
                  </div>
                  <a 
                    href="https://payfast.greenn.com.br/u8v74a5" 
                    className="block w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xl py-4 px-8 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all transform hover:scale-105 mb-5"
                  >
                    Garantir Oferta Especial
                  </a>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs font-medium text-teal-100/80">
                    <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5"/> Compra Segura</span>
                    <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5"/> Satisfação Garantida</span>
                    <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5"/> Privacidade Protegida</span>
                  </div>
                  
                  <div className="bg-teal-900/50 rounded-2xl p-6 border border-teal-500/30 text-left">
                    <h4 className="font-bold text-amber-400 mb-2 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Garantia Risco Zero (7 Dias)
                    </h4>
                    <p className="text-sm text-teal-100">
                      Se você não vir os olhinhos do seu filho brilharem ao aprender sobre Jesus, ou se ele simplesmente não gostar do formato, nós devolvemos seus R$ 17,00. Sem perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
