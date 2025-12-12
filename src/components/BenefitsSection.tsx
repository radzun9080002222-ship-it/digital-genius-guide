import { Sparkles, Zap, Target, Gift, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Под ваши задачи",
    description: "Индивидуальный подход к вашим целям — будь то работа, бизнес или творчество",
  },
  {
    icon: Clock,
    title: "Быстрый результат",
    description: "За 1 час вы освоите базу и начнёте применять ИИ уже сегодня",
  },
  {
    icon: Zap,
    title: "Практика с первых минут",
    description: "Никакой воды — только конкретные навыки и реальные кейсы",
  },
  {
    icon: Gift,
    title: "PRO-подписка бесплатно",
    description: "Годовая подписка на ИИ-модель в подарок каждому ученику",
  },
  {
    icon: Users,
    title: "Групповые занятия",
    description: "Обучение команд и коллективов по специальным ценам",
  },
  {
    icon: Sparkles,
    title: "Для всех уровней",
    description: "От новичка до продвинутого — программа адаптируется под вас",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают <span className="text-gradient">мои уроки</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Я помогаю людям и бизнесу эффективно использовать возможности искусственного интеллекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="glass"
              className={`group hover:border-primary/50 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
