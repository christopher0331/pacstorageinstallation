import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "206-247-4308";
const phoneHref = "tel:+12062474308";
const email = "info@pacstorageinstallation.com";
const emailHref = `mailto:${email}`;

const services = [
  {
    number: "01",
    title: "Fixed overhead storage",
    summary: "Ceiling platforms that put seasonal gear up and out of the way.",
    detail:
      "Custom-sized racks mounted into structure, rated for real household loads, finished clean so the garage still feels open.",
  },
  {
    number: "02",
    title: "Motorized overhead lifts",
    summary: "Powered systems that raise and lower storage on demand.",
    detail:
      "Smooth lift platforms for bins, coolers, and bulky kits—reach what you need without ladders or floor clutter.",
  },
  {
    number: "03",
    title: "Garage cabinet install",
    summary: "Wall cabinets measured, leveled, and anchored correctly.",
    detail:
      "From base runs to tall storage, we install cabinetry so doors hang true and every screw finds solid backing.",
  },
];

const steps = [
  {
    title: "Walkthrough",
    copy: "We look at ceiling height, joists, parking clearance, and what you actually need to store.",
  },
  {
    title: "Plan & quote",
    copy: "You get a clear layout and price—no mystery add-ons, no pressure.",
  },
  {
    title: "Install day",
    copy: "We mount, level, and test. You park the car and start using the space the same day.",
  },
];

const reasons = [
  {
    title: "Structure-first installs",
    copy: "We find real framing. No guesswork hanging on drywall alone.",
  },
  {
    title: "Clearance that works",
    copy: "Systems sized so doors still open and vehicles still fit.",
  },
  {
    title: "Local & direct",
    copy: "Seattle-based. You talk to the people who do the work.",
  },
  {
    title: "Finished clean",
    copy: "Hardware lined up, edges tight, garage left ready to use.",
  },
];

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-6 sm:px-8">
          <Link href="/" className="group flex min-w-0 flex-col">
            <span className="font-display text-[0.7rem] font-bold tracking-[0.22em] text-white/70 uppercase transition-colors group-hover:text-white">
              Pacific Storage Install
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#services" className="link-underline transition-colors hover:text-white">
              Services
            </a>
            <a href="#process" className="link-underline transition-colors hover:text-white">
              Process
            </a>
            <a href="#contact" className="link-underline transition-colors hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href={phoneHref}
            className="shrink-0 text-sm font-semibold tracking-wide text-white! transition-opacity hover:opacity-80"
          >
            {phoneDisplay}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-garage.jpg"
              alt="Bright Seattle garage with overhead storage and open floor space"
              fill
              priority
              sizes="100vw"
              className="animate-ken object-cover object-[center_45%]"
            />
          </div>

          {/* Precise vignette — keeps photo alive, protects type */}
          <div
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,16,14,0.88)_0%,rgba(10,16,14,0.62)_38%,rgba(10,16,14,0.18)_68%,rgba(10,16,14,0.35)_100%)]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(10,16,14,0.75)] to-transparent"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:justify-center lg:pb-24 lg:pt-32">
            <div className="max-w-2xl">
              <p className="animate-rise text-xs font-semibold tracking-[0.28em] text-sand uppercase sm:text-[0.8rem]">
                Seattle, Washington
              </p>

              <h1 className="animate-rise-1 mt-5 font-display text-[clamp(3rem,9vw,6.25rem)] leading-[0.9] font-extrabold tracking-[-0.035em]">
                Pacific
                <span className="block text-sand">Storage Install</span>
              </h1>

              <div
                className="animate-draw mt-7 h-[2px] w-16 bg-brass sm:w-20"
                aria-hidden
              />

              <p className="animate-rise-2 mt-7 max-w-md font-display text-xl leading-snug font-semibold tracking-tight text-white sm:text-2xl">
                Overhead storage & garage cabinets that free the floor.
              </p>

              <p className="animate-rise-3 mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                Motorized lifts, fixed ceiling racks, and cabinet installs—measured for
                real Seattle garages.
              </p>

              <div className="animate-rise-4 mt-9 flex flex-wrap items-center gap-3">
                <a href={phoneHref} className="btn-primary">
                  Call {phoneDisplay}
                </a>
                <a href="#contact" className="btn-ghost">
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro band */}
        <section className="border-b border-line bg-paper/80">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:gap-10 sm:px-8 sm:py-14">
            {[
              ["Motorized & fixed", "Ceiling systems matched to how you use the space."],
              ["Cabinet installs", "Leveled, anchored, and finished for daily use."],
              ["Seattle service", "Local installs across the city and nearby."],
            ].map(([title, copy]) => (
              <div key={title} className="reveal">
                <p className="font-display text-lg font-bold tracking-tight text-pine">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel sm:text-base">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-moss uppercase">
              Services
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-bold tracking-tight text-ink">
              Storage that earns its keep
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              Three focused installs. No showroom fluff—just systems that reclaim
              square footage and stay put.
            </p>
          </div>

          <ol className="mt-14 space-y-0 border-t border-line-strong">
            {services.map((service) => (
              <li
                key={service.number}
                className="reveal grid gap-4 border-b border-line py-10 sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-8 sm:py-12"
              >
                <span className="font-display text-sm font-bold tracking-[0.18em] text-brass">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-pine sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-ink/80">{service.summary}</p>
                </div>
                <p className="text-base leading-relaxed text-steel">{service.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Motorized feature */}
        <section className="bg-pine text-fog">
          <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <Image
                src="/images/motorized-lift.jpg"
                alt="Motorized overhead garage storage lift"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
              <p className="reveal text-xs font-semibold tracking-[0.22em] text-sand uppercase">
                Motorized systems
              </p>
              <h2 className="reveal mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-tight text-white">
                Lift it. Park under it. Done.
              </h2>
              <p className="reveal mt-5 max-w-md text-base leading-relaxed text-fog/75 sm:text-lg">
                Motorized overhead storage puts heavy or awkward loads on a powered
                platform—raise it for clearance, lower it when you need access. Ideal
                for seasonal kits, camping gear, and everything that used to live on
                the floor.
              </p>
              <a href={phoneHref} className="btn-primary reveal mt-8 w-fit">
                Ask about motorized installs
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-moss uppercase">
                Process
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-bold tracking-tight text-ink">
                From clutter to clearance
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-steel">
              Straightforward from first call to final mount.
            </p>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="reveal relative">
                <span className="font-display text-5xl font-extrabold tracking-tight text-fog sm:text-6xl">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-pine">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-steel">{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Cabinets + reasons */}
        <section className="border-y border-line bg-mist/70">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
              <p className="reveal text-xs font-semibold tracking-[0.22em] text-moss uppercase">
                Cabinets
              </p>
              <h2 className="reveal mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-tight text-ink">
                Wall storage that looks intentional
              </h2>
              <p className="reveal mt-5 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
                We install garage cabinetry for tools, household overflow, and daily
                gear—aligned runs, solid anchors, and finishes that hold up to a real
                workshop.
              </p>

              <ul className="reveal mt-10 grid gap-6 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <li key={reason.title}>
                    <h3 className="font-display text-base font-bold tracking-tight text-pine">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{reason.copy}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <Image
                src="/images/cabinets.jpg"
                alt="Installed garage wall cabinets and workbench storage"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_0%,rgba(176,141,66,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="reveal grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-moss uppercase">
                  Contact
                </p>
                <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-bold tracking-tight text-ink">
                  Ready to reclaim the bay?
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
                  Call or email with a few photos of your garage and what you want to
                  store. We&apos;ll help you choose fixed overhead, motorized, cabinets—or
                  a mix.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={phoneHref} className="btn-solid">
                    Call {phoneDisplay}
                  </a>
                  <a
                    href={emailHref}
                    className="inline-flex min-h-[3.1rem] items-center justify-center border border-line-strong px-6 text-sm font-semibold text-pine transition-colors hover:border-pine hover:bg-pine hover:text-white"
                  >
                    Email us
                  </a>
                </div>
              </div>

              <div className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-moss uppercase">
                    Phone
                  </p>
                  <a
                    href={phoneHref}
                    className="link-underline mt-2 block font-display text-xl font-bold text-pine"
                  >
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-moss uppercase">
                    Email
                  </p>
                  <a
                    href={emailHref}
                    className="link-underline mt-2 block break-all font-display text-lg font-bold text-pine"
                  >
                    {email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-moss uppercase">
                    Service area
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-pine">
                    Seattle, Washington
                  </p>
                  <p className="mt-1 text-sm text-steel">
                    Surrounding communities welcome—ask about your address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-xl font-bold tracking-tight text-white">
              Pacific Storage Install
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-fog/60">
              Overhead garage storage—motorized and fixed—plus cabinet installation in
              Seattle, WA.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-fog/70 sm:items-end">
            <a href={phoneHref} className="transition-colors hover:text-white">
              {phoneDisplay}
            </a>
            <a href={emailHref} className="transition-colors hover:text-white">
              {email}
            </a>
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-fog/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} Pacific Storage Install</p>
            <p>pacstorageinstallation.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
