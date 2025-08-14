import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Users, UserCheck, UserX, Clock } from "lucide-react";

const PlayerData = () => {
  const players = [
    {
      id: "1",
      name: "John_Doe",
      steamId: "76561198123456789",
      license: "license:abc123def456",
      discordId: "234567890123456789",
      firstJoin: "2024-01-15",
      lastSeen: "2 min ago",
      status: "online",
      characters: 3,
      playtime: "145h 32m"
    },
    {
      id: "2",
      name: "Jane_Smith",
      steamId: "76561198987654321",
      license: "license:def456ghi789",
      discordId: "345678901234567890",
      firstJoin: "2024-02-20",
      lastSeen: "1 hour ago",
      status: "offline",
      characters: 2,
      playtime: "87h 15m"
    },
    {
      id: "3",
      name: "Mike_Johnson",
      steamId: "76561198456789123",
      license: "license:ghi789jkl012",
      discordId: "456789012345678901",
      firstJoin: "2024-03-10",
      lastSeen: "Online",
      status: "online",
      characters: 1,
      playtime: "56h 43m"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "online" ? (
      <Badge className="bg-success text-success-foreground">
        <UserCheck className="w-3 h-3 mr-1" />
        Online
      </Badge>
    ) : (
      <Badge variant="secondary">
        <UserX className="w-3 h-3 mr-1" />
        Offline
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Player Data</h1>
          <p className="text-muted-foreground">
            View and manage player information, licenses, and connection history.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Player Search
          </CardTitle>
          <CardDescription>Search by player name, Steam ID, license, or Discord ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter player name, Steam ID, license, or Discord ID..."
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
              Search
            </Button>
            <Button variant="outline">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Player Table */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle>Player Database</CardTitle>
          <CardDescription>Complete player information and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player Name</TableHead>
                <TableHead>Steam ID</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Discord ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Characters</TableHead>
                <TableHead>Playtime</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell className="font-mono text-xs">{player.steamId}</TableCell>
                  <TableCell className="font-mono text-xs">{player.license}</TableCell>
                  <TableCell className="font-mono text-xs">{player.discordId}</TableCell>
                  <TableCell>{getStatusBadge(player.status)}</TableCell>
                  <TableCell>{player.characters}</TableCell>
                  <TableCell>{player.playtime}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      {player.lastSeen}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerData;