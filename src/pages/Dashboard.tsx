import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Server, 
  Activity, 
  Shield, 
  AlertTriangle, 
  Clock,
  TrendingUp,
  MapPin
} from "lucide-react";

const Dashboard = () => {
  const serverStats = [
    {
      title: "Online Players",
      value: "32/64",
      description: "50% server capacity",
      icon: Users,
      trend: { value: "+12% from yesterday", isPositive: true }
    },
    {
      title: "Server Health",
      value: "98.5%",
      description: "Excellent performance",
      icon: Activity,
      trend: { value: "+0.2% from last hour", isPositive: true }
    },
    {
      title: "Active Staff",
      value: "8",
      description: "Currently online",
      icon: Shield,
      trend: { value: "Normal coverage", isPositive: true }
    },
    {
      title: "Pending Actions",
      value: "3",
      description: "Reports to review",
      icon: AlertTriangle,
      trend: { value: "-2 from yesterday", isPositive: true }
    }
  ];

  const recentActivity = [
    { action: "Player ban", user: "BadPlayer123", staff: "Admin_John", time: "2 min ago", type: "punishment" },
    { action: "Warning issued", user: "SpeedDemon", staff: "Mod_Sarah", time: "15 min ago", type: "warning" },
    { action: "Staff login", user: "Admin_Mike", staff: "-", time: "32 min ago", type: "staff" },
    { action: "Player kicked", user: "Troublemaker", staff: "Mod_Alex", time: "1 hour ago", type: "punishment" },
    { action: "Report resolved", user: "HelpfulPlayer", staff: "Admin_John", time: "2 hours ago", type: "resolved" }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'punishment': return 'destructive';
      case 'warning': return 'secondary';
      case 'staff': return 'default';
      case 'resolved': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, manage your FiveM server from here.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow">
            <MapPin className="w-4 h-4 mr-2" />
            Live Map
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serverStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Server Status */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              Server Status
            </CardTitle>
            <CardDescription>Real-time server information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">CPU Usage</span>
              <span className="text-sm font-medium">34%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "34%" }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Memory Usage</span>
              <span className="text-sm font-medium">67%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: "67%" }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Uptime</span>
              <span className="text-sm font-medium">3d 14h 22m</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="md:col-span-2 bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest server and staff actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <Badge variant={getBadgeVariant(activity.type)}>
                      {activity.action}
                    </Badge>
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      {activity.staff !== "-" && (
                        <span className="text-muted-foreground"> by {activity.staff}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;