import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden neural-grid">
      {/* Gradient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Персональное обучение ИИ
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Освойте{" "}
              <span className="text-gradient glow-text">
                искусственный интеллект
              </span>{" "}
              за 1 час
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Персональные уроки по работе с ИИ. Разберём ваши задачи, покажем как автоматизировать рутину и освободить время для важного. 
              <span className="text-primary font-semibold"> + Годовая PRO-подписка на ИИ в подарок!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Записаться на урок
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="https://t.me/radzun_da" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+79384504330" className="hover:text-primary transition-colors">
                  +7 938 450-43-30
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 scale-105" />
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
                <img
                  src={authorPhoto}
                  alt="Эксперт по искусственному интеллекту"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl p-4 shadow-2xl animate-float">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">учеников обучено</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
