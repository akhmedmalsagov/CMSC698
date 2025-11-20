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

/* Material types */

type MaterialVideo = {
  title: string;
  url: string;
};

type MaterialSubsection = {
  id: string;
  title: string;
  description?: string;
  videos: MaterialVideo[];
};

type MaterialCategory = {
  id: string;
  label: string; // short label: "Ice Skills"
  title: string; // headline inside tab
  description: string;
  imageUrl?: string; // optional image per tab later
  subsections: MaterialSubsection[];
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

/* Material data – replace URLs with your real YouTube links */

const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: "ice-skills",
    label: "Ice Skills",
    title: "On-Ice Skill Development",
    description:
      "Edges, deception, shooting in stride, and game-speed habits.",
    imageUrl: "/material/ice-skills.jpg", // optional: put file in /public/material
    subsections: [
      {
        id: "skating",
        title: "Skating",
        description: "Edges, crossovers, first three steps, acceleration.",
        videos: [
          {
            title: "Edge Work – Inside & Outside Edges",
            url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
          },
          {
            title: "Explosive First Three Steps",
            url: "https://www.youtube.com/watch?v=YYYYYYYYYYY",
          },
        ],
      },
      {
        id: "stickhandling",
        title: "Stickhandling",
        description: "Deception, weight transfer, puck protection.",
        videos: [
          {
            title: "Puck Protection Along the Boards",
            url: "https://www.youtube.com/watch?v=ZZZZZZZZZZZ",
          },
        ],
      },
      {
        id: "shooting",
        title: "Shooting",
        description: "Release speed, accuracy, shooting in stride.",
        videos: [
          {
            title: "Shooting in Stride Breakdown",
            url: "https://www.youtube.com/watch?v=AAAAAAAAAAA",
          },
        ],
      },
      {
        id: "tactics",
        title: "Tactics",
        description: "Hockey IQ, entries, forecheck, D-zone habits.",
        videos: [
          {
            title: "Offensive Zone Entries",
            url: "https://www.youtube.com/watch?v=BBBBBBBBBBB",
          },
        ],
      },
    ],
  },
  {
    id: "off-ice",
    label: "Off-Ice Training",
    title: "Gym, Power, and Recovery",
    description:
      "Conditioning blocks, jumps, strength progressions, mobility, and recovery.",
    imageUrl: "/material/off-ice.jpg",
    subsections: [
      {
        id: "stamina",
        title: "Stamina & Conditioning",
        videos: [
          {
            title: "Tempo Runs for Hockey",
            url: "https://www.youtube.com/watch?v=CCCCCCCCCCC",
          },
        ],
      },
      {
        id: "power",
        title: "Power & Explosiveness",
        videos: [
          {
            title: "Jump Progressions for Explosive Skating",
            url: "https://www.youtube.com/watch?v=DDDDDDDDDDD",
          },
        ],
      },
      {
        id: "strength",
        title: "Strength",
        videos: [
          {
            title: "Full-Body Strength for Hockey",
            url: "https://www.youtube.com/watch?v=EEEEEEEEEEE",
          },
        ],
      },
      {
        id: "mobility",
        title: "Mobility & Flexibility",
        videos: [
          {
            title: "Hip & Ankle Mobility Routine",
            url: "https://www.youtube.com/watch?v=FFFFFFFFFFF",
          },
        ],
      },
      {
        id: "recovery",
        title: "Recovery",
        videos: [
          {
            title: "Breathing Work & Sleep Tips",
            url: "https://www.youtube.com/watch?v=GGGGGGGGGGG",
          },
        ],
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition",
    title: "Fuel for Performance",
    description:
      "Bulking phases, cutting phases, and staying game-ready all season.",
    imageUrl: "/material/nutrition.jpg",
    subsections: [
      {
        id: "bulking",
        title: "Bulking – Clean Mass",
        videos: [
          {
            title: "In-Season Bulking Nutrition",
            url: "https://www.youtube.com/watch?v=HHHHHHHHHHH",
          },
        ],
      },
      {
        id: "maintenance",
        title: "Maintenance",
        videos: [
          {
            title: "Game Day Meal Examples",
            url: "https://www.youtube.com/watch?v=IIIIIIIIIII",
          },
        ],
      },
      {
        id: "cutting",
        title: "Cutting Weight",
        videos: [
          {
            title: "Smart Body-Fat Reduction",
            url: "https://www.youtube.com/watch?v=JJJJJJJJJJJ",
          },
        ],
      },
    ],
  },
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

/* ---------- MATERIAL SECTION (NEW DESIGN) ---------- */

function MaterialSection() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openSubsectionId, setOpenSubsectionId] = useState<string | null>(null);

  // Read current category from URL (?materialCat=ice-skills)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const readFromUrl = () => {
      const url = new URL(window.location.href);
      const cat = url.searchParams.get("materialCat");
      setOpenCategoryId(cat);
      setOpenSubsectionId(null);
    };

    // initial read
    readFromUrl();

    // handle browser back/forward
    const onPop = () => readFromUrl();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    url.searchParams.set("materialCat", categoryId);
    window.history.pushState({}, "", url.toString());

    setOpenCategoryId(categoryId);
    setOpenSubsectionId(null);
  };

  const currentCategory = openCategoryId
    ? MATERIAL_CATEGORIES.find((cat) => cat.id === openCategoryId) ?? null
    : null;

  /* -------- VIEW 1: ONLY 3 TABS -------- */
  if (!currentCategory) {
    return (
      <section className="material-page">
        <header className="material-header">
          <p className="platform-eyebrow">Material</p>
          <h1 className="platform-heading material-heading">ERZI Training Library</h1>
          <p className="platform-lead material-subtitle">
            Every client gets a custom path through these blocks. This is where your skating,
            skills, gym work, and nutrition plans will live.
          </p>
        </header>

        <div className="material-tabs">
          {MATERIAL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className="material-tab"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="material-tab-inner">
                <div className="material-tab-text">
                  <h2 className="material-tab-label">{category.label}</h2>
                  <h3 className="material-tab-title">{category.title}</h3>
                  <p className="material-tab-description">{category.description}</p>
                </div>
                <div className="material-tab-image" />
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  /* -------- VIEW 2: ONE CATEGORY, WIDE SECTION CARDS -------- */

  return (
    <section className="material-page">
      <header className="material-header">
        <p className="platform-eyebrow">Material</p>
        <h1 className="platform-heading material-heading">
          {currentCategory.label}
        </h1>
        <p className="platform-lead material-subtitle">
          {currentCategory.description}
        </p>
        {/* NOTE: no visible “Back” button here on purpose.
            User uses browser Back to go to the 3-tab view. */}
      </header>

      <div className="material-section-list">
        {currentCategory.subsections.map((sub) => {
          const isOpen = openSubsectionId === sub.id;

          return (
            <div key={sub.id} className="material-subsection-wrapper">
              <button
                className={
                  "material-subsection-wide" + (isOpen ? " material-subsection-wide-open" : "")
                }
                onClick={() =>
                  setOpenSubsectionId((prev) => (prev === sub.id ? null : sub.id))
                }
              >
                <div className="material-subsection-wide-text">
                  <h3 className="material-subsection-title">{sub.title}</h3>
                  {sub.description && (
                    <p className="material-subsection-description">
                      {sub.description}
                    </p>
                  )}
                </div>
                <span className="material-subsection-chevron">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={
                  "material-subsection-body" + (isOpen ? " material-subsection-body-open" : "")
                }
              >
                {isOpen && (
                  <ul className="material-videos-list">
                    {sub.videos.map((video) => (
                      <li key={video.url} className="material-video-item">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noreferrer"
                          className="material-video-link"
                        >
                          {video.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


/* ---------- LEAGUES SECTION ---------- */

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
