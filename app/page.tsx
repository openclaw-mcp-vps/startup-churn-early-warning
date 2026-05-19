export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Early Warning System
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Customer Churn<br />
          <span className="text-[#58a6ff]">30 Days Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes user behavior patterns and engagement signals to surface at-risk customers before they cancel — giving your team time to act.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📊', title: 'Behavior Analysis', desc: 'Tracks login frequency, feature usage, and session depth to build risk profiles.' },
            { icon: '🔔', title: 'Early Alerts', desc: 'Get Slack or email alerts when a customer crosses a churn-risk threshold.' },
            { icon: '🎯', title: 'Actionable Playbooks', desc: 'Each at-risk customer gets a suggested intervention based on their churn signals.' }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Up to 1,000 tracked customers',
              '30-day churn prediction window',
              'Slack & email alerts',
              'CSV + API data import',
              'Intervention playbooks',
              'Priority support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does ChurnGuard connect to my customer data?',
              a: 'ChurnGuard integrates via REST API or CSV upload. You can push events from your app directly, or import historical data to get predictions immediately.'
            },
            {
              q: 'How accurate are the churn predictions?',
              a: 'Accuracy improves with more data. Most customers see 75–90% precision after 30 days of event tracking. The model retrains weekly on your specific usage patterns.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel anytime from your billing portal. You keep access until the end of your billing period with no hidden fees.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
