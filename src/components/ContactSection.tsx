import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    ym: any;
  }
}

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdi4U3cDamnf6ehOUtuDyNkxGdAodwGcB0QVGvZIk1hLnxzJQ/formResponse";

const FIELD_NAME = "entry.1199709693";
const FIELD_PHONE = "entry.862579038";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hp) return;

    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, введите имя и телефон",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append(FIELD_NAME, name.trim());
      data.append(FIELD_PHONE, phone.trim());

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      // 🔥 ЦЕЛЬ ЯНДЕКС МЕТРИКИ (КАНОНИЧЕСКИЙ КОД)
      if (window.ym) {
        window.ym(105956501, "reachGoal", "lead_sent");
      }

      toast({
        title: "Заявка отправлена ✅",
        description: "Спасибо! Я скоро свяжусь с вами для обсуждения деталей.",
      });

      setName("");
      setPhone("");
      setHp("");
    } catch {
      toast({
        title: "Не удалось отправить заявку",
        description: "Попробуйте ещё раз или напишите в Telegram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
            <Card variant="featured">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Оставить заявку
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как вас зовут?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  {/* Honeypot */}
                  <div className="hidden">
                    <Input
                      tabIndex={-1}
                      autoComplete="off"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <a
                    href="https://t.me/radzun_da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @radzun_da
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <a
                    href="tel:+79384504330"
                    className="text-primary hover:underline"
                  >
                    +7 938 450-43-30
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
