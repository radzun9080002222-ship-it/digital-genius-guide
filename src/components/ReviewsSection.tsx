import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Александр К.",
    role: "Предприниматель, Москва",
    text: "За один час получил больше пользы, чем за месяц самостоятельного изучения. Теперь ИИ помогает мне с рутиной каждый день. Очень рекомендую!",
    rating: 5,
  },
  {
    name: "Мария С.",
    role: "Маркетолог, Санкт-Петербург",
    text: "Отличное обучение! Денис объяснил всё простым языком и показал реальные примеры. PRO-подписка в подарок — огромный бонус.",
    rating: 5,
  },
  {
    name: "Игорь В.",
    role: "Руководитель отдела, Краснодар",
    text: "Обучили всю нашу команду за пару дней. Производительность выросла в разы. Отдельное спасибо за терпение и профессионализм!",
    rating: 5,
  },
  {
    name: "Анна П.",
    role: "Копирайтер, Сочи",
    text: "Думала, ИИ — это сложно. Оказалось — очень просто, когда объясняют по-человечески. Теперь пишу тексты в 3 раза быстрее.",
    rating: 5,
  },
  {
    name: "Дмитрий Л.",
    role: "Дизайнер, Екатеринбург",
    text: "Научился генерировать идеи и референсы с помощью ИИ. Клиенты довольны, я экономлю время. Спасибо за практичный подход!",
    rating: 5,
  },
  {
    name: "Ольга М.",
    role: "HR-специалист, Новосибирск",
    text: "Прекрасный преподаватель! Всё чётко, по делу и с примерами из реальной практики. Теперь использую ИИ для подбора персонала.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы <span className="text-gradient">учеников</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Что говорят те, кто уже прошёл обучение
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              variant="glass"
              className="hover:border-primary/30 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
