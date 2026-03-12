import { HeartHandshake, Clock, Smartphone, Gamepad2, Zap, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Nós sabemos como a rotina da sua família é corrida.
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Você trabalha o dia todo, chega cansado e, muitas vezes, a tela é a única saída para ter 10 minutos de paz.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm mb-12">
          <p className="text-lg text-slate-700 mb-8 text-center font-medium">
            E não há motivo para se sentir culpado por isso. A mente das crianças de hoje está acostumada com:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Clock, text: "vídeos rápidos", color: "text-red-500", bg: "bg-red-100" },
              { icon: Zap, text: "sons chamativos", color: "text-amber-500", bg: "bg-amber-100" },
              { icon: Gamepad2, text: "recompensas instantâneas", color: "text-blue-500", bg: "bg-blue-100" },
              { icon: Smartphone, text: "joguinhos viciantes", color: "text-purple-500", bg: "bg-purple-100" }
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} mr-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-800">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-600 text-center">
            A questão não é proibir as telas, mas sim <strong>o que</strong> eles estão consumindo nelas.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-10 h-10 text-emerald-500" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 mb-4">
                E se esse tempo de tela fosse <span className="text-emerald-500">seguro e educativo?</span>
              </p>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Sem anúncios surpresas ou conteúdos impróprios.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Plantando valores eternos no coração do seu filho enquanto ele se diverte.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center mt-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>
            <h3 className="text-2xl font-bold mb-4">A verdade que liberta:</h3>
            <p className="text-xl text-slate-300 mb-6">
              Você não precisa lutar contra a tecnologia.
            </p>
            <p className="text-2xl font-extrabold text-amber-400 mb-10">
              Você só precisa dar a eles a ferramenta certa para que a tela trabalhe a seu favor.
            </p>
            
            <div className="max-w-xl mx-auto">
              <a 
                href="https://payfast.greenn.com.br/u8v74a5" 
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 mb-5"
              >
                Quero Proteger Meu Filho
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
                <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5"/> Compra Segura</span>
                <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5"/> Satisfação Garantida</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5"/> Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
