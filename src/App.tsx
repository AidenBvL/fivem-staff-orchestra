import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import ServerStatus from "./pages/ServerStatus";
import PlayerData from "./pages/players/PlayerData";
import StaffCalendar from "./pages/staff/StaffCalendar";
import Characters from "./pages/game/Characters";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          } />
          <Route path="/server-status" element={
            <AppLayout>
              <ServerStatus />
            </AppLayout>
          } />
          <Route path="/players/data" element={
            <AppLayout>
              <PlayerData />
            </AppLayout>
          } />
          <Route path="/staff/calendar" element={
            <AppLayout>
              <StaffCalendar />
            </AppLayout>
          } />
          <Route path="/game/characters" element={
            <AppLayout>
              <Characters />
            </AppLayout>
          } />
          {/* Placeholder routes for other sections */}
          <Route path="/staff/*" element={
            <AppLayout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">Staff Management</h2>
                <p className="text-muted-foreground">This section is under development</p>
              </div>
            </AppLayout>
          } />
          <Route path="/players/*" element={
            <AppLayout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">Player Management</h2>
                <p className="text-muted-foreground">This section is under development</p>
              </div>
            </AppLayout>
          } />
          <Route path="/game/*" element={
            <AppLayout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">Game Management</h2>
                <p className="text-muted-foreground">This section is under development</p>
              </div>
            </AppLayout>
          } />
          <Route path="/panel/*" element={
            <AppLayout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">Panel Management</h2>
                <p className="text-muted-foreground">This section is under development</p>
              </div>
            </AppLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
