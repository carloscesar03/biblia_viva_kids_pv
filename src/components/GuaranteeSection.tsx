import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border-4 border-emerald-500 shadow-2xl relative overflow-hidden">
          {/* Decorative Shield Background */}
          <div className="absolute -right-20 -bottom-20 opacity-5">
            <ShieldCheck className="w-96 h-96 text-emerald-500" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-500 shadow-lg">
                <ShieldCheck className="w-16 h-16 text-emerald-600" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Garantia Blindada de 7 Dias
              </h2>
              <p className="text-xl text-slate-700 font-medium mb-6">
                Você não corre nenhum risco.
              </p>
              
              <p className="text-lg text-slate-600 mb-4">Se dentro de 7 dias:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "seu filho não se interessar",
                  "você achar que não valeu a pena",
                  "ou simplesmente mudar de ideia"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg font-medium text-slate-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-xl font-bold text-emerald-700 mb-2">
                  Devolvemos seus R$ 17.
                </p>
                <p className="text-lg text-emerald-600">
                  Sem perguntas. Sem burocracia. O risco é totalmente nosso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
