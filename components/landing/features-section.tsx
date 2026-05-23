const features = [
  {
    number: "01",
    title: "Grip VCS",
    description: "A version control system combining Git, Mercurial, and Graphite's stack-based workflow. Hosting, branching, merging — all the power, none of the UI.",
  },
  {
    number: "02",
    title: "CI/CD & Registry",
    description: "Automated pipelines, package registries, and artifact hosting. Build, test, and deploy on infrastructure you don't have to manage.",
  },
  {
    number: "03",
    title: "Security & Compliance",
    description: "Enterprise-grade encryption, audit trails, access controls, and compliance reporting. Your customers' data stays safe on your terms.",
  },
  {
    number: "04",
    title: "Your Frontend, Our Backend",
    description: "You build the brand, the design, the experience. We handle hosting, version control, pipelines, and everything that runs beneath it.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Capabilities
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature) => (
            <div key={feature.number} className="group">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
                <div className="shrink-0">
                  <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}