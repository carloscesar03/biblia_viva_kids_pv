import { Sparkles, CheckCircle, PlayCircle, Star, Trophy, Volume2 } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm tracking-wider uppercase mb-4">
            A Solução
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Tecnologia a Favor de Deus
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
            Conheça o <span className="text-amber-500 font-bold">Bíblia Viva Kids</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative">
              <div className="absolute -top-4 -left-4 bg-amber-400 p-3 rounded-2xl shadow-lg transform -rotate-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                Um mini-app bíblico gamificado que usa a mesma lógica dos joguinhos — <span className="font-bold text-slate-900">mas para ensinar histórias da Bíblia que transformam o coração da criança.</span>
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Seu filho acessa através de um link secreto direto no navegador.",
                  "Não precisa baixar nada.",
                  "Não pesa no celular.",
                  "E funciona como um desafio de 7 dias."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Image Placeholder */}
            <div className="bg-slate-200 rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src="https://i.postimg.cc/RFqwfX9d/secao_tecnologia_com_deus.webp" 
                alt="Tecnologia a Favor de Deus" 
                className="w-full h-auto object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-4 sm:-bottom-12 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce z-10">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Trophy className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Desafio de 7 Dias</p>
                <p className="text-xs text-slate-500">Transformação real</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
              Todos os dias ele entra e encontra:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PlayCircle, title: "uma história bíblica curta e ilustrada", color: "text-blue-400" },
                { icon: Star, title: "um quiz interativo", color: "text-amber-400" },
                { icon: Volume2, title: "sons mágicos de acerto e erro", color: "text-emerald-400" },
                { icon: Trophy, title: "uma missão prática para viver no mundo real", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl text-center hover:bg-slate-800 transition-colors">
                  <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.color}`} />
                  <p className="font-medium text-slate-200">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-slate-400 mb-2">Tudo isso em apenas 15 minutos por dia.</p>
              <p className="text-2xl font-bold text-white">
                O resultado? <span className="text-amber-400">A criança começa a enxergar a Bíblia como algo vivo, divertido e próximo da realidade dela.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
