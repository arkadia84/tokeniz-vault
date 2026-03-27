import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a US address?",
    a: "No. Tokeniz provides your registered agent service, so you never need a physical US address to form or maintain your entity. Your registered agent address is used for all official correspondence.",
  },
  {
    q: "What is a Series LLC and why does it matter?",
    a: "A Series LLC lets you operate multiple ventures or hold multiple asset categories under one master structure, with legal separation between each cell. It's the most flexible US entity type — preferred by founders who plan to scale, protect IP, or hold assets across multiple businesses.",
  },
  {
    q: "How is this different from Stripe Atlas or Doola?",
    a: "Stripe Atlas only serves US-connected founders and forms Delaware C-Corps with no stablecoin support. Doola has weak financial account integration. Tokeniz is purpose-built for non-US founders who need a flexible entity structure and real global financial infrastructure from day one.",
  },
  {
    q: "I already have a company. Can I still use Tokeniz?",
    a: "Yes — and this is one of our most common use cases. If your entity is already formed but your financial infrastructure is outdated, you can access our account-only setup and plug into the full platform. Setup starts from $197.",
  },
  {
    q: "Can I accept stablecoin payments?",
    a: "Yes. Your business account supports USDC and USDT deposits. Whether your clients pay in stablecoins or traditional currencies, you can receive both through the same account dashboard.",
  },
  {
    q: "Which countries are excluded?",
    a: "Due to regulatory requirements, business account services are not available to residents of the USA, UK, Singapore, China, Russia, Iran, North Korea, or Myanmar. Entity formation may still be available in some of these regions — contact us for your specific situation.",
  },
  {
    q: "How long does it take?",
    a: "Entity registration typically takes 1–3 business days. Your business account opens within minutes of KYB approval. Most founders are fully operational within one week of starting.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-24 px-5">
      <div className="max-w-[800px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">FAQ</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="fade-up border border-border rounded-[20px] overflow-hidden">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="px-7 py-6 text-base font-bold hover:no-underline hover:bg-card transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-7 pb-6 text-sm text-muted-foreground leading-[1.75]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
