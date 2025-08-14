import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Activity, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Network,
  Clock,
  Users,
  Database,
  Zap
} from "lucide-react";

const ServerStatus = () => {
  const serverMetrics = [
    {
      title: "Server Uptime",
      value: "3d 14h 22m",
      description: "99.8% availability",
      icon: Clock,
      trend: { value: "Excellent", isPositive: true }
    },
    {
      title: "CPU Usage",
      value: "34%",
      description: "8 cores / 16 threads",
      icon: Cpu,
      trend: { value: "Normal load", isPositive: true }
    },
    {
      title: "Memory Usage",
      value: "67%",
      description: "10.7GB / 16GB",
      icon: MemoryStick,
      trend: { value: "Stable", isPositive: true }
    },
    {
      title: "Network I/O",
      value: "125 MB/s",
      description: "↑ 45MB/s ↓ 80MB/s",
      icon: Network,
      trend: { value: "High traffic", isPositive: true }
    }
  ];

  const resourceStats = [
    { name: "CPU Usage", value: 34, max: 100, color: "bg-primary" },
    { name: "Memory", value: 67, max: 100, color: "bg-accent" },
    { name: "Disk I/O", value: 23, max: 100, color: "bg-success" },
    { name: "Network", value: 78, max: 100, color: "bg-warning" },
  ];

  const services = [
    { name: "FiveM Server", status: "running", port: "30120", uptime: "3d 14h" },
    { name: "txAdmin", status: "running", port: "40120", uptime: "3d 14h" },
    { name: "Database", status: "running", port: "3306", uptime: "7d 2h" },
    { name: "Redis Cache", status: "running", port: "6379", uptime: "7d 2h" },
    { name: "Web Panel", status: "running", port: "3000", uptime: "1d 8h" },
  ];

  const getStatusBadge = (status: string) => {
    return status === "running" ? (
      <Badge className="bg-success text-success-foreground">
        <Zap className="w-3 h-3 mr-1" />
        Running
      </Badge>
    ) : (
      <Badge variant="destructive">
        Stopped
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Server Status</h1>
          <p className="text-muted-foreground">
            Real-time server performance metrics and service status.
          </p>
        </div>
        <Badge className="bg-success text-success-foreground text-sm px-3 py-1">
          <Activity className="w-4 h-4 mr-1" />
          All Systems Operational
        </Badge>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serverMetrics.map((metric, index) => (
          <StatCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Resource Usage */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              Resource Usage
            </CardTitle>
            <CardDescription>Real-time system resource monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {resourceStats.map((resource, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{resource.name}</span>
                  <span className="text-sm text-muted-foreground">{resource.value}%</span>
                </div>
                <Progress value={resource.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Service Status */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Service Status
            </CardTitle>
            <CardDescription>System services and their current status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{service.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Port {service.port} • Uptime: {service.uptime}
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Detailed server performance data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">System Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">OS:</span>
                  <span className="font-medium">Ubuntu 22.04 LTS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kernel:</span>
                  <span className="font-medium">5.15.0-91-generic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Architecture:</span>
                  <span className="font-medium">x86_64</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Load Average:</span>
                  <span className="font-medium">0.45, 0.52, 0.48</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Storage</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-medium">500 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Used:</span>
                  <span className="font-medium">178 GB (35.6%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available:</span>
                  <span className="font-medium">322 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IOPS:</span>
                  <span className="font-medium">1,245 ops/sec</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Network</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bandwidth:</span>
                  <span className="font-medium">1 Gbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RX Packets:</span>
                  <span className="font-medium">2,458,921</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TX Packets:</span>
                  <span className="font-medium">1,892,534</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Errors:</span>
                  <span className="font-medium text-success">0</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerStatus;