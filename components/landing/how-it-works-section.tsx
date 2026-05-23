"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    number: "I",
    title: "Connect your brand",
    description: "Bring your frontend, your design system, your identity. Grip runs behind it all — your users never see us.",
    code: `$ grip init my-platform

$ grip configure \\
    --domain code.myplatform.com \\
    --identity brand \
    --backend grip`,
  },
  {
    number: "II",
    title: "Configure the pipeline",
    description: "Set up version control, CI/CD, and registries. All the backend operations your platform needs, configured once.",
    code: `grip.pipeline('main', {
  trigger: 'push',
  stages: [
    'lint',
    'test',
    'build',
    'publish',
  ]
})`,
  },
  {
    number: "III",
    title: "Ship with confidence",
    description: "Your platform is live. Repositories, packages, pipelines — all running on infrastructure built for this exact purpose.",
    code: `$ grip deploy --production

✓ Pipeline passed (4/4)
✓ Artifacts published to registry
✓ Live at code.myplatform.com
✓ 99.99% SLA guaranteed`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-neutral-800 text-neutral-100 overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-neutral-400 mb-6">
            <span className="w-8 h-px bg-neutral-600" />
            Process
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Three steps.
            <br />
            <span className="text-neutral-400">Infinite possibilities.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-neutral-700 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-neutral-500">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>

                    {activeStep === index && (
                      <div className="mt-4 h-px bg-neutral-700 overflow-hidden">
                        <div
                          className="h-full bg-neutral-300 w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-neutral-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-700 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                </div>
                <span className="text-xs font-mono text-neutral-500">terminal</span>
              </div>

              <div className="p-8 font-mono text-sm min-h-[280px]">
                <pre className="text-neutral-300">
                  {steps[activeStep].code.split('\n').map((line, lineIndex) => (
                    <div key={`${activeStep}-${lineIndex}`} className="leading-loose">
                      <span className="text-neutral-600 select-none w-8 inline-block">{lineIndex + 1}</span>
                      {line}
                    </div>
                  ))}
                </pre>
              </div>

              <div className="px-6 py-4 border-t border-neutral-700 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-neutral-500">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}