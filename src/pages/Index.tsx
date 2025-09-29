import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Code2, TrendingUp, Shield, Target, Users, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-semibold text-foreground">Divergent Capital LLC</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Driving Growth Through Strategy, Capital, and Technology
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Creating sustainable value through strategic investment and innovative solutions
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Divergent Capital LLC is a privately held firm focused on creating value through strategic investment, 
            technology solutions, and real estate opportunities. Our approach blends data-driven insights with 
            practical execution to deliver sustainable results for our partners and clients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Our Services</h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Comprehensive solutions designed to drive growth and create lasting value
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Real Estate & Investments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focused on identifying opportunities that generate long-term value through strategic 
                  property investments and portfolio management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Code2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Technology & Software</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing scalable digital solutions and automation to help businesses streamline 
                  operations and accelerate growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Advisory & Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partnering with clients to simplify complex challenges and accelerate outcomes 
                  through strategic planning and execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Integrity & Transparency</h3>
                <p className="text-muted-foreground">
                  Building trust through honest communication and ethical business practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Data-Driven Decisions</h3>
                <p className="text-muted-foreground">
                  Leveraging analytics and market insights to inform every strategic choice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Long-Term Focus</h3>
                <p className="text-muted-foreground">
                  Prioritizing sustainable growth over short-term gains for lasting success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Client Success First</h3>
                <p className="text-muted-foreground">
                  Your goals drive our strategy, ensuring alignment and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Ready to explore opportunities? Contact Divergent Capital LLC today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@divergentcapllc.com" className="text-muted-foreground hover:text-accent transition-colors">
                    info@divergentcapllc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+17705551234" className="text-muted-foreground hover:text-accent transition-colors">
                    (770) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Marietta, Georgia
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              <span className="font-semibold">Divergent Capital LLC</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Divergent Capital LLC. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
