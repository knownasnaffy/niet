import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink pt-xxl border-t border-ink-soft">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-xl w-full px-lg py-xxl max-w-max-width mx-auto">
        <div className="md:col-span-1">
          <Link href="/" className="text-display-xs font-display-xs text-on-ink block mb-lg">NIET</Link>
          <p className="text-caption-md opacity-70 mb-xl">Shaping the future of engineering education with innovation, research, and technical excellence.</p>
          <div className="flex gap-md">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-bright">social_leaderboard</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-bright">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-bright">share</span>
          </div>
        </div>
        <div>
          <h5 className="text-body-emphasis font-bold mb-lg">Admissions</h5>
          <ul className="space-y-sm text-caption-md">
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/apply-online">Apply Now</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/admissions-overview">Eligibility</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/scholarships-fees">Scholarships</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/scholarships-fees">Fee Structure</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-body-emphasis font-bold mb-lg">Academics</h5>
          <ul className="space-y-sm text-caption-md">
            <li><Link className="text-on-ink font-bold" href="/academic-calendar">Academic Calendar</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/department-listing">Departments</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="#">Library</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/academic-results">Examinations</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-body-emphasis font-bold mb-lg">Quick Links</h5>
          <ul className="space-y-sm text-caption-md">
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="#">Alumni Connect</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="/recruiter-gallery">Careers</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="#">Privacy Policy</Link></li>
            <li><Link className="opacity-70 hover:opacity-100 hover:text-primary-bright transition-opacity" href="#">NIRF Data</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-body-emphasis font-bold mb-lg">Contact Us</h5>
          <ul className="space-y-sm text-caption-md opacity-70">
            <li className="flex items-start gap-xs"><span className="material-symbols-outlined text-[18px]">location_on</span> Knowledge Park III, Greater Noida, UP</li>
            <li className="flex items-start gap-xs"><span className="material-symbols-outlined text-[18px]">phone</span> +91 123 456 7890</li>
            <li className="flex items-start gap-xs"><span className="material-symbols-outlined text-[18px]">mail</span> info@niet.edu</li>
          </ul>
        </div>
      </div>
      <div className="bg-ink-deep py-lg border-t border-ink-soft">
        <div className="max-w-max-width mx-auto px-lg text-center md:text-left text-caption-md opacity-70">
          © 2024 Northvale Institute of Engineering &amp; Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
