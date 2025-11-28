import { StatCard } from "@/components/StatCard";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, CheckCircle, TrendingUp, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const mockCourses = [
  {
    id: "1",
    title: "Introduction to React & TypeScript",
    description: "Learn modern web development with React 18 and TypeScript from scratch",
    progress: 68,
    instructor: "Dr. Sarah Johnson",
    duration: "12 jam",
    enrolled: 1234,
  },
  {
    id: "2",
    title: "Advanced Machine Learning",
    description: "Deep dive into neural networks, deep learning, and AI applications",
    progress: 45,
    instructor: "Prof. Michael Chen",
    duration: "20 jam",
    enrolled: 856,
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description: "Master the principles of user interface and user experience design",
    progress: 82,
    instructor: "Emma Williams",
    duration: "8 jam",
    enrolled: 2341,
  },
  {
    id: "4",
    title: "Data Structures & Algorithms",
    description: "Essential programming concepts for technical interviews and problem solving",
    progress: 23,
    instructor: "Dr. Alex Kumar",
    duration: "15 jam",
    enrolled: 1678,
  },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8 animate-fade-in">
        {/* Greeting Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Halo, <span className="bg-gradient-primary bg-clip-text text-transparent">John</span>! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Siap belajar apa hari ini?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Kursus Aktif"
            value={4}
            icon={BookOpen}
            trend={{ value: "+1 bulan ini", positive: true }}
          />
          <StatCard
            title="Tugas Selesai"
            value={23}
            icon={CheckCircle}
            trend={{ value: "+5 minggu ini", positive: true }}
          />
          <StatCard
            title="Progress Rata-rata"
            value="54%"
            icon={TrendingUp}
            trend={{ value: "+12% dari bulan lalu", positive: true }}
          />
          <StatCard
            title="Streak"
            value="7 hari"
            icon={Flame}
            trend={{ value: "Rekor terbaik!", positive: true }}
          />
        </div>

        {/* Active Courses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Kursus Aktif</h2>
            <span className="text-sm text-muted-foreground">4 kursus berjalan</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>

        {/* Priority Tasks Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Priority Tasks – To Do</h2>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Wow! Semua tugas sudah selesai
            </h3>
            <p className="text-muted-foreground">
              Kamu hebat! Tidak ada tugas mendesak yang perlu dikerjakan saat ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
