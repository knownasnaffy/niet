/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function ContactNiet() {
  return (
    <>
      <section className="relative bg-cloud py-section overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-primary opacity-10 chevron-decoration -translate-x-12"></div>
        <div className="max-w-max-width mx-auto px-lg relative z-10 grid md:grid-cols-2 gap-xl items-center">
          <div>
            <h1 className="font-display-xl text-display-xl text-ink mb-md tracking-tight">
              Connect with <br />
              <span className="text-primary font-extrabold">
                Northvale Excellence
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-lg mb-xl">
              Get in touch with our administrative offices, academic
              departments, or visit our campus in Punjab.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center space-x-sm">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <span className="font-body-emphasis text-ink">
                  +91 1800-419-0000
                </span>
              </div>
              <div className="flex items-center space-x-sm">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <span className="font-body-emphasis text-ink">
                  info@niet.edu.in
                </span>
              </div>
              <div className="flex items-center space-x-sm">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="font-body-emphasis text-ink">
                  Grand Trunk Road, Punjab 144001, India
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative h-[400px]">
            <img
              alt="NIET Campus Main Building"
              className="w-full h-full object-cover rounded-xl shadow-lg border border-fog"
              data-alt="A grand, architectural view of a modern university building facade in Punjab during the golden hour. The image features clean, geometric lines, large glass panels reflecting the warm sunlight, and a well-manicured green lawn in the foreground. The aesthetic is professional, corporate-clean, and echoes the institutional reliability of NIET with high-key lighting and a sense of academic prestige."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Igm7RKalH2A7JRQmm51exBxFBnJVcFlTIBhCDrkjbbVoG2Y0Gb1SOXNekp0dyS8b0IxAjx90uwC0cGw92g79POTGVZn-x1ioFYaDVHymFVX1IVuwrV0rTRJLNvmtpc62_w5hGyC5lVEOod94n5ZgiCYPWkWUMkTAZwEjr9dcUHOm9F4YMiM1PGOoqvrhbFjklEb7gkCyjA1WqaGIHs5--awCdZvV9rZwqMBUsQ4iMMsm6iCflTM25jZXrNhfBg9GPw_ePs9Fo2EA"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary chevron-decoration"></div>
          </div>
        </div>
      </section>

      <section className="max-w-max-width mx-auto px-lg py-section">
        <div className="grid lg:grid-cols-12 gap-xxl">
          <div className="lg:col-span-7 bg-canvas border border-fog p-xxl rounded-xl shadow-sm">
            <h2 className="font-display-md text-display-md text-ink mb-lg">
              Send an Inquiry
            </h2>
            <form className="grid md:grid-cols-2 gap-lg">
              <div className="flex flex-col space-y-xxs">
                <label className="font-caption-bold text-caption-bold text-secondary uppercase">
                  Full Name
                </label>
                <input
                  className="h-[44px] px-md border border-steel rounded-[4px] font-body-md text-ink bg-white transition-all focus:ring-0"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-xxs">
                <label className="font-caption-bold text-caption-bold text-secondary uppercase">
                  Email Address
                </label>
                <input
                  className="h-[44px] px-md border border-steel rounded-[4px] font-body-md text-ink bg-white transition-all focus:ring-0"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-xxs">
                <label className="font-caption-bold text-caption-bold text-secondary uppercase">
                  Phone Number
                </label>
                <input
                  className="h-[44px] px-md border border-steel rounded-[4px] font-body-md text-ink bg-white transition-all focus:ring-0"
                  placeholder="+91"
                  type="tel"
                />
              </div>
              <div className="flex flex-col space-y-xxs">
                <label className="font-caption-bold text-caption-bold text-secondary uppercase">
                  Inquiry Type
                </label>
                <select className="h-[44px] px-md border border-steel rounded-[4px] font-body-md text-ink bg-white transition-all focus:ring-0">
                  <option>Admissions Inquiry</option>
                  <option>Placement Services</option>
                  <option>Alumni Affairs</option>
                  <option>Academic Transcripts</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col space-y-xxs">
                <label className="font-caption-bold text-caption-bold text-secondary uppercase">
                  Your Message
                </label>
                <textarea
                  className="p-md border border-steel rounded-[4px] font-body-md text-ink bg-white transition-all focus:ring-0 resize-none"
                  placeholder="How can we help you?"
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  className="bg-primary text-on-ink font-button-md py-md px-xxl rounded-sm hover:bg-primary-container active:scale-95 transition-all w-full md:w-auto uppercase"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-xl">
            <div className="bg-ink text-on-ink p-xxl rounded-xl">
              <h3 className="font-display-sm text-display-sm mb-lg border-l-4 border-primary pl-md">
                Campus Directions
              </h3>
              <div className="space-y-lg">
                <div className="flex space-x-md">
                  <span className="material-symbols-outlined text-primary-soft">
                    directions_bus
                  </span>
                  <div>
                    <p className="font-body-emphasis mb-xxs">By Bus</p>
                    <p className="font-caption-md opacity-70">
                      Major inter-city buses stop at the Central Bus Terminal.
                      Take a city shuttle or auto-rickshaw directly to the NIET
                      North Gate (approx. 15 mins).
                    </p>
                  </div>
                </div>
                <div className="flex space-x-md">
                  <span className="material-symbols-outlined text-primary-soft">
                    train
                  </span>
                  <div>
                    <p className="font-body-emphasis mb-xxs">By Rail</p>
                    <p className="font-caption-md opacity-70">
                      Nearest Junction: Punjab Central (8km). Pre-paid taxis and
                      institute shuttle buses are available during peak hours
                      (08:00 - 10:00).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-cloud border border-fog rounded-xl overflow-hidden h-full min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center flex-col p-xl text-center bg-zinc-100">
                <span className="material-symbols-outlined text-[48px] text-steel mb-md">
                  map
                </span>
                <p className="font-body-emphasis text-ink">
                  Interactive Map Placeholder
                </p>
                <p className="font-caption-md text-secondary">
                  Punjab, India Region
                </p>
                <img
                  alt="Simplified geographic map pattern of Punjab region"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  data-location="Punjab, India"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPVHs1sMutWNkQYL0y3WwI9whzDrgFqqksNtCwuVccemlTU4EfnRSyf7egFYBY294oUkE00cB3ppr8pwPw_3hGZxmr3IdtvWuZ1u2WLKJ-7ohZvgCKfurkp6IeKMzBPmf3HXq6--2e5cPOAWte2NpE0TEQl7bCojaj-MTUiSMxxg-1qK0BiRL9FNBTpRRNJ0hXKL0JeSe9z2PJp2IgpedtGr4cIcR9_CebrJb0NeMf3M0tNTKweBhRp7cZFPtWjG_-w5FZpotZAAAj"
                />
                <div className="mt-md bg-canvas px-xl py-xs border border-fog rounded-sm text-ink-soft text-caption-bold uppercase cursor-pointer hover:bg-fog transition-colors relative z-10">
                  View on Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-section border-t border-fog">
        <div className="max-w-max-width mx-auto px-lg">
          <h2 className="font-display-md text-display-md text-ink text-center mb-xxl">
            Departmental Directory
          </h2>
          <div className="grid md:grid-cols-3 gap-xl">
            <div className="bg-canvas p-xl rounded-xl border-t-4 border-primary shadow-sm">
              <h4 className="font-display-xs text-display-xs mb-md">
                Admissions
              </h4>
              <div className="space-y-md">
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    General Helpline
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 101</span>
                </div>
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    Post-Graduate
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 105</span>
                </div>
                <p className="font-caption-md text-primary mt-md font-bold">
                  admissions@niet.edu.in
                </p>
              </div>
            </div>

            <div className="bg-canvas p-xl rounded-xl border-t-4 border-ink shadow-sm">
              <h4 className="font-display-xs text-display-xs mb-md">
                Finance &amp; Accounts
              </h4>
              <div className="space-y-md">
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    Fee Payments
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 220</span>
                </div>
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    Scholarships
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 225</span>
                </div>
                <p className="font-caption-md text-primary mt-md font-bold">
                  accounts@niet.edu.in
                </p>
              </div>
            </div>

            <div className="bg-canvas p-xl rounded-xl border-t-4 border-primary shadow-sm">
              <h4 className="font-display-xs text-display-xs mb-md">
                Academic HODs
              </h4>
              <div className="space-y-md">
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    Comp. Science
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 310</span>
                </div>
                <div className="flex justify-between border-b border-fog pb-xxs">
                  <span className="font-caption-md text-secondary">
                    Mech. Engineering
                  </span>
                  <span className="font-body-emphasis text-ink">Ext: 320</span>
                </div>
                <p className="font-caption-md text-primary mt-md font-bold">
                  hod.office@niet.edu.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
