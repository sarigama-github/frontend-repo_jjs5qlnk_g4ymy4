import { Sparkles, Puzzle, GraduationCap } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/15 bg-white/5 p-6 text-white shadow-lg backdrop-blur transition hover:bg-white/10">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative -mt-10 w-full bg-gradient-to-b from-amber-500 to-orange-600 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(255,255,255,0.20),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything students need to thrive</h2>
          <p className="mt-3 text-white/85">Designed for engagement, built for clarity, and powered by delightful interactions.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Sparkles} title="Interactive lessons" desc="Hands-on modules that make abstract ideas come alive with playful visuals." />
          <Feature icon={Puzzle} title="Creative projects" desc="Build and explore with guided challenges using vibrant 3D blocks." />
          <Feature icon={GraduationCap} title="Progress tracking" desc="Celebrate achievements with clear milestones and colorful badges." />
        </div>
      </div>
    </section>
  );
}

export default Features;
