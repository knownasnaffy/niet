/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function StudentDashboard() {
  return (
    <>
      <main className="max-w-max-width mx-auto px-lg py-xl min-h-screen">
        <header className="mb-section">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-xl mb-xl">
            <div>
              <h1 className="text-display-md font-display-md font-extrabold text-ink">
                Welcome back, Aryan!
              </h1>
              <p className="text-body-lg text-secondary">
                B.Tech Computer Science | Year 3, Semester 6
              </p>
            </div>
            <div className="flex items-center gap-md bg-canvas p-xs rounded-lg soft-lift">
              <div className="relative p-sm cursor-pointer hover:bg-cloud rounded-full transition-colors">
                <span className="material-symbols-outlined text-ink">
                  notifications
                </span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-bloom-coral rounded-full"></span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-soft overflow-hidden border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A professional headshot of a young male student in a bright, modern studio. He is smiling warmly with high-key lighting that emphasizes a clean and trustworthy look. The background is a minimalist, neutral grey, fitting the modern corporate aesthetic of the institution dashboard. High resolution photography with sharp focus on the facial features."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUOIn9DiuPh9y9mrcLKdl3OTNjvSoqqssLcsjkPtcrOc6XvnLrSZEe8161B5QQOD4m52cesiRJjkbILqTMgBwkf0G9t5Du9GQUhXFqW-44IEx-egp5gpvaQKdqysABquIacArejFVfd9tr4cMOdSlewAQpE6TiDRVKceAcfg--LEYR9bhD3lL8e6xLLB4Y3x34qahx6MuNqdd8tmLljQe4bnchz2p6hwna2T9Ai7zxGmCGsjdyjqit-3f7Grx_YPVtEIjt_KGzRQIH"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            <div className="bg-canvas p-xl rounded-xl soft-lift flex items-center justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-4 bg-primary chevron-bg opacity-10"></div>
              <div>
                <p className="text-caption-md text-secondary uppercase font-bold tracking-wider mb-xxs">
                  Attendance
                </p>
                <h2 className="text-display-sm font-display-sm text-primary-bright">
                  87.5%
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  calendar_today
                </span>
              </div>
            </div>

            <div className="bg-canvas p-xl rounded-xl soft-lift flex items-center justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-4 bg-primary chevron-bg opacity-10"></div>
              <div>
                <p className="text-caption-md text-secondary uppercase font-bold tracking-wider mb-xxs">
                  Current CGPA
                </p>
                <h2 className="text-display-sm font-display-sm text-primary-bright">
                  9.12
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  grade
                </span>
              </div>
            </div>

            <div className="bg-canvas p-xl rounded-xl soft-lift flex items-center justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-4 bg-primary chevron-bg opacity-10"></div>
              <div>
                <p className="text-caption-md text-secondary uppercase font-bold tracking-wider mb-xxs">
                  Pending Tasks
                </p>
                <h2 className="text-display-sm font-display-sm text-primary-bright">
                  04
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  assignment
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <aside className="lg:col-span-3 flex flex-col gap-xl">
            <div className="bg-ink p-xl rounded-xl text-on-ink">
              <h3 className="text-body-emphasis font-bold mb-xl">
                Quick Access
              </h3>
              <nav className="flex flex-col gap-md">
                <a
                  className="flex items-center gap-md p-sm rounded-lg hover:bg-ink-soft transition-colors text-on-ink opacity-80 hover:opacity-100"
                  href="/course-resources"
                >
                  <span className="material-symbols-outlined">
                    library_books
                  </span>
                  <span className="font-button-md text-button-md uppercase">
                    Digital Library
                  </span>
                </a>
                <a
                  className="flex items-center gap-md p-sm rounded-lg hover:bg-ink-soft transition-colors text-on-ink opacity-80 hover:opacity-100"
                  href="/scholarships-fees"
                >
                  <span className="material-symbols-outlined">payments</span>
                  <span className="font-button-md text-button-md uppercase">
                    Fee Payment
                  </span>
                </a>
                <a
                  className="flex items-center gap-md p-sm rounded-lg hover:bg-ink-soft transition-colors text-on-ink opacity-80 hover:opacity-100"
                  href="/student-success-stories"
                >
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  <span className="font-button-md text-button-md uppercase">
                    Profile Settings
                  </span>
                </a>
                <a
                  className="flex items-center gap-md p-sm rounded-lg hover:bg-ink-soft transition-colors text-on-ink opacity-80 hover:opacity-100"
                  href="/programs-courses"
                >
                  <span className="material-symbols-outlined">school</span>
                  <span className="font-button-md text-button-md uppercase">
                    Transcript
                  </span>
                </a>
              </nav>
            </div>
            <div className="bg-primary p-xl rounded-xl text-on-ink relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-body-emphasis font-bold mb-sm">
                  Summer Internship 2024
                </h3>
                <p className="text-caption-md opacity-90 mb-xl">
                  Applications are now open for top-tier tech placements.
                </p>
                <button className="bg-canvas text-primary px-xl h-10 rounded-DEFAULT font-button-md text-button-md uppercase hover:shadow-lg transition-all">
                  Explore
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-bright opacity-20 chevron-bg rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
            </div>
          </aside>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-xl">
            <section className="md:col-span-1 bg-canvas rounded-xl soft-lift p-xl border-t-4 border-primary">
              <div className="flex justify-between items-center mb-xl">
                <h3 className="text-display-xs font-bold text-ink">
                  Schedule Today
                </h3>
                <span className="text-caption-md text-secondary">
                  Tuesday, May 14
                </span>
              </div>
              <div className="space-y-xl">
                <div className="flex gap-md border-l-2 border-primary-bright pl-md py-xxs">
                  <div className="min-w-[60px]">
                    <p className="font-bold text-ink">09:30</p>
                    <p className="text-caption-sm text-secondary">AM</p>
                  </div>
                  <div>
                    <h4 className="font-body-emphasis text-ink">
                      Data Structures &amp; Algo
                    </h4>
                    <p className="text-caption-md text-secondary">
                      Lec Hall 304 • Dr. R. Verma
                    </p>
                  </div>
                </div>
                <div className="flex gap-md border-l-2 border-outline-variant pl-md py-xxs">
                  <div className="min-w-[60px]">
                    <p className="font-bold text-ink">11:15</p>
                    <p className="text-caption-sm text-secondary">AM</p>
                  </div>
                  <div>
                    <h4 className="font-body-emphasis text-ink">
                      Database Systems
                    </h4>
                    <p className="text-caption-md text-secondary">
                      Lab 12 • Prof. S. Kapur
                    </p>
                  </div>
                </div>
                <div className="mt-xl">
                  <button className="w-full bg-cloud text-ink h-11 border border-fog rounded-DEFAULT font-button-md text-button-md uppercase hover:bg-fog transition-colors">
                    View Full Calendar
                  </button>
                </div>
              </div>
            </section>

            <section className="md:col-span-1 bg-canvas rounded-xl soft-lift p-xl">
              <div className="flex justify-between items-center mb-xl">
                <h3 className="text-display-xs font-bold text-ink">
                  Upcoming Deadlines
                </h3>
                <span className="material-symbols-outlined text-secondary">
                  more_vert
                </span>
              </div>
              <div className="space-y-md">
                <div className="flex items-center gap-md p-md bg-cloud rounded-lg border border-fog">
                  <div className="p-sm bg-bloom-rose rounded-lg text-bloom-deep">
                    <span className="material-symbols-outlined">
                      priority_high
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink text-body-md">
                      OS Term Project
                    </h4>
                    <p className="text-caption-sm text-secondary">
                      Ends in 6 hours
                    </p>
                  </div>
                  <button className="text-primary-bright font-bold hover:underline">
                    Submit
                  </button>
                </div>
                <div className="flex items-center gap-md p-md bg-canvas rounded-lg border border-fog">
                  <div className="p-sm bg-primary-soft rounded-lg text-primary">
                    <span className="material-symbols-outlined">edit_note</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink text-body-md">
                      ML Quiz #4
                    </h4>
                    <p className="text-caption-sm text-secondary">
                      Due: May 16, 2024
                    </p>
                  </div>
                  <button className="text-secondary font-bold">Details</button>
                </div>
                <div className="flex items-center gap-md p-md bg-canvas rounded-lg border border-fog">
                  <div className="p-sm bg-surface-container-high rounded-lg text-secondary">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink text-body-md">
                      Ethics Case Study
                    </h4>
                    <p className="text-caption-sm text-secondary">
                      Due: May 20, 2024
                    </p>
                  </div>
                  <button className="text-secondary font-bold">Details</button>
                </div>
              </div>
            </section>

            <section className="md:col-span-2 bg-canvas rounded-xl soft-lift p-xl">
              <h3 className="text-display-xs font-bold text-ink mb-xl">
                Active Courses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
                <div className="p-xl border border-fog rounded-xl bg-cloud/50">
                  <div className="flex items-center justify-between mb-md">
                    <span className="px-sm py-1 bg-primary text-on-ink text-[10px] font-bold uppercase rounded-full">
                      CS-601
                    </span>
                    <span className="text-caption-md font-bold text-primary">
                      78% Done
                    </span>
                  </div>
                  <h4 className="text-body-emphasis font-bold mb-xl">
                    Advanced Algorithms
                  </h4>
                  <div className="w-full bg-steel h-1.5 rounded-full mb-md overflow-hidden">
                    <div className="bg-primary h-full w-[78%]"></div>
                  </div>
                  <div className="flex items-center gap-xs text-caption-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">
                      menu_book
                    </span>
                    12/15 Modules completed
                  </div>
                </div>
                <div className="p-xl border border-fog rounded-xl">
                  <div className="flex items-center justify-between mb-md">
                    <span className="px-sm py-1 bg-ink text-on-ink text-[10px] font-bold uppercase rounded-full">
                      CS-603
                    </span>
                    <span className="text-caption-md font-bold text-primary">
                      45% Done
                    </span>
                  </div>
                  <h4 className="text-body-emphasis font-bold mb-xl">
                    Machine Learning
                  </h4>
                  <div className="w-full bg-steel h-1.5 rounded-full mb-md overflow-hidden">
                    <div className="bg-primary h-full w-[45%]"></div>
                  </div>
                  <div className="flex items-center gap-xs text-caption-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">
                      menu_book
                    </span>
                    8/18 Modules completed
                  </div>
                </div>
                <div className="p-xl border border-fog rounded-xl">
                  <div className="flex items-center justify-between mb-md">
                    <span className="px-sm py-1 bg-ink text-on-ink text-[10px] font-bold uppercase rounded-full">
                      CS-605
                    </span>
                    <span className="text-caption-md font-bold text-primary">
                      92% Done
                    </span>
                  </div>
                  <h4 className="text-body-emphasis font-bold mb-xl">
                    Cloud Computing
                  </h4>
                  <div className="w-full bg-steel h-1.5 rounded-full mb-md overflow-hidden">
                    <div className="bg-primary h-full w-[92%]"></div>
                  </div>
                  <div className="flex items-center gap-xs text-caption-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">
                      menu_book
                    </span>
                    14/15 Modules completed
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
