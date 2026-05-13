/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function AboutNiet() {
  return (
    <>
      <main>
        <section className="relative w-full h-[500px] overflow-hidden flex items-center">
          <img
            alt="NIET Campus"
            className="absolute inset-0 w-full h-full object-cover"
            data-alt="A grand, architectural view of a modern university campus featuring large glass windows and clean concrete structures under a bright, clear blue sky. The lighting is crisp and cinematic, emphasizing the prestigious and professional atmosphere of the institution. The scene is dominated by a clean light-mode aesthetic with deep blue sky accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNlvCCT9F3QYgk-4JRYgb8SRLuqWv9KrroJwXLMEd9T3uJGHNvWrxlriupZ6oPCfCDtqZL0Y7_ozl55YF-ekQymNHRd2bLnolLbgKAyUkCBlbJ_MlaOT7RYRqPGpe3Lajg_q1hET1RHh1gyNcc-e2rF_GXRC0ciUfGMvWT3CHM61qJFUqI-RgjBFvL6_JAD0LiSCzdUR9wgL3Ze9QL11PolQG1N0LLHfjZhK986TuAVjxqxyt_t4JyZwN661-YcaeFBdKeYbFFIAy"
          />
          <div className="absolute inset-0 bg-ink-deep/30"></div>
          <div className="relative z-10 max-w-max-width mx-auto w-full px-lg flex items-center">
            <div className="absolute -left-12 h-full w-24 bg-primary chevron-mask opacity-20 hidden lg:block"></div>
            <div className="max-w-2xl">
              <h1 className="font-display-xl text-display-xl text-on-ink mb-md">
                Excellence in Engineering &amp; Technology
              </h1>
              <p className="font-body-lg text-body-lg text-on-ink/90">
                For over two decades, NIET has been at the forefront of
                technical education, nurturing the next generation of innovators
                and leaders.
              </p>
            </div>
          </div>
        </section>

        <section className="py-section bg-canvas">
          <div className="max-w-max-width mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl">
              <div className="bg-cloud p-xxl rounded-xl border border-fog flex flex-col gap-md">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
                  <span
                    className="material-symbols-outlined text-on-ink"
                    data-icon="visibility"
                  >
                    visibility
                  </span>
                </div>
                <h2 className="font-display-md text-display-md text-primary">
                  Our Vision
                </h2>
                <p className="font-body-md text-body-md text-secondary">
                  To become a center of excellence in technical education and
                  research, producing globally competitive professionals with a
                  strong sense of social responsibility and ethics.
                </p>
              </div>
              <div className="bg-cloud p-xxl rounded-xl border border-fog flex flex-col gap-md">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
                  <span
                    className="material-symbols-outlined text-on-ink"
                    data-icon="rocket_launch"
                  >
                    rocket_launch
                  </span>
                </div>
                <h2 className="font-display-md text-display-md text-primary">
                  Our Mission
                </h2>
                <p className="font-body-md text-body-md text-secondary">
                  To provide high-quality education through innovative
                  teaching-learning processes, foster a culture of research and
                  entrepreneurship, and bridge the gap between industry and
                  academia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section bg-cloud">
          <div className="max-w-max-width mx-auto px-lg">
            <div className="flex flex-col md:flex-row items-center gap-section">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-soft rounded-xl -z-10"></div>
                  <img
                    alt="Chairman Portrait"
                    className="w-full h-[450px] object-cover rounded-xl shadow-md"
                    data-alt="A formal and dignified portrait of a middle-aged academic chairman wearing a sharp dark suit in a bright, modern office setting. The background features blurred books and professional decor, maintaining a high-key, light-mode aesthetic. The lighting is soft and flattering, projecting authority and approachability in a professional corporate-clean style."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN6JQg61YcsJDRAyBBxPPm8T9imDu54upoQUdhzkTYuhZy_re9BZNicAwlESUCSvpxqJbS9b0_eEmdmJRr6CDZmhW1s-7kt3U9DneO2WiFEpvlaGyLN6JfYejOPmsf_G0xcmhI7CP4RxP2PmG_P02y1QZ4phhFAErA0KlhbGH-shtM63j2RCIbTpjqIVDNzwIUK4924QtBkNBfePbj-Me6fm6gpJV8oeJxfxUmMMFY8bMcteuBVYT2ubsNQs4L7JhNbhW9nmrz0KPL"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span
                  className="material-symbols-outlined text-primary text-display-lg block mb-xs"
                  data-icon="format_quote"
                  style={{ fontVariationSettings: "\&apos;FILL\&apos; 1" }}
                >
                  format_quote
                </span>
                <h2 className="font-display-md text-display-md mb-md">
                  Chairman&apos;s Message
                </h2>
                <div className="space-y-md">
                  <p className="font-body-lg text-body-lg text-ink-soft italic">
                    "At NIET, we don&apos;t just teach engineering; we cultivate
                    the mindset of a problem solver. Our journey since inception
                    has been guided by the singular goal of empowering students
                    to meet the challenges of a rapidly evolving global
                    landscape."
                  </p>
                  <p className="font-body-md text-body-md text-secondary">
                    We believe in a holistic approach to education that combines
                    rigorous academic standards with practical industry
                    exposure. Our faculty and staff are dedicated to creating an
                    environment where every student can discover their true
                    potential and excel.
                  </p>
                </div>
                <div className="mt-xl">
                  <p className="font-display-sm text-display-sm text-primary">
                    Dr. Ramesh Kumar
                  </p>
                  <p className="font-caption-bold text-caption-bold text-steel">
                    Chairman, NIET Group of Institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section bg-canvas">
          <div className="max-w-max-width mx-auto px-lg">
            <div className="flex flex-col md:flex-row-reverse items-center gap-section">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-soft rounded-xl -z-10"></div>
                  <img
                    alt="Principal Portrait"
                    className="w-full h-[450px] object-cover rounded-xl shadow-md"
                    data-alt="A professional portrait of a confident female principal in a bright, modern academic environment. She is smiling warmly, wearing elegant professional attire. The lighting is bright and clean, with a shallow depth of field that keeps the focus on her while showing a hint of a modern campus building in the background."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIyx3lUDdF9_WXoXKf1dUpQpnDpkIcMsETkZm2uA7zUHHrs9dXN7NRCpjHvRrmZkZN4SIdPKVybfnBmguwShn7_-U4Bx6Nc2BhUdFFE1LewsQO_iRXri8YQQtYsfkbtsaX4QQUg68cEyb4DjHV9W9uTO_5fcWcTbUm59JYU51JH7F6glQb4GEx_3_01lvgtZ0wACvtXbj-Sl489l_a3HjGa9rTo3pJ3P0n6b_9ASvNjyywGX0QHZ7Z4iXGa-nB3Hh9sM0qq0_jvrfr"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span
                  className="material-symbols-outlined text-primary text-display-lg block mb-xs"
                  data-icon="format_quote"
                  style={{ fontVariationSettings: "\&apos;FILL\&apos; 1" }}
                >
                  format_quote
                </span>
                <h2 className="font-display-md text-display-md mb-md">
                  Principal&apos;s Message
                </h2>
                <div className="space-y-md">
                  <p className="font-body-lg text-body-lg text-ink-soft italic">
                    "Technical education is the backbone of national
                    development. Our focus at NIET is to bridge the gap between
                    classroom theory and real-world application through our
                    industry-partnered laboratories and research initiatives."
                  </p>
                  <p className="font-body-md text-body-md text-secondary">
                    Our curriculum is designed to be dynamic, responding to the
                    latest trends in technology and industry requirements. We
                    take pride in our alumni who are making significant
                    contributions to the global tech ecosystem.
                  </p>
                </div>
                <div className="mt-xl">
                  <p className="font-display-sm text-display-sm text-primary">
                    Dr. Sarah Johnson
                  </p>
                  <p className="font-caption-bold text-caption-bold text-steel">
                    Principal &amp; Dean Academics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section bg-cloud">
          <div className="max-w-max-width mx-auto px-lg">
            <div className="text-center mb-section">
              <h2 className="font-display-lg text-display-lg mb-xs">
                Our Journey
              </h2>
              <p className="font-body-lg text-body-lg text-secondary">
                Tracing the milestones of excellence since our foundation.
              </p>
            </div>
            <div className="relative py-md">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-steel hidden md:block"></div>
              <div className="space-y-xl relative">
                <div className="flex flex-col md:flex-row items-center gap-xl md:gap-0">
                  <div className="w-full md:w-1/2 md:pr-xxl md:text-right">
                    <div className="bg-canvas p-lg rounded-xl shadow-md border-l-4 border-primary inline-block md:block">
                      <h3 className="font-display-sm text-display-sm text-primary">
                        2001
                      </h3>
                      <p className="font-body-emphasis text-body-emphasis mb-xs">
                        Founding Year
                      </p>
                      <p className="font-body-md text-body-md text-secondary">
                        NIET was established with three core engineering
                        branches and a vision to redefine technical education.
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-canvas z-10 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-xxl"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-xl md:gap-0">
                  <div className="w-full md:w-1/2 md:pr-xxl"></div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-canvas z-10 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-xxl">
                    <div className="bg-canvas p-lg rounded-xl shadow-md border-r-4 border-primary">
                      <h3 className="font-display-sm text-display-sm text-primary">
                        2010
                      </h3>
                      <p className="font-body-emphasis text-body-emphasis mb-xs">
                        AICTE Accreditation
                      </p>
                      <p className="font-body-md text-body-md text-secondary">
                        Achieved major accreditation milestones and expanded the
                        campus to accommodate 3,000+ students.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-xl md:gap-0">
                  <div className="w-full md:w-1/2 md:pr-xxl md:text-right">
                    <div className="bg-canvas p-lg rounded-xl shadow-md border-l-4 border-primary inline-block md:block">
                      <h3 className="font-display-sm text-display-sm text-primary">
                        2018
                      </h3>
                      <p className="font-body-emphasis text-body-emphasis mb-xs">
                        Research Center Launch
                      </p>
                      <p className="font-body-md text-body-md text-secondary">
                        Inaugurated the Advanced Computing and Robotics Lab in
                        partnership with global industry leaders.
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-canvas z-10 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-xxl"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-xl md:gap-0">
                  <div className="w-full md:w-1/2 md:pr-xxl"></div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-canvas z-10 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-xxl">
                    <div className="bg-canvas p-lg rounded-xl shadow-md border-r-4 border-primary">
                      <h3 className="font-display-sm text-display-sm text-primary">
                        2024
                      </h3>
                      <p className="font-body-emphasis text-body-emphasis mb-xs">
                        Global Ranking Recognition
                      </p>
                      <p className="font-body-md text-body-md text-secondary">
                        Ranked among the top technical institutes in the region
                        for placement and academic excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section bg-canvas">
          <div className="max-w-max-width mx-auto px-lg">
            <div className="text-center mb-xxl">
              <h2 className="font-display-md text-display-md">
                Accreditations &amp; Recognitions
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-xl items-center justify-items-center">
              <div className="flex flex-col items-center gap-sm">
                <div className="w-24 h-24 bg-cloud rounded-lg flex items-center justify-center p-md border border-fog hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-display-lg"
                    data-icon="verified"
                  >
                    verified
                  </span>
                </div>
                <p className="font-caption-bold text-caption-bold uppercase">
                  UGC Approved
                </p>
              </div>
              <div className="flex flex-col items-center gap-sm">
                <div className="w-24 h-24 bg-cloud rounded-lg flex items-center justify-center p-md border border-fog hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-display-lg"
                    data-icon="approval"
                  >
                    approval
                  </span>
                </div>
                <p className="font-caption-bold text-caption-bold uppercase">
                  AICTE Recognized
                </p>
              </div>
              <div className="flex flex-col items-center gap-sm">
                <div className="w-24 h-24 bg-cloud rounded-lg flex items-center justify-center p-md border border-fog hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-display-lg"
                    data-icon="grade"
                  >
                    grade
                  </span>
                </div>
                <p className="font-caption-bold text-caption-bold uppercase">
                  NAAC A+ Grade
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
