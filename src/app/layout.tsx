import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERZI | Hockey Development Agency',
  description:
    'ERZI Hockey Development Agency — helping hockey prospects 14+ in Europe, Asia, and North America achieve their goals on and off the ice.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="site-header">
          <div className="nav">
            {/* Left: Brand */}
            <a className="brand" href="/" aria-label="ERZI Home">
              <span className="brand-mark" aria-hidden="true">E</span>
              <span className="brand-word">ERZI</span>
            </a>

            {/* Center: main nav stretched across white strip */}
            <nav className="nav-center" id="site-center" aria-label="Primary">
              <a href="#about">About</a>
              <a href="#approach">What We Do</a>
              <a href="#team">Mentors</a>
              <a href="#platform">Platform</a>
            </nav>

            {/* Right: actions */}
            <div className="nav-actions">
              <a href="#cta" className="btn btn-outline small">Contact</a>
              <a href="#login" className="btn btn-outline small">Log In</a>

            {/* Mobile menu button */}
              <button className="menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false" type="button">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <a className="brand" href="#">
                <span className="brand-mark">E</span><span className="brand-word">ERZI</span>
              </a>
              <p className="footnote">
                © <span id="year">{new Date().getFullYear()}</span> ERZI Hockey Development Agency. All rights reserved.
              </p>
            </div>
            <nav className="footer-links">
              <a href="#about">About</a>
              <a href="#approach">What We Do</a>
              <a href="#team">Mentors</a>
              <a href="#platform">Platform</a>
              <a href="#cta">Contact</a>
            </nav>
          </div>
        </footer>

        {/* tiny script for mobile nav; kept inlined to avoid an extra file */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              const btn = document.getElementById('menu-btn');
              const nav = document.getElementById('site-nav');
              if(!btn || !nav) return;
              const css = document.createElement('style');
              css.textContent = '#site-nav.open{display:grid;gap:10px;position:absolute;top:68px;right:16px;background:#0f1218;border:1px solid rgba(255,255,255,.08);padding:12px;border-radius:12px}@media(min-width:860px){#site-nav.open{display:flex;position:static;background:transparent;border:none;padding:0}}';
              document.head.appendChild(css);
              btn.addEventListener('click', ()=> {
                const open = nav.classList.toggle('open');
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
              });
            })();
          `
          }}
        />
      </body>
    </html>
  );
}
