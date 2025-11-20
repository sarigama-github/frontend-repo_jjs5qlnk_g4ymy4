import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" />
            Playful learning, powered by tech
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build bright minds with an immersive, modern classroom
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            A fresh educational experience that blends creativity, exploration, and
            technology. Interactive 3D blocks turn concepts into memorable
            moments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-orange-600 shadow-lg shadow-orange-900/10 transition hover:translate-y-[-2px] hover:shadow-orange-900/20"
            >
              Explore features
            </a>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Try a demo
            </button>
          </div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[420px] w-full rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur md:h-[520px]">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Soft overlay borders */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
