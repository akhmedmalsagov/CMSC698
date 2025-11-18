'use client';

import { useState } from 'react';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
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
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      dateOfBirth: formData.get('dateOfBirth'),
      team: formData.get('team'),
      position: formData.get('position'),
      heightCm: formData.get('heightCm'),
      weightKg: formData.get('weightKg'),
      favoriteNhlTeam: formData.get('favoriteNhlTeam'),
    };

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Could not sign up');
    }
    setLoading(false);
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2 className="section-title">Join ERZI</h2>
        <h3 className="big">Create your player account</h3>

        {ok && (
          <p className="subtext" style={{ color: '#4ade80' }}>
            Account created. You can now log in.
          </p>
        )}
        {error && (
          <p className="subtext" style={{ color: '#f97373' }}>
            {error}
          </p>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label>Email</label>
              <input name="email" type="email" required />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input name="password" type="password" required />
            </div>

            <div className="form-field">
              <label>First name</label>
              <input name="firstName" required />
            </div>
            <div className="form-field">
              <label>Last name</label>
              <input name="lastName" required />
            </div>

            <div className="form-field">
              <label>Date of birth</label>
              <input name="dateOfBirth" type="date" required />
            </div>

            <div className="form-field">
              <label>Team</label>
              <input name="team" />
            </div>

            <div className="form-field">
              <label>Position</label>
              <select name="position" defaultValue="Forward">
                <option value="Forward">Forward</option>
                <option value="Center Forward">Center Forward</option>
                <option value="Defenseman">Defenseman</option>
                <option value="Goalie">Goalie</option>
              </select>
            </div>

            <div className="form-field">
              <label>Height (cm)</label>
              <input name="heightCm" type="number" />
            </div>

            <div className="form-field">
              <label>Weight (kg)</label>
              <input name="weightKg" type="number" />
            </div>

            <div className="form-field">
              <label>Favorite NHL team</label>
              <input name="favoriteNhlTeam" />
            </div>
          </div>

          <button className="btn" disabled={loading}>
            {loading ? 'Creating account…' : 'Sign Up'}
          </button>
        </form>
      </div>
    </section>
  );
}
