import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Brain, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SeLaMS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The Smart Learning Management System with AI
              </p>
            </div>
            
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Platform pembelajaran modern yang didukung AI untuk pengalaman belajar yang 
              lebih personal, efektif, dan menyenangkan.
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/login">Mulai Belajar</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/login">Masuk</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kenapa SeLaMS?</h2>
          <p className="text-muted-foreground text-lg">
            Fitur-fitur unggulan yang membuat belajar jadi lebih mudah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "AI Assistant",
              description: "Asisten AI yang siap membantu menjawab pertanyaan dan menjelaskan materi"
            },
            {
              icon: BookOpen,
              title: "Course Tracking",
              description: "Pantau progress belajar dengan detail dan visualisasi yang jelas"
            },
            {
              icon: Users,
              title: "Interactive Learning",
              description: "Belajar interaktif dengan video, kuis, dan tugas yang menarik"
            },
            {
              icon: Zap,
              title: "Fast & Modern",
              description: "Platform yang cepat, responsif, dan mudah digunakan di semua device"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Siap Untuk Memulai?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan pelajar yang sudah merasakan pengalaman belajar yang lebih baik
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/login">Daftar Sekarang - Gratis!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
