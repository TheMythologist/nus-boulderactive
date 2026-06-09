import { Trophy, Users, Target, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/brand/section-heading';
import { Sparkle } from '@/components/brand/sparkle';

const FEATURES = [
  {
    icon: Trophy,
    title: 'Competitive Spirit',
    description: "Challenge yourself against Singapore's best climbers across multiple categories.",
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'Open to all skill levels, fostering friendship and mutual support on the wall.',
  },
  {
    icon: Zap,
    title: 'Dynamic Routes',
    description: 'Expertly set problems that test technique, strength, and creativity.',
  },
  {
    icon: Target,
    title: 'Personal Growth',
    description: 'Push your limits and discover new heights in your climbing journey.',
  },
];

export function AboutSection() {
  return (
    <section id="about">
      {/* Vision — electric-blue colour block */}
      <div className="relative overflow-hidden bg-blue text-cream">
        <Sparkle className="absolute -right-10 -top-10 h-48 w-48 text-cream/10" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            index="001"
            label="Our Vision"
            title={
              <>
                Beyond
                <br />
                Limits
              </>
            }
          />
          <div className="mt-10 grid gap-6 text-lg leading-relaxed text-cream/90 lg:grid-cols-2 lg:text-xl">
            <p>
              Founded in 1997, NUS BoulderActive has grown into Singapore&apos;s premier
              bouldering competition — bringing together climbers of all levels in the spirit
              of challenge, friendship, and personal growth. We celebrate the dynamic culture
              of bouldering while building an inclusive community around sport climbing.
            </p>
            <p>
              We believe in pushing boundaries and conquering fears. BoulderActive is the
              destination for climbers seeking to test their limits, discover new techniques,
              and connect with like-minded people — strengthening Singapore&apos;s presence in
              the sport.
            </p>
          </div>
        </div>
      </div>

      {/* Features — brutalist grid on cream */}
      <div className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="brand-card brand-card-interactive flex flex-col p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-lime">
                      <Icon className="h-6 w-6 text-ink" />
                    </span>
                    <span className="brand-index text-2xl text-ink/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
