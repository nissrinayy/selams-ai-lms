import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Play, 
  FileText, 
  Link as LinkIcon, 
  CheckCircle,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function CourseDetail() {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const modules = [
    {
      title: "Getting Started",
      lessons: [
        { title: "Introduction to React", type: "video", completed: true },
        { title: "Setting Up Development Environment", type: "document", completed: true },
        { title: "Your First Component", type: "video", completed: false },
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        { title: "JSX and Components", type: "document", completed: false },
        { title: "Props and State", type: "video", completed: false },
        { title: "Practice Exercise", type: "assignment", completed: false },
      ]
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="h-4 w-4" />;
      case "document": return <FileText className="h-4 w-4" />;
      case "assignment": return <BookOpen className="h-4 w-4" />;
      default: return <LinkIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <h1 className="text-4xl font-bold text-foreground">
                Introduction to React & TypeScript
              </h1>
              <p className="text-muted-foreground max-w-3xl">
                Learn modern web development with React 18 and TypeScript from scratch. 
                Build real-world projects and master the fundamentals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-primary text-white">SJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">Dr. Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Senior Developer & Instructor</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Course Content */}
          <div className="lg:col-span-3">
            <Card className="sticky top-24">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-sm text-muted-foreground mb-4">COURSE CONTENT</h3>
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-between hover:bg-accent"
                      onClick={() => toggleModule(moduleIndex)}
                    >
                      <span className="font-medium text-sm">{module.title}</span>
                      {expandedModules.includes(moduleIndex) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                    {expandedModules.includes(moduleIndex) && (
                      <div className="ml-4 space-y-1">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <Button
                            key={lessonIndex}
                            variant="ghost"
                            className="w-full justify-start text-xs hover:bg-accent"
                          >
                            <span className="mr-2">{getIcon(lesson.type)}</span>
                            <span className="flex-1 text-left truncate">{lesson.title}</span>
                            {lesson.completed && (
                              <CheckCircle className="h-3 w-3 text-success" />
                            )}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Button size="lg" className="h-16 w-16 rounded-full">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Introduction to React</h2>
                  <p className="text-muted-foreground">
                    In this lesson, you'll learn the fundamentals of React including components, 
                    JSX, and the virtual DOM. We'll start with a simple "Hello World" example 
                    and gradually build up to more complex concepts.
                  </p>

                  <div className="pt-4 border-t border-border">
                    <Button size="lg" className="w-full">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Tandai sebagai Selesai
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Progress & AI */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.68)}`}
                        className="text-primary"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">68%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Course Progress</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-semibold">12 / 18 lessons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time spent</span>
                    <span className="font-semibold">8.2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant Card */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
                  <h3 className="font-semibold">AI Assistant</h3>
                  <Badge variant="secondary" className="ml-auto">Beta</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ada yang bisa saya bantu tentang materi ini?
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    💡 Jelaskan konsep ini
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📝 Buat contoh soal
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📚 Ringkas materi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
