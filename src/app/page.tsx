import Section from '@/components/Section';
import StatsBlock from '@/components/StatsBlock';
import PillarCard from '@/components/PillarCard';
import StaffGrid from '@/components/StaffGrid';
import { pillars } from '@/data/pillars';
import { stats } from '@/data/stats';
import { staff } from '@/data/staff';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
      {/* NEW: background slideshow layer */}
        <div className="hero-bg" aria-hidden="true">
          <span style={{ backgroundImage: 'url(/hero/01.jpg)' }} />
          <span style={{ backgroundImage: 'url(/hero/02.jpg)' }} />
          <span style={{ backgroundImage: 'url(/hero/03.jpg)' }} />
          <span style={{ backgroundImage: 'url(/hero/04.jpg)' }} />
          <span style={{ backgroundImage: 'url(/hero/05.jpg)' }} />
        </div>

        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Committed to our players' success.</h1>
            <p className="lead">
              We partner with hockey players worldwide to build elite skills, mindset, and opportunity—
              on and off the ice.
            </p>
            <div className="hero-actions">
              <a href="/signup" className="btn">Become a Client</a>
              <a href="#about" className="btn btn-ghost">Learn More</a>
            </div>
          </div>
        </div>
      </section>



      {/* ABOUT */}
      <Section id="about" eyebrow="About ERZI Hockey" title="A 360-degree approach.">
        <p>
          ERZI is a full-service hockey development agency serving prospects 14+ across Europe, Asia,
          and North America. We combine individual skill development, performance planning, mentorship,
          and career guidance to help players reach their highest level.
        </p>
        <p>
          Clients who sign with ERZI get members-only access to programs, videos, and articles customized
          to their needs. Our platform tracks training consistency and progress, building accountability
          and momentum—without micromanaging.
        </p>
      </Section>

      {/* WHAT WE DO */}
      <section id="approach" className="section alt">
        <div className="container grid-3">
          {pillars.map((p) => (
            <PillarCard key={p.title} title={p.title} body={p.body} />
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <Section
        id="platform"
        eyebrow="Member Platform"
        title="Coach access. Clear feedback. Progress that compounds."
      >
        <ul className="checklist">
          <li>Private dashboard with weekly score to encourage consistency.</li>
          <li>Video library: skating, skills, position-specific drills.</li>
          <li>Direct chat with assigned mentor/coach.</li>
          <li>Curated newsfeed of global hockey leagues.</li>
          <li>Summer &amp; off-season training blocks with measurable goals.</li>
        </ul>
        <div className="inline-cta">
          <a className="btn" href="#cta">Get Access</a>
          <a className="btn btn-outline" href="#login">Member Login</a>
        </div>
      </Section>

      {/* STATS (optional flourish) */}
      <StatsBlock stats={stats} />

      {/* TEAM */}
      <section id="team" className="section alt">
        <div className="container">
          <h2 className="section-title center">ERZI Mentors &amp; Coaches</h2>
          <p className="center subtext">Experienced staff dedicated to player growth on and off the ice.</p>
          <StaffGrid people={staff} />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="container cta-inner">
          <h2>Ready to chase your ceiling?</h2>
          <p>Join ERZI and get a bespoke plan, direct mentorship, and a pathway you can see.</p>
          <div className="hero-actions">
            <a href="#" className="btn">Apply Now</a>
            <a href="#about" className="btn btn-ghost">See How It Works</a>
          </div>
        </div>
      </section>
    </>
  );
}
