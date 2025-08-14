import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, User, DollarSign, MapPin, Car, Home } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      id: "1",
      name: "Johnny Walker",
      citizenId: "DXE12345",
      owner: "John_Doe",
      job: "Police Officer",
      gang: "None",
      cash: 15420,
      bank: 85750,
      location: "Los Santos PD",
      vehicles: 3,
      properties: 1,
      lastActive: "2 min ago"
    },
    {
      id: "2",
      name: "Maria Santos",
      citizenId: "ABC67890",
      owner: "Jane_Smith",
      job: "Doctor",
      gang: "None",
      cash: 8500,
      bank: 125300,
      location: "Pillbox Medical",
      vehicles: 2,
      properties: 2,
      lastActive: "1 hour ago"
    },
    {
      id: "3",
      name: "Tommy Vercetti",
      citizenId: "GHI13579",
      owner: "Mike_Johnson",
      job: "Mechanic",
      gang: "The Lost MC",
      cash: 2340,
      bank: 45600,
      location: "Hayes Auto",
      vehicles: 5,
      properties: 0,
      lastActive: "Online"
    }
  ];

  const getJobBadge = (job: string) => {
    const jobColors: { [key: string]: string } = {
      "Police Officer": "bg-primary text-primary-foreground",
      "Doctor": "bg-success text-success-foreground",
      "Mechanic": "bg-warning text-warning-foreground",
    };
    
    return (
      <Badge className={jobColors[job] || "bg-secondary text-secondary-foreground"}>
        {job}
      </Badge>
    );
  };

  const getGangBadge = (gang: string) => {
    return gang === "None" ? (
      <Badge variant="outline">None</Badge>
    ) : (
      <Badge variant="destructive">{gang}</Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Character Data</h1>
          <p className="text-muted-foreground">
            View character statistics, inventories, properties, and vehicles.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Character Search
          </CardTitle>
          <CardDescription>Search by character name, citizen ID, or owner</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter character name, citizen ID, or owner..."
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
              Search
            </Button>
            <Button variant="outline">
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Character Table */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle>Character Database</CardTitle>
          <CardDescription>Complete character information and assets</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Character</TableHead>
                <TableHead>Citizen ID</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Gang</TableHead>
                <TableHead>Money</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Assets</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {characters.map((character) => (
                <TableRow key={character.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{character.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{character.name}</div>
                        <div className="text-xs text-muted-foreground">{character.citizenId}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{character.citizenId}</TableCell>
                  <TableCell>{character.owner}</TableCell>
                  <TableCell>{getJobBadge(character.job)}</TableCell>
                  <TableCell>{getGangBadge(character.gang)}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-3 h-3" />
                        <span className="font-medium">${character.cash.toLocaleString()}</span>
                        <span className="text-muted-foreground">cash</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-medium">${character.bank.toLocaleString()}</span>
                        <span className="text-muted-foreground">bank</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm">{character.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Car className="w-3 h-3 text-muted-foreground" />
                        <span>{character.vehicles} vehicles</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Home className="w-3 h-3 text-muted-foreground" />
                        <span>{character.properties} properties</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{character.lastActive}</TableCell>
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

export default Characters;