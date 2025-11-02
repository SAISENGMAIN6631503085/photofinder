import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Camera, Search, Loader2 } from "lucide-react";
import faceSearchIcon from "@/assets/face-search-icon.png";
import campusHero from "@/assets/campus-hero.jpg";

const SearchByFace = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate AI search
    setTimeout(() => {
      setSearchResults([
        { id: 1, url: campusHero, event: "Welcome Night 2025", confidence: 98 },
        { id: 2, url: campusHero, event: "Welcome Night 2025", confidence: 95 },
        { id: 3, url: campusHero, event: "Spring Fest Concert", confidence: 92 },
        { id: 4, url: campusHero, event: "Spring Fest Concert", confidence: 88 },
        { id: 5, url: campusHero, event: "Career Fair 2025", confidence: 85 },
        { id: 6, url: campusHero, event: "Career Fair 2025", confidence: 82 },
      ]);
      setIsSearching(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <img src={faceSearchIcon} alt="Face Search" className="h-20 w-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Find Your Photos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload a clear photo of yourself, and our AI will search across all campus events to find photos you're in
          </p>
        </div>

        {/* Upload Section */}
        {!selectedImage && (
          <Card className="p-8 md:p-12 animate-scale-in">
            <div className="text-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-2xl p-12 cursor-pointer hover:border-primary transition-colors group"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Photo</h3>
                <p className="text-muted-foreground mb-6">
                  Choose a clear, front-facing photo for best results
                </p>
                <Button size="lg" variant="outline">
                  <Upload className="mr-2 h-5 w-5" />
                  Select Photo
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="h-px flex-1 bg-border"></div>
                <span className="px-4 text-muted-foreground">or</span>
                <div className="h-px flex-1 bg-border"></div>
              </div>

              <Button variant="outline" size="lg" className="mt-8">
                <Camera className="mr-2 h-5 w-5" />
                Take a Selfie
              </Button>
            </div>
          </Card>
        )}

        {/* Preview and Search */}
        {selectedImage && !isSearching && searchResults.length === 0 && (
          <Card className="p-8 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Search</h3>
                  <p className="text-muted-foreground">
                    Our AI will scan through thousands of photos from campus events to find pictures you're in.
                    This usually takes 10-30 seconds.
                  </p>
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="w-full" onClick={handleSearch}>
                    <Search className="mr-2 h-5 w-5" />
                    Search for My Photos
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedImage(null);
                      setSearchResults([]);
                    }}
                  >
                    Choose Different Photo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Loading State */}
        {isSearching && (
          <Card className="p-12 animate-scale-in">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center animate-pulse-glow">
                  <Loader2 className="h-10 w-10 text-primary-foreground animate-spin" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Searching...</h3>
              <p className="text-muted-foreground">
                Our AI is analyzing photos from all campus events
              </p>
            </div>
          </Card>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Found {searchResults.length} Photos</h2>
                <p className="text-muted-foreground">Sorted by confidence match</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedImage(null);
                  setSearchResults([]);
                }}
              >
                New Search
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {searchResults.map((result, index) => (
                <Card
                  key={result.id}
                  className="overflow-hidden group hover:shadow-lg transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-square">
                    <img
                      src={result.url}
                      alt={`Result ${result.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 bg-success text-success-foreground px-2 py-1 rounded-md text-xs font-medium">
                      {result.confidence}% match
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium">{result.event}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchByFace;
