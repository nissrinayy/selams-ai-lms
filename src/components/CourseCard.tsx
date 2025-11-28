import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  progress: number;
  instructor: string;
  duration: string;
  enrolled: number;
}

export const CourseCard = ({
  id,
  title,
  description,
  coverImage,
  progress,
  instructor,
  duration,
  enrolled
}: CourseCardProps) => {
  const getProgressColor = (value: number) => {
    if (value < 30) return "bg-destructive";
    if (value < 70) return "bg-warning";
    return "bg-success";
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-primary" />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-semibold text-primary">{progress}%</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span className="font-semibold">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2">
            <div className={`h-full ${getProgressColor(progress)} transition-all`} style={{ width: `${progress}%` }} />
          </Progress>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{enrolled} siswa</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full group/btn" size="lg">
          <Link to={`/course/${id}`}>
            <Play className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
            Lanjutkan Belajar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
