/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function LoginPortal() {
  return (
    <>
      <main className="w-full max-w-max-width bg-canvas rounded-xl shadow-soft-lift overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        <section className="hidden md:flex md:w-1/2 bg-ink relative overflow-hidden items-center justify-center">
          <img
            alt="Modern University Library"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            data-alt="An expansive, ultra-modern university library featuring multi-level glass balconies and minimalist white bookshelves. The architecture is defined by clean lines and high ceilings with natural light flooding through skylights, creating a bright and efficient academic atmosphere. The overall aesthetic is professional and commercial-clean, utilizing a palette of stark whites and deep blacks to emphasize a high-end corporate learning environment. Soft, diffuse shadows and high-key lighting enhance the serene yet technologically advanced mood."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-jBbOWK0B0umCCa07UtD1yuqQ3eFz5XOLZjDlU0S1gFXrA-yN9TBVZqzl8WIM5O85biP3N9Z4J2fpkGx5AbaMjVOKU4hITAxEJ_gtA7npOMFVyw_Wf36u-xHHklzJMUZcmcuPcRkh1LGR_PcOravH-zPA5rVYTIbs5rjE6U4UiC4REpCAhWB9qwtLh35z1yVqXuo6Q4SSNp1DdYdcsfh9gfpsGHdAdwrOpdgCCGj3rfaF58CuGk6a6WlltBrvz--qY-ZUYyrodge_"
          />

          <div className="absolute inset-0 pointer-events-none z-10 opacity-30 flex items-center justify-center">
            <div className="chevron-bg bg-primary w-48 h-full absolute -left-12 rotate-12"></div>
            <div className="chevron-bg bg-primary w-24 h-full absolute -left-4 translate-x-32 rotate-12"></div>
          </div>
          <div className="relative z-20 px-xxl text-center">
            <div className="mb-xl">
              <span className="font-display-xl text-display-xl font-bold text-on-ink tracking-tight">
                NIET Portal
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-ink opacity-90 max-w-md mx-auto">
              The centralized gateway for academic excellence, administrative
              efficiency, and institutional growth.
            </p>
          </div>
        </section>

        <section className="w-full md:w-1/2 flex flex-col justify-between p-xl md:p-xxl bg-canvas">
          <div className="md:hidden mb-xl flex items-center gap-xs">
            <span className="font-display-md text-display-md font-bold text-primary">
              NIET Portal
            </span>
          </div>
          <div className="max-w-md w-full mx-auto my-auto">
            <header className="mb-xxl text-left">
              <h1 className="font-display-sm text-display-sm font-bold text-ink mb-xs">
                Welcome Back
              </h1>
              <p className="font-body-md text-body-md text-secondary">
                Sign in to access your academic dashboard
              </p>
            </header>

            <div className="bg-cloud p-xxs rounded-lg flex mb-xl">
              <button className="flex-1 py-xs text-button-md font-button-md rounded-md bg-canvas text-primary shadow-soft-lift transition-all">
                Student
              </button>
              <button className="flex-1 py-xs text-button-md font-button-md text-secondary hover:text-ink transition-colors">
                Faculty
              </button>
            </div>
            <form className="space-y-xl">
              <div className="space-y-xxs">
                <label
                  className="font-caption-bold text-caption-bold text-ink"
                  htmlFor="email"
                >
                  Institutional Email / ID
                </label>
                <div className="relative">
                  <input
                    className="w-full h-11 px-md border border-steel rounded-md focus:ring-0 focus:border-ink transition-colors outline-none font-body-md text-ink placeholder:text-secondary-fixed-dim"
                    id="email"
                    placeholder="e.g. s.johndoe@niet.edu"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-xxs">
                <div className="flex justify-between items-center">
                  <label
                    className="font-caption-bold text-caption-bold text-ink"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="font-caption-md text-caption-md text-primary hover:text-primary-deep font-semibold"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full h-11 px-md border border-steel rounded-md focus:ring-0 focus:border-ink transition-colors outline-none font-body-md text-ink placeholder:text-secondary-fixed-dim pr-10"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-ink"
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="visibility"
                    >
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-xs">
                <input
                  className="w-4 h-4 rounded border-steel text-primary focus:ring-primary transition-all"
                  id="remember"
                  type="checkbox"
                />
                <label
                  className="font-caption-md text-caption-md text-secondary cursor-pointer select-none"
                  htmlFor="remember"
                >
                  Remember me for 30 days
                </label>
              </div>

              <button
                className="w-full h-11 bg-primary hover:bg-primary-deep text-on-primary font-button-md text-button-md uppercase rounded transition-all shadow-soft-lift flex items-center justify-center gap-xs px-xl"
                type="submit"
              >
                Sign In
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[409px] bg-primary opacity-[0.03] blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[409px] bg-bloom-coral opacity-[0.02] blur-[120px]"></div>
      </div>
    </>
  );
}
