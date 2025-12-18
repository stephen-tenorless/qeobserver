import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  QuantumLatticeBackground,
  StressVisualization,
  SenseEncodeActVisualization,
  StackComponentsVisualization,
  EthicsSafetyVisualization,
  ResearchVisualization,
  HealingBrickAnimation,
  HealingGlassAnimation,
  HealingSteelAnimation,
} from "../components/AnimatedBackgrounds";
import { SocialLoginPanel } from "../components/forms/SocialLoginPanel";
import { SiteLayout } from "./SiteLayout";
import { EarlyAccessPage } from "./pages/EarlyAccessPage";
import { PartnershipsPage } from "./pages/PartnershipsPage";
import { TechnicalOverviewPage } from "./pages/TechnicalOverviewPage";
import { usePageMetadata } from "./seo";

export function QESplashPage() {
  const location = useLocation();
  const navigate = useNavigate();

  usePageMetadata(
    "qE Technologies | Calm quantum interfaces for matter and biology",
    "qE Technologies builds calm quantum interfaces—Pebble wearable, Anchor Matter, and Drive Channel—to monitor stress, heal materials, and guide adaptive biology.",
    "quantum wearables, Anchor Matter, Drive Channel, calm computing, self-healing materials, adaptive biology, structural monitoring"
  );

  useEffect(() => {
    if (location.pathname !== "/") return;

    if (location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        // jsdom and some environments don't implement scrollTo; ignore during tests
      }
    }
  }, [location.pathname, location.hash]);

  const goToEarlyAccess = () => navigate("/early-access");
  const goToTechnicalOverview = () => navigate("/technical-overview");

  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <QuantumLatticeBackground />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center relative z-10">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Calm minds. Cooperative matter.
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl leading-tight">
              From observation to action.
              <span className="block text-cyan-300 animate-pulse">
                Instantly.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base leading-relaxed">
              qE links a new class of quantum-aware wearables with living and non-living systems—so structures sense stress, cells detect damage, and genetic expression optimizes in real time. All through a calm, quantum gate. All instantly responsive.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                onClick={goToEarlyAccess}
              >
                Request Early Access
              </button>
              <button
                className="rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                onClick={goToTechnicalOverview}
              >
                Download Technical Overview
              </button>
            </div>
            <p className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400/80" aria-hidden />
              <a
                href="/blog"
                className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/60 underline-offset-2"
              >
                Explore the qE Blog for research updates and deeper dives.
              </a>
            </p>
            <div className="mt-4 grid max-w-lg grid-cols-1 gap-4 text-xs text-slate-300 sm:grid-cols-3 stagger">
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
                <p className="font-semibold text-slate-100">Pebble™</p>
                <p>Neural interface wearable. Quantum gates calm perception. Direct intent encoding.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
                <p className="font-semibold text-slate-100">
                  Anchor Matter™
                </p>
                <p>Programmable substrates. Structural, cellular, and genetic. Sense and respond.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <p className="font-semibold text-slate-100">
                  Drive Channel
                </p>
                <p>Quantum-safe control layer. Materials. Biology. Genetic systems.</p>
              </div>
            </div>
          </div>

          {/* Pebble device visual with neural interface */}
          <div className="flex-1 animate-slide-in-right">
            <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-[2rem] border border-slate-700 bg-slate-900/60 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 768 768'%3E%3Crect fill='%23000' width='768' height='768'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' font-size='72' font-family='monospace' font-weight='bold' fill='%2300ffff' dominant-baseline='middle'%3ENeural%3C/text%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='72' font-family='monospace' font-weight='bold' fill='%2300ffff' dominant-baseline='middle'%3Einterface:%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' font-size='72' font-family='monospace' font-weight='bold' fill='%2300ffff' dominant-baseline='middle'%3EUNLOCKED%3C/text%3E%3Ctext x='50%25' y='72%25' text-anchor='middle' font-size='48' font-family='monospace' fill='%2300ffff' dominant-baseline='middle'%3ECalm channel active.%3C/text%3E%3Ctext x='50%25' y='82%25' text-anchor='middle' font-size='48' font-family='monospace' fill='%2300ffff' dominant-baseline='middle'%3EAI translator online.%3C/text%3E%3C/svg%3E"
                alt="Pebble Neural Interface - Unlocked"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Pebble™ neural interface. Quantum-aware processing at your wrist.
            </p>
          </div>
        </div>
      </section>

      {/* Login services near the top for quick access */}
      <section className="border-b border-slate-900 bg-slate-950" id="login">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Login services
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Capture your profile and sync with qE instantly.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Start with social login to pin your details before exploring early access, technical overviews,
              and partnership flows. Everything routes to the right team without repeating your info.
            </p>
          </div>
          <div className="flex-1">
            <SocialLoginPanel />
          </div>
        </div>
      </section>

        {/* What qE Does */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="what">
          <StressVisualization />
          <HealingBrickAnimation />
          <HealingGlassAnimation />
          <HealingSteelAnimation />
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              Quiet healing across domains.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              From infrastructure to biology, qE detects problems before they cascade and 
              enables systems—inorganic and living—to repair, optimize, and adapt in real time.
            </p>
            
            {/* Three domains grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Materials & Infrastructure */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-50 mb-3">Materials &amp; Infrastructure</h3>
                <p className="text-xs text-slate-300 mb-3">
                  Micro-fractures in glass. Uneven wear in supports. Subtle stress patterns that no dashboard ever sees.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>• Real-time structural integrity monitoring</li>
                  <li>• Active material healing and self-repair</li>
                  <li>• Predictive maintenance and failure prevention</li>
                  <li>• Bridge, building, and critical infrastructure resilience</li>
                </ul>
              </div>

              {/* Healthcare & Pharmaceuticals */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-50 mb-3">Healthcare &amp; Pharmaceuticals</h3>
                <p className="text-xs text-slate-300 mb-3">
                  Cellular damage detection. Drug delivery calibration. Real-time physiological feedback at the bio-quantum interface.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>• Quantum-gated neural interface for calm perception</li>
                  <li>• Precision pharmaceutical targeting and dosing</li>
                  <li>• Cellular-level stress and damage detection</li>
                  <li>• Biocompatible Anchor Matter for tissue regeneration</li>
                </ul>
              </div>

              {/* Gene Augmentation & Adaptive Biology */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-50 mb-3">Gene Augmentation &amp; Adaptive Biology</h3>
                <p className="text-xs text-slate-300 mb-3">
                  Guided genetic expression. Adaptive protein synthesis. Evolution on demand, with guardrails.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>• Calm-state triggered gene expression optimization</li>
                  <li>• Real-time adaptive protein and enzyme synthesis</li>
                  <li>• Genetic expression integrity verification</li>
                  <li>• Safe, bounded biological augmentation</li>
                </ul>
              </div>
            </div>

            {/* Cross-domain capabilities */}
            <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <h3 className="text-sm font-semibold text-cyan-300 mb-3">Common Thread Across All Domains</h3>
              <div className="grid gap-3 text-xs text-cyan-100 md:grid-cols-3">
                <div>
                  <p className="font-semibold mb-1">Sense</p>
                  <p className="text-cyan-200/80">Pebble monitors your calm state while quantum-aware biosensors detect molecular stress, structural weakness, or genetic instability.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Encode</p>
                  <p className="text-cyan-200/80">Intent is translated through quantum gates into safe, auditable directives—whether for materials, drugs, or cellular expression.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Act</p>
                  <p className="text-cyan-200/80">Anchor Matter (in its material, biocompatible, or genetic forms) executes micro-interventions in real time, nudging systems toward resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="how">
          <SenseEncodeActVisualization />
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              How qE works (without the magic).
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Three layers. One continuous loop from sensing to action.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "1 · Sense",
                  body:
                    "Pebble watches your physiology for calm, attentive states while Anchor Matter monitors local stress, micro-fractures, and fatigue.",
                },
                {
                  title: "2 · Encode",
                  body:
                    "When conditions are right, Pebble opens a calm channel and converts a tiny intent vector into a secure drive pattern using entangled photonics and on-device AI.",
                },
                {
                  title: "3 · Act",
                  body:
                    "Anchor Matter uses that pattern as a stream of decisions: which micro-repair to try, where to soften, where to stiffen—nudging structures toward safer configurations.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300"
                >
                  <h3 className="mb-2 text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-xs">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-4 text-xs text-cyan-100">
              <strong>No telekinesis. No mind reading.</strong>{" "}
              Just physics, data, and a new way for materials to listen.
            </div>
          </div>
        </section>

        {/* Healthcare & Pharmaceuticals In-Depth */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="healthcare">
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-3">
                  Bio-Quantum Medicine
                </p>
                <h2 className="text-2xl font-semibold text-slate-50 mb-4">
                  Healing from the inside. Quantumly precise.
                </h2>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Your Pebble doesn't just sense your state—it's a quantum router for your biology. When you're calm and focused, the Drive Channel opens. Biocompatible Anchor Matter in your bloodstream detects cellular stress, tissue inflammation, and molecular damage in real time.
                </p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Precision pharmaceutical delivery meets distributed intelligence. Instead of flooding your system, drugs are released only where needed, in the exact dose your cells require—all guided by quantum-safe decision logic running on Pebble.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Targeted Therapeutics</p>
                      <p className="text-xs text-slate-400">Anchor Matter carries drugs directly to inflamed or damaged tissue.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Real-Time Dosing</p>
                      <p className="text-xs text-slate-400">Biocompatible sensors detect treatment response and adjust in milliseconds.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Tissue Regeneration</p>
                      <p className="text-xs text-slate-400">Anchor scaffolds guide cellular repair while immune-tolerant and auditable.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/30 p-8 text-center">
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-semibold">Healthcare Applications</div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Chronic Pain Management</p>
                    <p className="text-xs text-slate-400 mt-2">Precision opioid delivery with no system-wide toxicity.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Autoimmune Modulation</p>
                    <p className="text-xs text-slate-400 mt-2">Calm-gated immune suppression. Inflammation detection and response.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Stroke Recovery</p>
                    <p className="text-xs text-slate-400 mt-2">Anchor guides neuroplasticity. Neural regeneration on demand.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Post-Surgical Healing</p>
                    <p className="text-xs text-slate-400 mt-2">Active tissue repair. Infection prevention. Scar minimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gene Augmentation & Adaptive Biology */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="genetics">
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center lg:grid-flow-col-dense">
              <div className="rounded-xl border border-slate-700 bg-slate-900/30 p-8 text-center">
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-semibold">Genetic Programs</div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Stress Response Optimization</p>
                    <p className="text-xs text-slate-400 mt-2">Cortisol management through adaptive expression tuning.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Metabolic Flexibility</p>
                    <p className="text-xs text-slate-400 mt-2">Switch between fuel sources based on calm-state detection.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Circadian Entrainment</p>
                    <p className="text-xs text-slate-400 mt-2">Melatonin and cortisol tuning via quantum-gated biology.</p>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 border border-slate-700 p-4">
                    <p className="text-sm font-semibold text-cyan-300">Mitochondrial Performance</p>
                    <p className="text-xs text-slate-400 mt-2">Real-time ATP production scaling. Hypoxia resilience.</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-3">
                  Guided Evolution
                </p>
                <h2 className="text-2xl font-semibold text-slate-50 mb-4">
                  Your biology, optimized. In real time.
                </h2>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Gene augmentation isn't science fiction—it's molecular tuning. When your Pebble detects a calm state, Drive Channel opens a quantum gate: safe instructions flow to Anchor Matter in your tissues. Your cells respond by adjusting protein synthesis, enzyme activity, even gene expression.
                </p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  No permanent edits. No viral vectors. Reversible, bounded, and auditable. Your adaptive biology runs on your terms, with your consciousness in the loop. Evolution, but you're in control.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Ephemeral Expression</p>
                      <p className="text-xs text-slate-400">Genetic changes last hours to days. No permanent alteration.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Verified Safe Bounds</p>
                      <p className="text-xs text-slate-400">Each directive is integrity-checked. Mutations and off-targets are impossible.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 font-semibold">•</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Consent-Gated</p>
                      <p className="text-xs text-slate-400">Your calm state is the gate. Your intention, translated by AI, is the map.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* qE Stack */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="stack">
          <StackComponentsVisualization />
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <h2 className="text-2xl font-semibold text-slate-50">The qE Stack</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              From wrist to steel beam, qE is a full-stack platform for active
              resilience.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Pebble™
                </h3>
                <p className="mt-2 text-xs">
                  Calm-gated wearable with integrated photonic lattice, sensors,
                  and edge AI. Designed for humans in the loop—not out of it.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Anchor Matter™
                </h3>
                <p className="mt-2 text-xs">
                  Self-sensing, self-adjusting materials for glass, steel, and
                  advanced composites, plus LM-series bounding aerosols for
                  controlled environments.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Drive Channel
                </h3>
                <p className="mt-2 text-xs">
                  A secure, low-energy control layer that coordinates Pebble and
                  Anchor. Built to be auditable, bounded, and scientifically
                  testable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics */}
        <section className="border-b border-slate-900 bg-slate-950 relative overflow-hidden" id="ethics">
          <EthicsSafetyVisualization />
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              Built with guardrails.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Technology that touches the physical world demands more than nice
              slide decks. It needs real limits.
            </p>
            <div className="mt-6 grid gap-6 text-xs text-slate-300 md:grid-cols-2">
              <ul className="space-y-2">
                <li>• No black-box miracles: every intervention is logged.</li>
                <li>
                  • Bounded deployments: Anchor runs inside defined risk
                  envelopes.
                </li>
                <li>
                  • Internal ethics &amp; safety council with veto power over
                  demos and deployments.
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  • Science-first claims, backed by experiments and external
                  review where it counts.
                </li>
                <li>
                  • Designed to coexist with regulators, insurers, and safety
                  officers—not fight them.
                </li>
              </ul>
            </div>
            <button className="mt-6 rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold text-slate-100 hover:border-cyan-400">
              Read Ethics &amp; Safety Overview
            </button>
          </div>
        </section>

        {/* Blog reference */}
        <section className="bg-slate-950 relative overflow-hidden" id="blog">
          <ResearchVisualization />
          <div className="mx-auto max-w-6xl px-4 py-12 relative z-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              Research, without the noise.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Get curated updates on entangled photons, active materials, and the calm interfaces that make qE possible.
            </p>
            <div className="mt-6 grid gap-4 text-xs text-slate-200 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 shadow-lg shadow-cyan-500/5">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-300">
                  Blog
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-50">
                  Explore the qE perspective
                </h3>
                <p className="mt-2 text-slate-300">
                  Visit our research blog to see how quantum-aware wearables, Anchor Matter, and the Drive Channel come together in real deployments.
                </p>
                <a
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold"
                >
                  Read the qE Blog
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}

/**
 * Nx/Vite expects a default export from this file.
 * We wrap the splash page in an App component and export it.
 */
export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<QESplashPage />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
        <Route path="/technical-overview" element={<TechnicalOverviewPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
