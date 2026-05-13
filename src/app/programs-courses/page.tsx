"use client";
import React, { useState } from "react";
import mockData from "@/data/mockData.json";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function ProgramsCourses() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            data-alt="A wide-angle professional architectural shot of a modern university campus building with sleek glass facades and concrete structural elements. The scene is captured during a bright, clear day with soft sunlight highlighting the clean lines of the institutional design. The image uses a high-contrast palette of whites and deep charcoal tones, reflecting a commercial-clean aesthetic with a professional and academic mood."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczW4QnZT_eqzTmCDgBZqZYZWuL1aszeJHlPnhBDtNrw3U3Gp_XkRk0igwMyjkocBVFB7K_iGhc1-A6sUAbYI8O_lSkoo-4KpIhPTwpKiJ_jqgflG4-0_YpGjfAsYZkWc8YnhDfQBbDFwtR-hosrAmSvZnM7f6hULznKjrrX1sbujS0782pauF58n5-vaGZlBam0HWaSp5RTCn-g5fdPwOeO2_FSzBpg-1I48XQ-9ONpO-Aq9KMn17ZODyuxGpPa9mMuzjc7YiYVab"
          />
        </div>

        <div className="absolute right-0 top-0 h-full w-1/4 bg-primary chevron-bg opacity-20 hidden md:block"></div>
        <div className="absolute right-[5%] top-0 h-full w-1/4 bg-primary chevron-bg opacity-40 hidden md:block"></div>
        <div className="relative z-10 max-w-max-width mx-auto px-lg py-[120px] flex flex-col items-start gap-md">
          <div className="bg-primary px-sm py-xxs text-on-ink font-button-md text-button-md rounded-[4px] uppercase">
            Academic Excellence
          </div>
          <h1 className="text-on-ink font-display-xl text-display-xl max-w-[800px] font-extrabold leading-none">
            Programs of Excellence
          </h1>
          <p className="text-on-ink opacity-90 font-body-lg text-body-lg max-w-[600px]">
            Empowering the next generation of engineers and leaders through
            industry-aligned curriculum and world-class research facilities.
          </p>
          <div className="mt-xl">
            <button className="bg-primary text-on-ink px-xl py-md font-button-md text-button-md rounded-[4px] uppercase scale-100 active:scale-95 transition-transform">
              Explore Faculty
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cloud border-b border-fog py-md sticky top-16 z-40">
        <div className="max-w-max-width mx-auto px-lg">
          <div className="flex items-center gap-xl overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 font-button-md text-button-md text-primary-bright border-b-2 border-primary-bright py-xxs uppercase">
              B.Tech Programs
            </button>
            <button className="flex-shrink-0 font-button-md text-button-md text-ink opacity-60 hover:opacity-100 transition-opacity uppercase pb-xxs">
              M.Tech Specializations
            </button>
            <button className="flex-shrink-0 font-button-md text-button-md text-ink opacity-60 hover:opacity-100 transition-opacity uppercase pb-xxs">
              MBA Excellence
            </button>
            <button className="flex-shrink-0 font-button-md text-button-md text-ink opacity-60 hover:opacity-100 transition-opacity uppercase pb-xxs">
              Polytechnic Diploma
            </button>
            <button className="flex-shrink-0 font-button-md text-button-md text-ink opacity-60 hover:opacity-100 transition-opacity uppercase pb-xxs">
              PhD Research
            </button>
          </div>
        </div>
      </section>

      <section className="py-section max-w-max-width mx-auto px-lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xxl gap-md">
          <div>
            <h2 className="font-display-md text-display-md text-ink font-bold">
              Premier Departments
            </h2>
            <p className="font-body-md text-body-md text-graphite mt-xxs">
              Specialized curricula designed for global competitiveness.
            </p>
          </div>
          <a
            className="text-primary font-button-md text-button-md uppercase flex items-center gap-xxs hover:underline"
            href="/department-listing"
          >
            Compare All Programs{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
          <div className="bg-canvas rounded-xl soft-lift p-xl flex flex-col h-full border border-fog/50">
            <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary">
                computer
              </span>
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">
              Computer Science
            </h3>
            <p className="font-body-md text-body-md text-graphite mb-xl flex-grow">
              Advanced training in algorithms, software engineering, and
              full-stack development with a focus on cloud architecture.
            </p>
            <button className="w-full border border-primary text-primary py-xs font-button-md text-button-md rounded-[4px] uppercase hover:bg-primary hover:text-on-ink transition-colors">
              View Program
            </button>
          </div>

          <div className="bg-canvas rounded-xl soft-lift p-xl flex flex-col h-full border border-fog/50">
            <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">
              AI &amp; Data Science
            </h3>
            <p className="font-body-md text-body-md text-graphite mb-xl flex-grow">
              Interdisciplinary program covering machine learning, neural
              networks, and statistical modeling for real-world intelligence.
            </p>
            <button className="w-full border border-primary text-primary py-xs font-button-md text-button-md rounded-[4px] uppercase hover:bg-primary hover:text-on-ink transition-colors">
              View Program
            </button>
          </div>

          <div className="bg-canvas rounded-xl soft-lift p-xl flex flex-col h-full border border-fog/50">
            <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary">
                settings
              </span>
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">
              Mechanical Engg.
            </h3>
            <p className="font-body-md text-body-md text-graphite mb-xl flex-grow">
              Core engineering principles combined with modern robotics,
              CAD/CAM, and sustainable manufacturing systems.
            </p>
            <button className="w-full border border-primary text-primary py-xs font-button-md text-button-md rounded-[4px] uppercase hover:bg-primary hover:text-on-ink transition-colors">
              View Program
            </button>
          </div>

          <div className="bg-canvas rounded-xl soft-lift p-xl flex flex-col h-full border border-fog/50">
            <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary">
                architecture
              </span>
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">
              Civil Engineering
            </h3>
            <p className="font-body-md text-body-md text-graphite mb-xl flex-grow">
              Focus on structural integrity, urban planning, and environmental
              engineering for future-ready infrastructure.
            </p>
            <button className="w-full border border-primary text-primary py-xs font-button-md text-button-md rounded-[4px] uppercase hover:bg-primary hover:text-on-ink transition-colors">
              View Program
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-section">
        <div className="max-w-max-width mx-auto px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xxl">
            <div className="lg:col-span-7">
              <h2 className="font-display-md text-display-md text-ink font-bold mb-xxl">
                Course Requirements
              </h2>
              <div className="flex flex-col gap-md">
                <div className="bg-canvas p-lg border border-fog rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-body-emphasis text-body-emphasis text-ink">
                      B.Tech Engineering
                    </h4>
                    <p className="font-caption-md text-caption-md text-graphite">
                      10+2 with PCM (Minimum 50%)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-surface-container px-sm py-xxs rounded-full text-ink font-caption-bold text-caption-bold">
                      4 Years
                    </span>
                  </div>
                </div>
                <div className="bg-canvas p-lg border border-fog rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-body-emphasis text-body-emphasis text-ink">
                      M.Tech Post-Graduation
                    </h4>
                    <p className="font-caption-md text-caption-md text-graphite">
                      Valid GATE Score or B.E./B.Tech
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-surface-container px-sm py-xxs rounded-full text-ink font-caption-bold text-caption-bold">
                      2 Years
                    </span>
                  </div>
                </div>
                <div className="bg-canvas p-lg border border-fog rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-body-emphasis text-body-emphasis text-ink">
                      MBA (Industry Integrated)
                    </h4>
                    <p className="font-caption-md text-caption-md text-graphite">
                      Graduation in any stream (Min 50%)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-surface-container px-sm py-xxs rounded-full text-ink font-caption-bold text-caption-bold">
                      2 Years
                    </span>
                  </div>
                </div>
                <div className="bg-canvas p-lg border border-fog rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-body-emphasis text-body-emphasis text-ink">
                      Diploma Programs
                    </h4>
                    <p className="font-caption-md text-caption-md text-graphite">
                      Class 10th (High School) Pass
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-surface-container px-sm py-xxs rounded-full text-ink font-caption-bold text-caption-bold">
                      3 Years
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-canvas rounded-xl soft-lift overflow-hidden border-t-4 border-primary h-full">
                <div className="p-xl bg-surface-container-lowest">
                  <h2 className="font-display-sm text-display-sm text-ink font-bold mb-xxs">
                    Fees Snapshot
                  </h2>
                  <p className="font-caption-md text-caption-md text-graphite mb-xl">
                    Estimated annual tuition per academic session.
                  </p>
                  <div className="space-y-xl">
                    <div className="flex justify-between items-end border-b border-fog pb-sm">
                      <span className="font-body-emphasis text-body-emphasis text-ink">
                        B.Tech Programs
                      </span>
                      <span className="font-price-md text-price-md text-primary font-bold">
                        ₹1.5L - 1.8L
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-fog pb-sm">
                      <span className="font-body-emphasis text-body-emphasis text-ink">
                        M.Tech Programs
                      </span>
                      <span className="font-price-md text-price-md text-primary font-bold">
                        ₹0.9L - 1.1L
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-fog pb-sm">
                      <span className="font-body-emphasis text-body-emphasis text-ink">
                        MBA Programs
                      </span>
                      <span className="font-price-md text-price-md text-primary font-bold">
                        ₹1.2L - 1.4L
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-fog pb-sm">
                      <span className="font-body-emphasis text-body-emphasis text-ink">
                        Diploma Courses
                      </span>
                      <span className="font-price-md text-price-md text-primary font-bold">
                        ₹0.4L - 0.6L
                      </span>
                    </div>
                  </div>
                  <div className="mt-xxl p-md bg-cloud rounded-lg">
                    <p className="font-caption-sm text-caption-sm text-graphite leading-relaxed">
                      *Fees are subject to change based on university
                      regulations. Additional charges for hostel, examination,
                      and laboratory materials may apply. Scholarship options
                      are available for merit-based candidates.
                    </p>
                  </div>
                  <button className="w-full bg-ink text-on-ink py-md mt-xl font-button-md text-button-md rounded-[4px] uppercase transition-colors hover:bg-ink-soft">
                    Download Full Fee Structure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-section">
        <div className="max-w-max-width mx-auto px-lg">
          <div className="bg-primary-deep rounded-xl p-xxl text-on-ink flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display-md text-display-md font-bold mb-sm">
                Ready to Start Your Journey?
              </h2>
              <p className="font-body-lg text-body-lg opacity-80 max-w-[500px]">
                Applications for the Academic Session 2024-25 are now open.
                Secure your future with NIET today.
              </p>
            </div>
            <div className="flex gap-md relative z-10">
              <button className="bg-canvas text-primary px-xl py-md font-button-md text-button-md rounded-[4px] uppercase font-bold hover:bg-cloud transition-colors">
                Apply Now
              </button>
              <button className="border border-canvas text-on-ink px-xl py-md font-button-md text-button-md rounded-[4px] uppercase hover:bg-canvas/10 transition-colors">
                Request Info
              </button>
            </div>

            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
