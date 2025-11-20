"use client";

import Image from "next/image";
import React, { useState } from "react";
import { materialCategories, MaterialCategory, MaterialSubsection } from "./materialData";

export default function MaterialPanel() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openSubsectionId, setOpenSubsectionId] = useState<string | null>(null);

  const handleCategoryClick = (category: MaterialCategory) => {
    if (openCategoryId === category.id) {
      // collapse if already open
      setOpenCategoryId(null);
      setOpenSubsectionId(null);
    } else {
      setOpenCategoryId(category.id);
      setOpenSubsectionId(null);
    }
  };

  const handleSubsectionClick = (subsection: MaterialSubsection) => {
    if (openSubsectionId === subsection.id) {
      setOpenSubsectionId(null);
    } else {
      setOpenSubsectionId(subsection.id);
    }
  };

  const activeCategory = materialCategories.find((c) => c.id === openCategoryId);
  const activeSubsection =
    activeCategory?.subsections.find((s) => s.id === openSubsectionId) ?? null;

  return (
    <div className="material-page">
      {/* Header centered in the middle */}
      <header className="material-header">
        <span className="material-kicker">MATERIAL</span>
        <h1 className="material-title">ERZI Training Library</h1>
        <p className="material-subtitle">
          Every client gets a custom path through these blocks. This is where your skating,
          skills, gym work, and nutrition plans will live.
        </p>
      </header>

      {/* Big wide tabs stacked vertically */}
      <section className="material-tabs">
        {materialCategories.map((category) => (
          <button
            key={category.id}
            className={`material-tab ${
              openCategoryId === category.id ? "material-tab-active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="material-tab-inner">
              <div className="material-tab-text">
                <h2 className="material-tab-label">{category.label}</h2>
                <h3 className="material-tab-title">{category.title}</h3>
                <p className="material-tab-description">{category.description}</p>
              </div>

              {category.imageUrl && (
                <div className="material-tab-image-wrapper">
                  <Image
                    src={category.imageUrl}
                    alt={category.label}
                    fill
                    className="material-tab-image"
                  />
                </div>
              )}
            </div>
          </button>
        ))}
      </section>

      {/* Subsections for the open category */}
      {activeCategory && (
        <section className="material-subsections">
          <h2 className="material-subsections-heading">
            {activeCategory.label} – Sections
          </h2>
          <div className="material-subsection-grid">
            {activeCategory.subsections.map((sub) => (
              <button
                key={sub.id}
                className={`material-subsection-card ${
                  openSubsectionId === sub.id ? "material-subsection-card-active" : ""
                }`}
                onClick={() => handleSubsectionClick(sub)}
              >
                <h3 className="material-subsection-title">{sub.title}</h3>
                {sub.description && (
                  <p className="material-subsection-description">{sub.description}</p>
                )}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Video list for the open subsection */}
      {activeSubsection && (
        <section className="material-videos">
          <h2 className="material-videos-heading">
            {activeSubsection.title} – Video Material
          </h2>
          <ul className="material-videos-list">
            {activeSubsection.videos.map((video) => (
              <li key={video.url} className="material-video-item">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-video-link"
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}