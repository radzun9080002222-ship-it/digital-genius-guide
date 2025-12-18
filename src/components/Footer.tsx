import { MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">База Интеллекта</div>
            <p className="text-muted-foreground">
              Персональные уроки по искусственному интеллекту
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/radzun_da"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>@radzun_da</span>
            </a>
            <a
              href="tel:+79384504330"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+7 938 450-43-30</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
