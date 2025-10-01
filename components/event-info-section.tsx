import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Camera, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function EventInfoSection() {
  return (
    <section className="py-20" id="information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">EVENT INFORMATION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6 border-2 border-primary bg-primary/5">
            <CardContent className="text-center pt-6">
              <Image
                src="/climbbuddy.png"
                alt="ClimbBuddy Logo"
                height={40}
                width={40}
                className="h-8 w-8 text-primary mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-primary">ClimbBuddy Live Scores</h3>
              <p className="text-muted-foreground mb-6">
                View live scores and rankings during the competition
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link
                  href="https://climbbuddy-5b7f6.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Scores
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-secondary bg-secondary/5">
            <CardContent className="text-center pt-6">
              <Info className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-secondary">Competition Rules</h3>
              <p className="text-muted-foreground mb-6">
                View detailed rules, categories, and format information
              </p>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <Link href="/rules-and-formats" rel="noopener noreferrer">
                  View Rules
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Date & Venue */}
          <Card className="pt-6">
            <CardHeader className="text-center pb-2">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Date & Venue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-lg font-semibold mb-2">October 3-5, 2025</p>
              <p className="text-muted-foreground mb-4">City Square Mall</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1ISyPNq3u-ZbwfH5rZbVwW6YdRgm2bbDTl6tPAQ2Xjj8"
                  rel="noopener noreferrer"
                >
                  SEE DETAILED SCHEDULE
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Event Photos */}
          <Card className="p-6">
            <CardHeader className="text-center pb-2">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Event Photos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Experience the excitement of competitive bouldering with climbers from across
                Singapore&apos;s universities and climbing community.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <Link
                  target="_blank"
                  href="https://linktr.ee/boulderactive2022"
                  rel="noopener noreferrer"
                >
                  PREVIOUS BA PHOTOS
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20" id="schedule">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">DETAILED SCHEDULE</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three days of intense competition across multiple categories and formats
            </p>
          </div>

          {/* TODO: Split based on men vs. women */}
          {/* TODO: Need more details regarding registration time, detail time, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Day 1 */}
            <Card className="p-6 border-l-4 border-l-primary">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">DAY 1</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 3, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Novice Qualifiers</span>
                    <span className="text-primary font-bold">09:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Inter Qualifiers/Novice Semifinals (Men)</span>
                    <span className="text-primary font-bold">15:40</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Novice/Inter Semifinals (Women)</span>
                    <span className="text-accent font-bold">18:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="p-6 border-l-4 border-l-accent">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-accent">DAY 2</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 4, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-sm">Open Qualifiers</span>
                    <span className="text-primary font-bold">10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Inter Semifinals</span>
                    <span className="text-accent font-bold">14:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <span className="font-semibold text-sm">Team Event</span>
                    <span className="text-secondary font-bold">16:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-sm">Open Semifinals</span>
                    <span className="text-accent font-bold">19:15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="p-6 border-l-4 border-l-secondary">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-secondary">DAY 3</CardTitle>
                <p className="text-sm text-muted-foreground font-semibold">October 5, 2025</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg border-2 border-secondary">
                    <span className="font-semibold text-sm">Novice Finals</span>
                    <span className="text-secondary font-bold">10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg border-2 border-secondary">
                    <span className="font-semibold text-sm">Inter Finals</span>
                    <span className="text-secondary font-bold">12:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg border-2 border-secondary">
                    <span className="font-bold text-sm">Open Finals</span>
                    <span className="text-secondary font-bold text-lg">14:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competition Formats */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4 text-primary">COMPETITION FORMATS</h4>
              <p className="text-muted-foreground">
                Understanding the different competition formats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Flash Format */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">FLASH</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="list-disc flex flex-col gap-1">
                    <li>Demo climb available</li>
                    <li>6 problems per competitor</li>
                    <li>Same detail enters together</li>
                    <li>Can view routes beforehand</li>
                    <li>19 min per detail</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Session Format */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">SESSION</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="list-disc flex flex-col gap-1">
                    <li>No demo climb</li>
                    <li>5 problems per competitor</li>
                    <li>Same detail enters together</li>
                    <li>30 min per detail</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rotation Format */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">ROTATION</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="list-disc flex flex-col gap-1">
                    <li>No demo climb</li>
                    <li>4 problems per competitor</li>
                    <li>Sent out in gendered pairs</li>
                    <li>To attempt routes in a set order</li>
                    <li>Cannot view routes beforehand</li>
                    <li>4 min per route</li>
                  </ul>
                </CardContent>
              </Card>

              {/* IFSC Concurrent */}
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">IFSC CONCURRENT</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="list-disc flex flex-col gap-1">
                    <li>No demo climb</li>
                    <li>4 problems per competitor</li>
                    <li>Sent out in reverse order</li>
                    <li>To attempt routes in a set order</li>
                    <li>2-min observation period</li>
                    <li>1 hour isolation</li>
                    <li>Return to isolation before competing and between each problem</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
