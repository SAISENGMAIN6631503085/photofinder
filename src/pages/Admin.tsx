import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Upload,
  Users,
  Image as ImageIcon,
  TrendingUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Admin = () => {
  const stats = [
    {
      title: "Total Events",
      value: "24",
      change: "+3 this month",
      icon: Calendar,
      trend: "up",
    },
    {
      title: "Total Photos",
      value: "12,450",
      change: "+2,100 this week",
      icon: ImageIcon,
      trend: "up",
    },
    {
      title: "Active Users",
      value: "3,890",
      change: "+450 this month",
      icon: Users,
      trend: "up",
    },
    {
      title: "Search Accuracy",
      value: "94.2%",
      change: "+2.1% this month",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const recentEvents = [
    { id: 1, name: "Welcome Night 2025", photos: 1250, status: "active" },
    { id: 2, name: "Spring Fest Concert", photos: 2100, status: "active" },
    { id: 3, name: "Career Fair 2025", photos: 890, status: "processing" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Manage events, photos, and monitor platform activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-xs text-success">{stat.change}</p>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Recent Events</h2>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </div>

            <div className="space-y-3">
              {recentEvents.map((event) => (
                <Card key={event.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{event.name}</h3>
                        {event.status === "active" ? (
                          <span className="flex items-center text-sm text-success">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Active
                          </span>
                        ) : (
                          <span className="flex items-center text-sm text-muted-foreground">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            Processing
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.photos} photos uploaded
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Photo Management</h2>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Photos
              </Button>
            </div>

            <Card className="p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Upload className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Photographer Panel</h3>
                <p className="text-muted-foreground mb-6">
                  Drag and drop photos here or click to browse
                </p>
                <Button size="lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Select Photos
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                User management features coming soon...
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Detailed analytics and insights coming soon...
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
