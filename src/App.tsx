import { Navbar1 } from "./components/ui/navbar-1"
import { LiquidButton, GlassFilter } from "./components/ui/liquid-glass-button"
import { motion } from "motion/react"

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0f0d] overflow-x-hidden font-sans selection:bg-emerald-500/30">
      <GlassFilter />
      <Navbar1 />
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/90 via-[#0a0f0d]/40 to-[#0a0f0d] z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center opacity-70"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              Enterprise Vision AI für Geflügel
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white mb-6 tracking-tight" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.8)' }}>
              Kenne deine Herde.<br />
              <span className="text-emerald-400">Ei für Ei.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8)' }}>
              Bringe modernste Vision Language Models direkt in deinen Stall. Überwache das Legeverhalten, erkenne Krankheiten frühzeitig und maximiere den Ertrag mit 99,4% Genauigkeit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <LiquidButton size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Demo anfordern
            </LiquidButton>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors duration-300 font-medium tracking-wider uppercase text-sm"
            >
              Preise ansehen
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Features (Alternating Layout) */}
      <section id="features" className="relative w-full bg-[#0a0f0d] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          
          {/* Feature 1: Image Right, Text Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">01 // Ertragsvorhersage</div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">Jedes Ei, vorhergesagt.</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Unsere Vision ML Modelle wurden mit Millionen Stunden Videomaterial aus Hühnerställen trainiert. Wir zählen nicht nur Hühner; wir analysieren die Dauer im Nest, Bewegungsmuster und Fressgewohnheiten, um deinen Ertrag mit beispielloser Genauigkeit vorherzusagen.
              </p>
              <ul className="space-y-4 pt-4">
                {['Individuelles Tracking (ID-Zuweisung)', 'Echtzeit-Dashboard für Ertragsprognosen', 'Automatischer ERP- & Inventar-Sync'].map((item, i) => (
                  <li key={i} className="flex items-center text-white/80 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-4 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex-1 w-full flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* 1:1 Aspect Ratio Container with Tech UI */}
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.05)] group">
                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="/chicken-ml.png" 
                  alt="Huhn mit ML Bounding Box" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Tech HUD Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Crosshairs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-500/30 rounded-lg">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
                  </div>
                </div>
                {/* Mockup UI Panel */}
                <div className="absolute bottom-6 left-6 right-6 z-30 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] text-emerald-400 font-mono tracking-wider mb-1">ID: HEN-042-ALPHA</div>
                    <div className="text-white font-medium text-sm">Aktion: Nisten</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-white/50 font-mono tracking-wider mb-1">KONFIDENZ</div>
                    <div className="text-emerald-400 font-mono font-bold text-sm">99.2%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">02 // Bedrohungserkennung</div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">FoxGuard™ Sicherheit.</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Schlafe beruhigt. Unsere Edge-Computing-Sensoren nutzen Nachtsicht-Modelle, die speziell auf häufige Raubtiere trainiert sind. Füchse, Habichte und Marder werden sofort erkannt und lösen automatische Abschreckungsmaßnahmen aus, bevor sie den Stall erreichen.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-4 group">
                Erkennungsprotokolle ansehen 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex-1 w-full flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.05)] group">
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="/foxguard.png" 
                  alt="Nachtsicht Raubtiererkennung" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Alert UI Overlay */}
                <div className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-md bg-red-500/20 border border-red-500/50 backdrop-blur-md flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-red-400 font-mono text-xs font-bold tracking-wider">BEDROHUNG ERKANNT</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Section 3: Floating Showcase (The Hardware) */}
      <section className="relative w-full bg-[#0a0f0d] text-white py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: The Floating Hardware with Dynamic Glow */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[500px] md:min-h-[700px]">
              
              {/* Refined, Luxurious Aura */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="w-[120%] h-[120%] rounded-full opacity-40 mix-blend-screen"
                  style={{
                    background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.05) 40%, transparent 70%)",
                    filter: "blur(60px)"
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              {/* The Transparent Image (Slower, more elegant animation) */}
              <motion.div
                className="relative z-10 w-full max-w-lg"
                animate={{ 
                  y: [-8, 8, -8],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="/transparent-camera.png" 
                  alt="Floating AI Camera"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            </div>

            {/* Right: The Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h3 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
                  The Omni-Eye Sensor.
                </h3>
                <p className="text-white/60 text-xl font-light leading-relaxed">
                  A weather-proof, solar-powered edge computing device. It processes 4K video locally in the coop, ensuring your data never leaves the farm and latency is practically zero.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
                  Plug & Play Setup
                </h3>
                <p className="text-white/60 text-xl font-light leading-relaxed">
                  No complex wiring. Just mount it to the roof of your coop, scan the QR code with the Leg-Eier app, and let the neural network calibrate itself to your flock within 24 hours.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* Section 4: The Egg Dashboard (Pricing/CTA) */}
      <section id="pricing" className="relative w-full py-32 overflow-hidden">
        {/* Realistic Scenery Background for Pricing */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0f0d]/80 backdrop-blur-[8px] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-[#0a0f0d] z-10" />
          <img 
            src="/pricing-bg.jpg" 
            alt="Modern farm server room" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Join the flock.</h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              From backyard hobbyists to commercial free-range operations. We have the right hardware and ML tier for your farm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pricing Tier 1 */}
            <motion.div 
              className="relative rounded-[2rem] p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-white mb-2">Backyard Coop</h3>
                <p className="text-white/50 font-light">For up to 20 chickens.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-serif text-white">€49</span>
                <span className="text-white/50 ml-2">/ month</span>
                <div className="text-sm text-emerald-400/80 mt-2">+ €199 one-time hardware fee</div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['1x Omni-Eye Sensor included', 'Basic yield prediction', 'FoxGuard™ alerts', '7-day video history'].map((feature, i) => (
                  <li key={i} className="flex items-center text-white/80 font-light">
                    <svg className="w-5 h-5 text-white/50 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <LiquidButton size="lg" className="w-full mt-4">
                Pre-order Now
              </LiquidButton>
            </motion.div>

            {/* Pricing Tier 2 (Pro) */}
            <motion.div 
              className="relative rounded-[2rem] p-10 bg-white/10 backdrop-blur-2xl border border-white/20 flex flex-col overflow-hidden"
              style={{ backdropFilter: 'url("#container-glass") blur(20px)', WebkitBackdropFilter: 'url("#container-glass") blur(20px)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Complex liquid shadow for the pro tier */}
              <div className="absolute inset-0 z-0 rounded-[2rem] pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.2),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.4),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.1),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.5),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.2),inset_0_0_8px_6px_rgba(255,255,255,0.05),inset_0_0_4px_2px_rgba(255,255,255,0.1)]" />
              
              {/* Subtle inner glow for the pro tier */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/20 blur-[60px] pointer-events-none z-0" />
              
              <div className="relative z-10 mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-4 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
                  KOMMERZIELL
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Freiland Enterprise</h3>
                <p className="text-white/50 font-light">Für unbegrenzte Herdengrößen.</p>
              </div>
              <div className="relative z-10 mb-8">
                <span className="text-5xl font-serif text-white">Custom</span>
                <div className="text-sm text-emerald-400/80 mt-2">Hardware & Software Bundle</div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow relative z-10">
                {['Unbegrenzte Omni-Eye Sensoren', 'Krankheitsausbruch-Vorhersage', 'Klimasteuerungs-Sync', 'API-Zugang & ERP-Integration'].map((feature, i) => (
                  <li key={i} className="flex items-center text-white/90 font-light">
                    <svg className="w-5 h-5 text-emerald-400 mr-3 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="relative z-10 mt-4">
                <LiquidButton size="lg" className="w-full">
                  Vertrieb kontaktieren
                </LiquidButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative w-full bg-gradient-to-b from-[#0a0f0d] via-[#05100a] to-[#020805] pt-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center pb-40">
          <div className="text-3xl font-serif font-bold tracking-tighter mb-8 text-white">Leg-Eier.de</div>
          <div className="flex space-x-8 mb-12">
            {["Twitter", "Instagram", "Discord", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-white/50 hover:text-white text-sm transition-colors uppercase tracking-wider">
                {social}
              </a>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-light border-t border-white/10 pt-8">
            <p>© 2026 Leg-Eier.de Agritech. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white/60 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white/60 transition-colors">AGB</a>
            </div>
          </div>
        </div>

        {/* Animated Landscape at the very bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none z-20">
          {/* Ground / Horizon Line (Emerald Green) */}
          <div className="absolute bottom-0 w-full h-12 bg-[#020805] border-t border-emerald-500/40 shadow-[0_-4px_20px_rgba(16,185,129,0.15)]"></div>

          {/* Animated Chicken Silhouette */}
          <motion.div
            className="absolute bottom-10 z-20 opacity-80"
            initial={{ x: "-10vw" }}
            animate={{ x: "110vw" }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-4xl filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">🐓</span>
          </motion.div>
          
          {/* Little chicks following */}
          <motion.div
            className="absolute bottom-10 z-20 opacity-60"
            initial={{ x: "-15vw" }}
            animate={{ x: "105vw" }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-2xl filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">🐥🐥</span>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
