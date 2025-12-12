import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, введите имя и телефон",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Формируем сообщение для Telegram
    const message = encodeURIComponent(`Новая заявка на обучение ИИ!\n\nИмя: ${name}\nТелефон: ${phone}`);
    const telegramUrl = `https://t.me/radzun_da?text=${message}`;

    // Открываем Telegram с предзаполненным сообщением
    window.open(telegramUrl, "_blank");

    toast({
      title: "Заявка отправляется",
      description: "Telegram откроется в новой вкладке. Нажмите 'Отправить' для завершения заявки.",
    });

    setIsSubmitting(false);
    setName("");
    setPhone("");
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать <span className="text-gradient">обучение</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Оставьте заявку и я свяжусь с вами для обсуждения деталей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card variant="featured" className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Оставить заявку
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Как вас зовут?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="glass" className="hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Telegram</div>
                      <a
                        href="https://t.me/radzun_da"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @radzun_da
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a
                        href="tel:+79384504330"
                        className="text-primary hover:underline"
                      >
                        +7 938 450-43-30
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 rounded-xl bg-gradient-primary text-primary-foreground">
                <div className="text-lg font-bold mb-2">🎁 Бонус каждому ученику</div>
                <p className="opacity-90">
                  Годовая PRO-подписка на ИИ-модель стоимостью 10 000₽ — бесплатно!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
