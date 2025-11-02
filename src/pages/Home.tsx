import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Camera, Search } from "lucide-react";
import { Link } from "react-router-dom";
import campusHero from "@/assets/campus-hero.jpg";

const events = [
  {
    id: 1,
    title: "Welcome Night 2025",
    date: "March 15, 2025",
    location: "Student Center",
    attendees: 450,
    photos: 1250,
    image: campusHero,
  },
  {
    id: 2,
    title: "Spring Fest Concert",
    date: "April 2, 2025",
    location: "Main Quad",
    attendees: 800,
    photos: 2100,
    image: campusHero,
  },
  {
    id: 3,
    title: "Career Fair 2025",
    date: "March 28, 2025",
    location: "Convention Hall",
    attendees: 600,
    photos: 890,
    image: campusHero,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/background.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Campus Memories
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Use AI-powered face search to discover and download your photos from campus events instantly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Camera className="mr-2 h-5 w-5" />
                  Search Your Photos
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Browse Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Campus Events</h2>
            <p className="text-muted-foreground text-lg">
              Browse photos from recent events or search for your face across all events
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {event.attendees} attendees
                      </div>
                      <div className="flex items-center">
                        <Camera className="mr-2 h-4 w-4" />
                        {event.photos} photos
                      </div>
                    </div>
                  </div>

                  <Link to={`/event/${event.id}`} className="block w-full">
                    <Button className="w-full" variant="outline">
                      View Gallery
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Finding your photos is simple and secure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Upload a Selfie",
                description: "Take or upload a clear photo of yourself",
                icon: Camera,
              },
              {
                title: "AI Finds Your Photos",
                description: "Our secure AI searches across all event photos",
                icon: Search,
              },
              {
                title: "Download & Share",
                description: "Download your photos or share them with friends",
                icon: Users,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-md transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
