import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Care sunt cele mai importante atracții turistice din Târgu Neamț?',
      answer: 'Principalele atracții includ Cetatea Neamțului, Casa Memorială Ion Creangă din Humulești, Mănăstirea Neamț, Mănăstirea Agapia, Mănăstirea Văratec și Muzeul de Istorie și Etnografie. Fiecare obiectiv are o importanță istorică și culturală deosebită.',
    },
    {
      question: 'Care este cel mai bun moment pentru a vizita Târgu Neamț?',
      answer: 'Târgu Neamț poate fi vizitat în orice anotimp. Primăvara și toamna oferă temperaturi plăcute și peisaje spectaculoase. Vara este ideală pentru drumeții în natură, iar iarna oferă un farmec special cu peisaje de poveste.',
    },
    {
      question: 'Cum pot ajunge la Târgu Neamț?',
      answer: 'Târgu Neamț este accesibil cu mașina pe DN15C din Piatra-Neamț (40 km) sau DN28 din Iași (90 km). Cu trenul, cea mai apropiată gară este în Roman (30 km), de unde se poate continua cu autobuzul sau taxiul.',
    },
    {
      question: 'Cât costă vizitarea atracțiilor turistice?',
      answer: 'Cetatea Neamțului: 10 Lei adulți, Casa Creangă: 8 Lei adulți, Muzeul de Istorie: 6 Lei adulți. Mănăstirile au intrare gratuită. Există și bilete combinate cu reduceri pentru vizitarea mai multor obiective.',
    },
    {
      question: 'Există locuri de parcare în Târgu Neamț?',
      answer: 'Da, există parcări gratuite în centrul orașului și lângă principalele atracții turistice. Parcarea la Cetatea Neamțului este disponibilă în zona de jos a dealului, cu acces pietonal până la cetate.',
    },
    {
      question: 'Ce evenimente culturale au loc în Târgu Neamț?',
      answer: 'Printre cele mai importante evenimente se numără Ziua Cetății Neamțului (august), Festivalul Ion Creangă, Târgul tradițional de la Neamț, și Festivalul de Datini și Obiceiuri de Iarnă. Verificați calendarul evenimentelor pentru date exacte.',
    },
    {
      question: 'Sunt potrivite atracțiile pentru copii?',
      answer: 'Da, majoritatea atracțiilor sunt potrivite pentru familii cu copii. Cetatea Neamțului și Casa Creangă sunt deosebit de atractive pentru copii, iar muzeul organizează adesea activități educative.',
    },
    {
      question: 'Ce activități outdoor pot face în zona Târgu Neamț?',
      answer: 'Zona oferă multe oportunități pentru drumeții, ciclism, fotografie de natură și observarea faunei. Rezervația naturală Codrii de Aramă și zonele înconjurătoare sunt perfecte pentru iubitorii de natură.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-nature">
            Întrebări Frecvente
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre Târgu Neamț
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-medium hover:shadow-heavy transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
