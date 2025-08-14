import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Plus, Clock, Users } from "lucide-react";

const StaffCalendar = () => {
  const events = [
    {
      id: "1",
      title: "Staff Meeting",
      time: "14:00 - 15:00",
      date: "Today",
      type: "meeting",
      attendees: ["Admin_John", "Mod_Sarah", "Mod_Alex"]
    },
    {
      id: "2",
      title: "Training Session",
      time: "19:00 - 20:30",
      date: "Tomorrow",
      type: "training",
      attendees: ["New_Mod_1", "New_Mod_2"]
    },
    {
      id: "3",
      title: "Server Maintenance",
      time: "02:00 - 04:00",
      date: "Friday",
      type: "maintenance",
      attendees: ["Admin_John", "Admin_Mike"]
    }
  ];

  const shifts = [
    { staff: "Admin_John", shift: "Morning", time: "08:00 - 16:00", status: "active" },
    { staff: "Mod_Sarah", shift: "Afternoon", time: "16:00 - 00:00", status: "active" },
    { staff: "Mod_Alex", shift: "Night", time: "00:00 - 08:00", status: "upcoming" },
  ];

  const getEventBadge = (type: string) => {
    switch (type) {
      case 'meeting': return <Badge className="bg-primary text-primary-foreground">Meeting</Badge>;
      case 'training': return <Badge className="bg-accent text-accent-foreground">Training</Badge>;
      case 'maintenance': return <Badge variant="destructive">Maintenance</Badge>;
      default: return <Badge variant="secondary">Event</Badge>;
    }
  };

  const getShiftBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-success text-success-foreground">Active</Badge>
    ) : (
      <Badge variant="outline">Upcoming</Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Calendar</h1>
          <p className="text-muted-foreground">
            Manage staff schedules, meetings, and server events.
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Events */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Scheduled meetings and activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                  {getEventBadge(event.type)}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                  <span>•</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3 h-3 text-muted-foreground" />
                  <div className="flex gap-1">
                    {event.attendees.map((attendee, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {attendee}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Current Shifts */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Current Shifts
            </CardTitle>
            <CardDescription>Active and upcoming staff shifts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {shifts.map((shift, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{shift.staff}</h3>
                  {getShiftBadge(shift.status)}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {shift.shift} Shift
                </div>
                <div className="text-sm font-medium text-foreground">
                  {shift.time}
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Calendar View */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
          <CardDescription>Monthly overview of all staff activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 text-center font-semibold text-muted-foreground">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="aspect-square p-2 border border-border/30 rounded hover:bg-muted/30 cursor-pointer">
                <div className="text-sm text-foreground">{((i % 31) + 1)}</div>
                {i === 15 && <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>}
                {i === 16 && <div className="w-2 h-2 bg-accent rounded-full mt-1"></div>}
                {i === 19 && <div className="w-2 h-2 bg-destructive rounded-full mt-1"></div>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffCalendar;