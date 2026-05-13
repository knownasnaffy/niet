/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function WeeklyTimetable() {
  return (
    <>
      <main className="mt-16 min-h-screen pt-xxl pb-section px-lg max-w-max-width mx-auto">
        <header className="mb-xxl flex flex-col md:flex-row md:items-end justify-between gap-xl">
          <div className="space-y-xxs">
            <div className="flex items-center gap-sm">
              <span className="bg-primary-soft text-primary font-bold px-sm py-xxs rounded-full text-caption-sm uppercase tracking-wider">
                Spring Semester 2024
              </span>
              <span className="text-graphite font-body-emphasis">•</span>
              <span className="text-ink font-body-emphasis">
                Section B-12 (CSE)
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg font-extrabold tracking-tight">
              Academic Timetable
            </h1>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex bg-cloud p-1 rounded-lg border border-fog">
              <button className="px-md py-2 bg-canvas text-ink font-button-md rounded shadow-sm flex items-center gap-xs">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="calendar_month"
                >
                  calendar_month
                </span>
                Grid View
              </button>
              <button className="px-md py-2 text-graphite font-button-md hover:text-ink transition-colors flex items-center gap-xs">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="list"
                >
                  list
                </span>
                List View
              </button>
            </div>

            <button className="bg-ink text-on-ink px-xl h-11 rounded-sm font-button-md text-button-md flex items-center gap-md hover:bg-ink-soft transition-colors scale-100 active:scale-95">
              DOWNLOAD PDF
              <span className="material-symbols-outlined" data-icon="download">
                download
              </span>
            </button>
          </div>
        </header>

        <div className="bg-canvas border border-fog rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-[100px_repeat(5,1fr)] bg-cloud border-b border-fog">
            <div className="p-xl text-center font-caption-bold text-caption-bold text-graphite border-r border-fog uppercase tracking-widest">
              Time
            </div>
            <div className="p-xl text-center font-display-xs text-display-xs font-bold text-ink border-r border-fog">
              MON
            </div>
            <div className="p-xl text-center font-display-xs text-display-xs font-bold text-ink border-r border-fog">
              TUE
            </div>
            <div className="p-xl text-center font-display-xs text-display-xs font-bold text-ink border-r border-fog">
              WED
            </div>
            <div className="p-xl text-center font-display-xs text-display-xs font-bold text-ink border-r border-fog">
              THU
            </div>
            <div className="p-xl text-center font-display-xs text-display-xs font-bold text-ink">
              FRI
            </div>
          </div>

          <div className="relative bg-[length:100%_80px] bg-[linear-gradient(to_bottom,transparent_79px,#e8e8e8_79px)]">
            <div className="grid grid-cols-[100px_repeat(5,1fr)]">
              <div className="col-start-1 h-[640px] flex flex-col border-r border-fog">
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  09:00 AM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  10:00 AM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  11:00 AM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  12:00 PM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  01:00 PM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  02:00 PM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite border-b border-fog">
                  03:00 PM
                </div>
                <div className="h-20 flex items-center justify-center font-caption-bold text-graphite">
                  04:00 PM
                </div>
              </div>

              <div className="h-full border-r border-fog opacity-30"></div>
              <div className="h-full border-r border-fog opacity-30"></div>
              <div className="h-full border-r border-fog opacity-30"></div>
              <div className="h-full border-r border-fog opacity-30"></div>
              <div className="h-full"></div>

              <div className="absolute left-[100px] top-0 w-[calc(20%-20px)] h-40 p-1">
                <div className="h-full w-full bg-primary-soft border-l-4 border-primary p-md rounded-lg shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-caption-sm font-bold text-primary-deep uppercase">
                      Lecture
                    </span>
                    <h3 className="font-body-emphasis text-body-emphasis text-ink mt-1">
                      Data Structures
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-caption-sm flex items-center gap-xs text-graphite">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        data-icon="room"
                      >
                        room
                      </span>{" "}
                      RM-402
                    </span>
                    <span className="text-caption-sm font-bold text-primary">
                      Dr. S. Mehta
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute left-[calc(100px+20%)] top-20 w-[calc(20%-20px)] h-20 p-1">
                <div className="h-full w-full bg-tertiary-fixed border-l-4 border-tertiary p-md rounded-lg shadow-sm flex flex-col justify-center">
                  <span className="text-caption-sm font-bold text-on-tertiary-fixed-variant uppercase">
                    Seminar
                  </span>
                  <h3 className="font-body-emphasis text-body-emphasis text-ink leading-tight">
                    AI Ethics
                  </h3>
                </div>
              </div>
              <div className="absolute left-[calc(100px+20%)] top-[240px] w-[calc(20%-20px)] h-40 p-1">
                <div className="h-full w-full bg-surface-container border-l-4 border-outline p-md rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-caption-sm font-bold text-secondary uppercase">
                      Lab
                    </span>
                    <h3 className="font-body-emphasis text-body-emphasis text-ink mt-1">
                      Operating Systems
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-caption-sm flex items-center gap-xs text-graphite">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        data-icon="computer"
                      >
                        computer
                      </span>{" "}
                      LAB-02
                    </span>
                    <span className="text-caption-sm font-bold text-ink">
                      Prof. J. Doe
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute left-[calc(100px+40%)] top-0 w-[calc(20%-20px)] h-40 p-1">
                <div className="h-full w-full bg-primary-soft border-l-4 border-primary p-md rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-caption-sm font-bold text-primary-deep uppercase">
                      Lecture
                    </span>
                    <h3 className="font-body-emphasis text-body-emphasis text-ink mt-1">
                      Computer Networks
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-caption-sm">
                    <span className="text-graphite">RM-101</span>
                    <span className="font-bold text-primary">Dr. A. Verma</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-[calc(100px+60%)] top-[320px] w-[calc(20%-20px)] h-20 p-1">
                <div className="h-full w-full bg-ink text-on-ink p-md rounded-lg shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-caption-sm opacity-70 uppercase block">
                      Break
                    </span>
                    <h3 className="font-body-emphasis">Lunch Interval</h3>
                  </div>
                  <span
                    className="material-symbols-outlined"
                    data-icon="restaurant"
                  >
                    restaurant
                  </span>
                </div>
              </div>

              <div className="absolute left-[calc(100px+80%)] top-0 w-[calc(20%-20px)] h-40 p-1">
                <div className="h-full w-full bg-surface-container border-l-4 border-outline p-md rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-caption-sm font-bold text-secondary uppercase">
                      Lab
                    </span>
                    <h3 className="font-body-emphasis text-body-emphasis text-ink mt-1">
                      Database Systems
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-caption-sm">
                    <span className="text-graphite">LAB-05</span>
                    <span className="font-bold text-ink">Dr. R. Singh</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-[calc(100px+80%)] top-[400px] w-[calc(20%-20px)] h-40 p-1">
                <div className="h-full w-full bg-primary-soft border-l-4 border-primary p-md rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-caption-sm font-bold text-primary-deep uppercase">
                      Lecture
                    </span>
                    <h3 className="font-body-emphasis text-body-emphasis text-ink mt-1">
                      Cloud Computing
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-caption-sm">
                    <span className="text-graphite">RM-502</span>
                    <span className="font-bold text-primary">Prof. K. Lee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-section grid grid-cols-1 md:grid-cols-2 gap-xl items-center bg-ink rounded-xl overflow-hidden relative min-h-[300px]">
          <div className="p-xxl z-10">
            <h2 className="text-on-ink font-display-md text-display-md font-bold mb-md">
              Stay Ahead of Your Academic Journey
            </h2>
            <p className="text-on-ink opacity-80 font-body-lg text-body-lg mb-xl max-w-md">
              Your personalized dashboard for real-time schedule updates,
              attendance tracking, and faculty communication.
            </p>
            <div className="flex gap-md">
              <button className="bg-primary-bright text-on-ink px-xl h-11 rounded-sm font-button-md hover:brightness-110 transition-all">
                VIEW ATTENDANCE
              </button>
              <button className="border border-on-ink text-on-ink px-xl h-11 rounded-sm font-button-md hover:bg-white/10 transition-all">
                RESOURCES
              </button>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-full flex items-center justify-center">
              <div className="chevron-bg bg-primary w-48 h-full transform translate-x-12 opacity-50"></div>
              <div className="chevron-bg bg-primary w-48 h-full transform -translate-x-12 opacity-80"></div>
            </div>
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              data-alt="A group of diverse university students collaborating in a bright, modern library setting. The lighting is soft and natural, emphasizing a high-productivity and focused academic atmosphere. The background features architectural lines and minimalist furniture, reflecting a clean corporate aesthetic with a professional and collaborative mood."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtmdSqsfL5Rd6EAe0xeWiEtryzFvI4jbKg71WW2YYPVAjKDB4qF6b4S20GGFhILTXPduEJaI7huNWZlt9ZBl81jQ2pCzbeIjPvw3D11J9c6fnAKZCP8cASIgT5HcLejH5SPzEIy_nkoKDzxqpoFCSbHig2aMQHbbRHyialfgQOjV1vUKVNahfVPwP4aU0_Zuu02uAS6RpEkW8EmTbVeWlqp26xc8tXw48Pe5YBNECPUHDvaUyzUPk6n7tQJiEUa3m5tq-x5YverHS"
            />
          </div>
        </div>
      </main>
    </>
  );
}
