import { HeartHandshake, MessageCircleHeart, Award } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            O Que Está Escondido Dentro do App
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            (e Que Faz Ele Valer Muito Mais)
          </p>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Embora o acesso custe apenas R$ 17, o conteúdo foi criado para entregar um valor muito maior.
          </p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-rose-100 rounded-full flex items-center justify-center relative">
                <HeartHandshake className="w-16 h-16 text-rose-500 relative z-10" />
                <div className="absolute inset-0 bg-rose-200 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão Prática do Dia</h3>
              <p className="text-lg text-slate-600 mb-4">
                Depois de aprender a história, a criança recebe uma missão simples:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {["ajudar alguém", "praticar obediência", "demonstrar coragem", "fazer um gesto de bondade"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-rose-600 italic">
                Assim, a Bíblia sai da tela… e entra na vida real.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center relative">
                <MessageCircleHeart className="w-16 h-16 text-blue-500 relative z-10" />
                <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Guia Secreto Para os Pais</h3>
              <p className="text-lg text-slate-600 mb-4">
                Dentro do app existem perguntas estratégicas liberadas apenas para os pais. Elas ajudam você a criar conversas profundas com seu filho, por exemplo:
              </p>
              <ul className="flex flex-wrap gap-3 mb-6">
                {["na mesa de jantar", "antes de dormir", "durante um passeio em família"].map((item, i) => (
                  <li key={i} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-blue-600 italic">
                Momentos simples que se tornam conexões espirituais verdadeiras.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center relative">
                <Award className="w-16 h-16 text-amber-500 relative z-10" />
                <div className="absolute inset-0 bg-amber-200 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Certificado de Herói da Fé</h3>
              <p className="text-lg text-slate-600 mb-4">
                Quando o desafio termina… Seu filho recebe um Certificado de Herói da Fé personalizado com o nome dele.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Algo simples, mas poderoso. Porque a criança sente que completou uma missão importante.
              </p>
              <p className="text-xl font-bold text-amber-600 italic">
                E muitos pais gostam de compartilhar isso no grupo da família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
