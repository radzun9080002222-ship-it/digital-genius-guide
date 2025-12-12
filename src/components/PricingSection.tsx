import { Check, Gift, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Персональный урок",
    subtitle: "Для личных целей",
    price: "2 000",
    period: "за урок",
    features: [
      "Индивидуальное занятие 1 час",
      "Разбор ваших задач и целей",
      "Практические навыки работы с ИИ",
      "Годовая PRO-подписка в подарок",
      "Поддержка после урока",
    ],
    icon: Sparkles,
    featured: false,
  },
  {
    name: "Бизнес-обучение",
    subtitle: "Для бизнеса и работы",
    price: "2 500",
    period: "за час",
    features: [
      "Глубокий разбор бизнес-процессов",
      "Автоматизация рутинных задач",
      "Интеграция ИИ в работу",
      "Годовая PRO-подписка в подарок",
      "Персональная поддержка 7 дней",
      "Документация и чек-листы",
    ],
    icon: Gift,
    featured: true,
  },
  {
    name: "Групповое занятие",
    subtitle: "Для команд",
    price: "По запросу",
    period: "",
    features: [
      "Обучение до 10 человек",
      "Адаптация под специфику компании",
      "Практические воркшопы",
      "Материалы для всей команды",
      "Сертификаты участникам",
    ],
    icon: Users,
    featured: false,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Тарифы на <span className="text-gradient">обучение</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите подходящий формат обучения под ваши задачи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.featured ? "featured" : "pricing"}
              className={`relative ${plan.featured ? "scale-105 md:-mt-4" : ""}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-primary-foreground text-sm font-semibold">
                  Популярный выбор
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">₽ {plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
