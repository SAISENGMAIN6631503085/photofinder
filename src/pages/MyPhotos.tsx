import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Share2, EyeOff, Calendar, MapPin } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const photosByEvent = [
  {
    eventId: 1,
    eventName: "Welcome Night 2025",
    date: "March 15, 2025",
    location: "Student Center",
    photos: [
      { id: 1, url: campusHero, timestamp: "8:45 PM" },
      { id: 2, url: campusHero, timestamp: "9:12 PM" },
      { id: 3, url: campusHero, timestamp: "9:30 PM" },
      { id: 4, url: campusHero, timestamp: "10:05 PM" },
    ],
  },
  {
    eventId: 2,
    eventName: "Spring Fest Concert",
    date: "April 2, 2025",
    location: "Main Quad",
    photos: [
      { id: 5, url: campusHero, timestamp: "7:15 PM" },
      { id: 6, url: campusHero, timestamp: "8:30 PM" },
    ],
  },
];

const MyPhotos = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const togglePhotoSelection = (photoId: number) => {
    setSelectedPhotos(prev =>
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const totalPhotos = photosByEvent.reduce((acc, event) => acc + event.photos.length, 0);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">My Photos</h1>
          <p className="text-muted-foreground text-lg mb-6">
            {totalPhotos} photos found across {photosByEvent.length} events
          </p>
          
          {selectedPhotos.length > 0 && (
            <div className="flex flex-wrap gap-3 p-4 bg-secondary rounded-lg">
              <Button variant="default">
                <Download className="mr-2 h-4 w-4" />
                Download Selected ({selectedPhotos.length})
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Selected
              </Button>
              <Button variant="outline">
                <EyeOff className="mr-2 h-4 w-4" />
                Request Blur
              </Button>
            </div>
          )}
        </div>

        {/* Photos by Event */}
        <div className="space-y-12">
          {photosByEvent.map((event, eventIndex) => (
            <Card key={event.eventId} className="p-6 animate-scale-in" style={{ animationDelay: `${eventIndex * 100}ms` }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{event.eventName}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                  <span>{event.photos.length} photos</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {event.photos.map((photo, photoIndex) => (
                  <div
                    key={photo.id}
                    className={`relative group cursor-pointer rounded-lg overflow-hidden animate-fade-in ${
                      selectedPhotos.includes(photo.id) ? "ring-4 ring-primary" : ""
                    }`}
                    style={{ animationDelay: `${(eventIndex * 100) + (photoIndex * 50)}ms` }}
                    onClick={() => togglePhotoSelection(photo.id)}
                  >
                    <div className="aspect-square">
                      <img
                        src={photo.url}
                        alt={`Photo ${photo.id}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-2 left-2 text-white text-sm">
                        {photo.timestamp}
                      </div>
                    </div>

                    {selectedPhotos.includes(photo.id) && (
                      <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-primary-foreground"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}

                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-1">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPhotos;
