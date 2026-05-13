/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function CheckEmailConfirmation() {
  return (
    <>
      <div className="w-full max-w-max-width mx-auto flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
          <div className="w-[40px] h-[300px] bg-primary transform -skew-x-[20deg] opacity-10"></div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
          <div className="w-[40px] h-[300px] bg-primary transform -skew-x-[20deg] opacity-10"></div>
        </div>
        <main className="flex-grow flex items-center justify-center px-xl py-section z-10">
          <div className="w-full max-w-[480px] bg-canvas p-xxl rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)] flex flex-col items-center text-center">
            <div className="mb-xxl">
              <span className="font-display-md text-display-md font-bold text-primary">
                NIET Portal
              </span>
            </div>

            <div className="relative w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-xl">
              <div className="absolute inset-0 bg-primary opacity-5 rounded-full animate-pulse"></div>
              <span
                className="material-symbols-outlined text-[48px] text-primary"
                data-icon="mark_email_read"
              >
                mark_email_read
              </span>
            </div>

            <h1 className="font-display-sm text-display-sm font-bold text-ink mb-sm">
              Check your email
            </h1>
            <p className="font-caption-md text-caption-md text-secondary mb-xxl max-w-[340px]">
              We&apos;ve sent password reset instructions to your email address.
              Please check your inbox.
            </p>

            <div className="w-full space-y-xl">
              <div className="p-md bg-cloud rounded-lg border border-fog">
                <p className="font-caption-md text-caption-md text-charcoal mb-xs">
                  Didn&apos;t receive the email?
                </p>
                <button className="font-button-md text-button-md text-primary font-bold hover:text-primary-deep transition-colors flex items-center justify-center mx-auto gap-xs">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    data-icon="refresh"
                  >
                    refresh
                  </span>
                  CLICK TO RESEND
                </button>
              </div>

              <div className="pt-md border-t border-fog">
                <a
                  className="w-full h-[44px] bg-ink hover:bg-ink-deep text-on-ink font-button-md text-button-md flex items-center justify-center px-xl rounded-[4px] transition-all uppercase tracking-wider"
                  href="/login-portal"
                >
                  Back to Login
                </a>
              </div>
            </div>

            <div className="mt-xxl">
              <a
                className="font-caption-md text-caption-md text-graphite hover:text-ink transition-colors underline flex items-center gap-xs"
                href="/contact-niet"
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  data-icon="help_outline"
                >
                  help_outline
                </span>
                Contact IT Support
              </a>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 -z-50 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
      </div>
    </>
  );
}
