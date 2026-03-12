import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function JourneySection() {
  const days = [
    { day: 1, name: "Davi e o Gigante", desc: "Coragem para enfrentar o medo do escuro ou os desafios da escola.", color: "bg-red-500" },
    { day: 2, name: "Daniel e os Leões", desc: "Fazer o que é certo, mesmo quando os amiguinhos estão fazendo o errado.", color: "bg-orange-500" },
    { day: 3, name: "A Arca de Noé", desc: "Obediência aos pais, mesmo quando a criança não entende o 'não'.", color: "bg-amber-500" },
    { day: 4, name: "Jonas e o Grande Peixe", desc: "Aprender a pedir desculpas, perdoar e entender as segundas chances.", color: "bg-emerald-500" },
    { day: 5, name: "O Bom Samaritano", desc: "Desenvolver empatia, ajudar o próximo e nunca praticar bullying.", color: "bg-teal-500" },
    { day: 6, name: "A Multiplicação de Pães", desc: "A alegria de dividir os brinquedos e ser generoso com os outros.", color: "bg-blue-500" },
    { day: 7, name: "Zaqueu na Árvore", desc: "Entender que Jesus ama a todos e que sempre podemos mudar para melhor.", color: "bg-indigo-500" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            O Roteiro dos 7 Dias do Desafio
          </h2>
          <p className="text-xl text-slate-300 font-medium">
            Cada dia apresenta uma história curta com um valor que a criança leva para a vida.
          </p>
        </div>

        <div className="space-y-4">
          {days.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-slate-800 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <div className={`${item.color} text-white font-bold text-xl w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                Dia {item.day}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">— {item.name}</h3>
                <p className="text-lg text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-xl mx-auto text-center">
          <a 
            href="https://payfast.greenn.com.br/u8v74a5" 
            className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 mb-5"
          >
            Liberar o Desafio Agora
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5"/> Compra Segura</span>
            <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5"/> Satisfação Garantida</span>
            <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5"/> Privacidade Protegida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
