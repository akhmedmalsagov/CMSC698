"use client";

import React, { useEffect, useState } from "react";

/* ---------- TYPES ---------- */

type Section = "news" | "dashboard" | "calendar" | "material" | "leagues" | "account";

type Player = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  team: string | null;
  position: string | null;
  height_cm: number | null;
  weight_kg: number | null;
  favorite_nhl_team: string | null;
  avatar_url: string | null;
};

/* Nav config so you can reorder / rename in one place */
const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "news",      label: "News Feed" },
  { id: "dashboard", label: "Dashboard" },
  { id: "calendar",  label: "Calendar" },
  { id: "material",  label: "Material" },
  { id: "leagues",   label: "Leagues" },
  { id: "account",   label: "Account" },
];

/* ---------- PAGE SHELL ---------- */

export default function PlatformPage() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [active, setActive] = useState<Section>("news");

  return (
    <div className={`platform-shell ${menuOpen ? "sidebar-open" : ""}`}>
      {/* HEADER */}
      <header className="platform-header">
        <button
          className="platform-logo-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle ERZI menu"
        >
          <span className="platform-logo-mark">E</span>
        </button>

        <div className="platform-header-title">ERZI</div>
      </header>

      {/* SIDEBAR MENU */}
      <aside className="platform-sidebar">
        <div className="platform-sidebar-inner">
          <p className="platform-sidebar-label">Menu</p>

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`platform-nav-item ${active === item.id ? "active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="platform-main">
        {active === "news" && <NewsFeedSection />}
        {active === "material" && <MaterialSection />}
        {active === "leagues" && <LeaguesSection />}
        {active === "account" && <AccountSection />}

        {active === "dashboard" && (
          <PlaceholderSection
            title="Dashboard – Coming Soon"
            body="Here you’ll see your ERZI score, consistency streaks, and progress for each skill block once we wire everything up."
          />
        )}

        {active === "calendar" && (
          <PlaceholderSection
            title="Calendar – Coming Soon"
            body="Your weekly hockey development schedule will live here: ice sessions, gym work, video to watch, and recovery days."
          />
        )}
      </main>
    </div>
  );
}

/* ---------- SECTIONS ---------- */

function NewsFeedSection() {
  return (
    <section>
      <p className="platform-eyebrow">ERZI PLATFORM</p>
      <h1 className="platform-heading">Tampa Bay Lightning – NHL News Feed</h1>
      <p className="platform-lead">
        When you log in, this page will show NHL.com news &amp; scores for your favorite team.
        Click any card to jump straight to NHL.com.
      </p>

      <div className="platform-grid-2">
        <article className="platform-card">
          <p className="platform-card-meta">NHL.COM • 2 hours ago</p>
          <h3 className="platform-card-title">
            Tampa Bay Lightning push for playoff spot with big home win
          </h3>
          <p className="platform-card-body">
            Deep dive on last night’s game, key plays, and what it means for the standings.
          </p>
          <a
            href="https://www.nhl.com"
            target="_blank"
            rel="noreferrer"
            className="platform-card-link"
          >
            Open on NHL.com →
          </a>
        </article>

        <article className="platform-card">
          <p className="platform-card-meta">NHL.COM • 5 hours ago</p>
          <h3 className="platform-card-title">Top 10 goals from last night around the NHL</h3>
          <p className="platform-card-body">
            Highlight reel from every rink in the league.
          </p>
          <a
            href="https://www.nhl.com"
            target="_blank"
            rel="noreferrer"
            className="platform-card-link"
          >
            Open on NHL.com →
          </a>
        </article>

        <article className="platform-card">
          <p className="platform-card-meta">NHL.COM • Today</p>
          <h3 className="platform-card-title">League scoreboard &amp; standings</h3>
          <p className="platform-card-body">
            Check every score, every night, in one place.
          </p>
          <a
            href="https://www.nhl.com"
            target="_blank"
            rel="noreferrer"
            className="platform-card-link"
          >
            Open on NHL.com →
          </a>
        </article>
      </div>
    </section>
  );
}

function MaterialSection() {
  const iceSkills = [
    "Skating – edges, crossovers, first three steps",
    "Stickhandling – deception, weight transfer, puck protection",
    "Shooting – release speed, accuracy, shooting in stride",
    "Tactics – hockey IQ, entries, forecheck, D-zone habits",
  ];

  const offIce = [
    "Stamina – conditioning blocks & tempo runs",
    "Power – jumps, sprints, explosive work",
    "Strength – full-body strength progressions",
    "Mobility & Flexibility – hips, ankles, thoracic spine",
    "Recovery – off-days, sleep, breathing work",
  ];

  const nutrition = [
    "Bulking – clean mass for in-season or off-season",
    "Staying in shape – maintenance plans",
    "Cutting weight – smart body-fat reduction for speed",
  ];

  return (
    <section>
      <p className="platform-eyebrow">TRAINING LIBRARY</p>
      <h1 className="platform-heading">Your ERZI Material</h1>
      <p className="platform-lead">
        Every client gets a custom path through these blocks. This is where your skating, skills,
        gym work, and nutrition plans will live.
      </p>

      <div className="platform-grid-3">
        <div className="platform-panel">
          <h3 className="platform-panel-title">Ice Skills</h3>
          <ul className="platform-list">
            {iceSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="platform-panel">
          <h3 className="platform-panel-title">Off-Ice Training</h3>
          <ul className="platform-list">
            {offIce.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="platform-panel">
          <h3 className="platform-panel-title">Nutrition</h3>
          <ul className="platform-list">
            {nutrition.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LeaguesSection() {
  return (
    <section>
      <p className="platform-eyebrow">ROAD TO THE NHL</p>
      <h1 className="platform-heading">Leagues &amp; Pathways</h1>
      <p className="platform-lead">
        This is the roadmap we’ll use with you and your family: where you are now, what the next
        realistic step is, and how to move up without getting lost.
      </p>

      <div className="platform-grid-4">
        <div className="platform-panel">
          <h3 className="platform-panel-title">Youth &amp; Prep</h3>
          <ul className="platform-list">
            <li>Local youth &amp; AAA</li>
            <li>U14 / U15 / U16 / U18</li>
            <li>Prep &amp; Academy programs</li>
            <li>Showcase &amp; exposure events</li>
          </ul>
        </div>

        <div className="platform-panel">
          <h3 className="platform-panel-title">Junior</h3>
          <ul className="platform-list">
            <li>NA3 / Tier-III Junior</li>
            <li>NAHL / BCHL / CJHL</li>
            <li>USHL – top US junior league</li>
            <li>CHL (OHL / WHL / QMJHL)</li>
          </ul>
        </div>

        <div className="platform-panel">
          <h3 className="platform-panel-title">College &amp; University</h3>
          <ul className="platform-list">
            <li>NCAA Division I</li>
            <li>NCAA Division III</li>
            <li>USports / Canadian University</li>
            <li>ACHA &amp; other club routes</li>
          </ul>
        </div>

        <div className="platform-panel">
          <h3 className="platform-panel-title">Pro &amp; Elite</h3>
          <ul className="platform-list">
            <li>Europe Pro (SHL, Liiga, DEL, etc.)</li>
            <li>AHL – NHL development league</li>
            <li>NHL – the top level</li>
            <li>National Teams &amp; IIHF events</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- ACCOUNT SECTION (uses API) ---------- */

function AccountSection() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingAvatar, setSavingAvatar] = useState(false);

  useEffect(() => {
    const loadMe = async () => {
      try {
        const res = await fetch("/api/me");
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data = await res.json();
        setPlayer(data.player);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadMe();
  }, []);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setSavingAvatar(true);
    try {
      const res = await fetch("/api/avatar", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setPlayer((prev) =>
          prev ? { ...prev, avatar_url: data.avatarUrl } : prev
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSavingAvatar(false);
    }
  };

  if (loading) {
    return (
      <section>
        <p className="platform-eyebrow">YOUR PROFILE</p>
        <h1 className="platform-heading">Account &amp; Subscription</h1>
        <p className="platform-lead">Loading your profile…</p>
      </section>
    );
  }

  if (!player) {
    return (
      <section>
        <p className="platform-eyebrow">YOUR PROFILE</p>
        <h1 className="platform-heading">Account &amp; Subscription</h1>
        <p className="platform-lead">
          We couldn’t load your player info. Try logging out and in again.
        </p>
      </section>
    );
  }

  const fullName = `${player.first_name} ${player.last_name}`;
  const avatarLetter = player.first_name
    ? player.first_name[0].toUpperCase()
    : "P";

  return (
    <section>
      <p className="platform-eyebrow">YOUR PROFILE</p>
      <h1 className="platform-heading">Account &amp; Subscription</h1>
      <p className="platform-lead">
        This information comes from your sign-up. Later we’ll make every field editable; for now you
        can already upload your avatar.
      </p>

      <div className="account-grid">
        {/* Left: profile info */}
        <div className="platform-panel">
          <div className="account-header">
            <label className="account-avatar-wrapper">
              {player.avatar_url ? (
                <img
                  src={player.avatar_url}
                  alt={fullName}
                  className="account-avatar-image"
                />
              ) : (
                <div className="account-avatar-placeholder">
                  {avatarLetter}
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
              <span className="account-avatar-edit">
                {savingAvatar ? "Saving…" : "Change photo"}
              </span>
            </label>

            <div>
              <h3 className="platform-panel-title">Player Profile</h3>
              <p className="platform-card-meta">
                This is your ERZI profile. We’ll add editing of name, team and links here later.
              </p>
            </div>
          </div>

          <div className="account-fields">
            <div className="account-field">
              <span className="account-label">Name</span>
              <span className="account-value">{fullName}</span>
            </div>
            <div className="account-field">
              <span className="account-label">Email</span>
              <span className="account-value">{player.email}</span>
            </div>
            <div className="account-field">
              <span className="account-label">Team</span>
              <span className="account-value">
                {player.team || "Not set yet"}
              </span>
            </div>
            <div className="account-field">
              <span className="account-label">Position</span>
              <span className="account-value">
                {player.position || "Not set yet"}
              </span>
            </div>
            <div className="account-field">
              <span className="account-label">Height</span>
              <span className="account-value">
                {player.height_cm ? `${player.height_cm} cm` : "Not set yet"}
              </span>
            </div>
            <div className="account-field">
              <span className="account-label">Weight</span>
              <span className="account-value">
                {player.weight_kg ? `${player.weight_kg} kg` : "Not set yet"}
              </span>
            </div>
            <div className="account-field">
              <span className="account-label">Favorite NHL Team</span>
              <span className="account-value">
                {player.favorite_nhl_team || "Not set yet"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: subscription (UI only for now) */}
        <div className="platform-panel">
          <h3 className="platform-panel-title">Subscription</h3>
          <p className="platform-card-meta">
            In the future this connects to Stripe or another payment system.
          </p>

          <div className="subscription-box">
            <div>
              <p className="subscription-plan">ERZI Elite Development</p>
              <p className="subscription-price">$49 / month</p>
              <p className="subscription-note">
                Access to all material blocks, weekly updates, and direct contact with ERZI mentors.
              </p>
            </div>

            <div className="subscription-actions">
              <button className="btn small">Manage Plan</button>
              <button className="btn-ghost small">Cancel Renewal</button>
            </div>
          </div>

          <p className="subscription-footnote">
            We’ll hook these buttons to real actions once payments are set up. For now it’s just the
            design and flow.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- GENERIC PLACEHOLDER ---------- */

function PlaceholderSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <p className="platform-eyebrow">COMING SOON</p>
      <h1 className="platform-heading">{title}</h1>
      <p className="platform-lead">{body}</p>
    </section>
  );
}
