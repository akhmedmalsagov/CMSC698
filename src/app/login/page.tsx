'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      // ✅ open ERZI platform in a NEW tab
    window.open('/platform', '_blank');

    } else {
    const data = await res.json().catch(() => ({}));
    setError(data.error || 'Could not log in');
    }
    setLoading(false);
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 480 }}>
        <h2 className="section-title">Player Access</h2>
        <h3 className="big">Log in</h3>

        {error && (
          <p className="subtext" style={{ color: '#f97373' }}>
            {error}
          </p>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Email</label>
            <input name="email" type="email" required />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input name="password" type="password" required />
          </div>

          <button className="btn" disabled={loading}>
            {loading ? 'Logging in…' : 'Log In'}
          </button>
        </form>
      </div>
    </section>
  );
}
