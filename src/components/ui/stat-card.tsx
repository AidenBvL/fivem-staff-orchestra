import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  className 
}: StatCardProps) {
  return (
    <Card className={cn("bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <Icon className="h-4 w-4 text-muted-foreground" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
        {trend && (
          <div className={cn(
            "text-xs mt-1 flex items-center",
            trend.isPositive ? "text-success" : "text-destructive"
          )}>
            <span className={cn(
              "mr-1",
              trend.isPositive ? "text-success" : "text-destructive"
            )}>
              {trend.isPositive ? "↗" : "↘"}
            </span>
            {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
}