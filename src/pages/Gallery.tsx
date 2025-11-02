import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, MapPin, User } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const photos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  url: campusHero,
  event: i % 3 === 0 ? "Welcome Night 2025" : i % 3 === 1 ? "Spring Fest Concert" : "Career Fair 2025",
  photographer: `Photographer ${(i % 5) + 1}`,
  date: "March 15, 2025",
  location: "Student Center",
  tags: ["student", "event", "campus"],
}));

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "welcome", label: "Welcome Night" },
    { id: "concert", label: "Spring Fest" },
    { id: "career", label: "Career Fair" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Event Gallery</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Browse photos from all campus events
          </p>

          {/* Search and Filters */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by event, location, or photographer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {filters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all animate-scale-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="relative aspect-square">
                <img
                  src={photo.url}
                  alt={`Photo ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white space-y-1">
                    <p className="text-sm font-medium truncate">{photo.event}</p>
                    <div className="flex items-center text-xs">
                      <User className="h-3 w-3 mr-1" />
                      {photo.photographer}
                    </div>
                    <div className="flex items-center text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {photo.date}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More Photos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
