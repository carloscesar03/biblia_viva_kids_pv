import { HelpCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Preciso baixar algum aplicativo pesado?",
      answer: "Não. O acesso acontece através de um link leve que abre direto no navegador do celular. Nada é instalado."
    },
    {
      question: "Qual a idade recomendada?",
      answer: "O conteúdo foi pensado para crianças de 4 a 10 anos. Os menores podem jogar com a ajuda dos pais. Os maiores conseguem ler e interagir sozinhos."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Assim que o pagamento é confirmado, você recebe o link secreto por e-mail ou WhatsApp. O acesso é imediato."
    },
    {
      question: "Funciona no iPhone e Android?",
      answer: "Sim. Qualquer celular, tablet ou computador com internet consegue abrir o mini-app."
    }
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start">
                <span className="text-blue-500 mr-3">Q.</span>
                {faq.question}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed flex items-start">
                <span className="text-emerald-500 font-bold mr-3">R.</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
