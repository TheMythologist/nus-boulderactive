import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Target, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">OUR VISION</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">BEYOND LIMITS</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 1997, NUS BoulderActive has emerged as Singapore&apos;s premier bouldering
              competition, bringing together climbers of all skill levels in the spirit of
              challenge, friendship, and personal growth. Our event celebrates the dynamic culture
              of bouldering while fostering an inclusive community passionate about sport climbing.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in pushing boundaries and conquering fears. BoulderActive aims to become
              the destination for climbers seeking to test their limits, discover new techniques,
              and connect with like-minded individuals in Singapore&apos;s growing climbing
              community, establishing Singapore&apos;s climbing presence in sport climbing.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">COMPETITIVE SPIRIT</h3>
              <p className="text-muted-foreground">
                Challenge yourself against Singapore&apos;s best climbers in multiple categories
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">INCLUSIVE COMMUNITY</h3>
              <p className="text-muted-foreground">
                Open to all skill levels, fostering friendship and mutual support
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">DYNAMIC ROUTES</h3>
              <p className="text-muted-foreground">
                Expertly set problems that challenge technique, strength, and creativity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">PERSONAL GROWTH</h3>
              <p className="text-muted-foreground">
                Push your limits and discover new heights in your climbing journey
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
