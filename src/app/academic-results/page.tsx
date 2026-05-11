/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


export default function AcademicResults() {
    return (
        <>



<main className="max-w-max-width mx-auto px-lg py-section">

<div className="relative bg-ink text-on-ink rounded-xl overflow-hidden mb-section">

<div className="absolute left-0 top-0 h-full w-24 bg-primary chevron-bg opacity-20 -translate-x-12"></div>
<div className="absolute right-0 top-0 h-full w-24 bg-primary chevron-bg opacity-20 translate-x-12"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xxl p-xxl items-center">
<div>
<h1 className="font-display-lg text-display-lg mb-xs">Academic Performance</h1>
<p className="font-body-lg text-body-lg text-on-ink opacity-70">Official transcript record for the Bachelor of Technology program.</p>
</div>
<div className="flex gap-xl justify-end">
<div className="bg-ink-soft p-xl rounded-lg border border-charcoal text-center min-w-[160px]">
<span className="block font-display-xxl text-display-xxl text-primary-bright">8.72</span>
<span className="font-caption-bold text-caption-bold uppercase tracking-wider opacity-60">Overall CGPA</span>
</div>
<div className="bg-ink-soft p-xl rounded-lg border border-charcoal text-center min-w-[160px]">
<span className="block font-display-xxl text-display-xxl text-on-ink">144</span>
<span className="font-caption-bold text-caption-bold uppercase tracking-wider opacity-60">Credits Earned</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">

<div className="lg:col-span-9 space-y-lg">

<div className="flex items-center justify-between bg-cloud p-md border border-fog rounded-lg">
<div className="flex items-center gap-md">
<label className="font-body-emphasis text-body-emphasis text-secondary" htmlFor="semester">Academic Term:</label>
<select className="bg-canvas border border-steel rounded-md px-md py-xs font-body-md focus:ring-0 focus:border-ink outline-none cursor-pointer" id="semester">
<option>Semester 4 (Current)</option>
<option>Semester 3</option>
<option>Semester 2</option>
<option>Semester 1</option>
</select>
</div>
<div className="flex items-center gap-xs text-secondary">
<span className="material-symbols-outlined text-[18px]">info</span>
<span className="font-caption-md text-caption-md">Last updated: Oct 24, 2024</span>
</div>
</div>

<div className="bg-canvas border border-fog rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)] overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-cloud border-b border-fog">
<th className="px-xl py-md font-caption-bold text-caption-bold text-secondary uppercase tracking-wider">Subject Code</th>
<th className="px-xl py-md font-caption-bold text-caption-bold text-secondary uppercase tracking-wider">Subject Title</th>
<th className="px-xl py-md font-caption-bold text-caption-bold text-secondary uppercase tracking-wider text-center">Credits</th>
<th className="px-xl py-md font-caption-bold text-caption-bold text-secondary uppercase tracking-wider text-center">Grade</th>
<th className="px-xl py-md font-caption-bold text-caption-bold text-secondary uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-fog">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-xl py-lg font-body-emphasis text-body-emphasis text-ink">CS401</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink">Design and Analysis of Algorithms</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink text-center">4</td>
<td className="px-xl py-lg font-display-xs text-display-xs text-primary-bright text-center">A+</td>
<td className="px-xl py-lg text-right">
<span className="inline-flex items-center px-sm py-xxs bg-green-50 text-green-700 rounded-full text-caption-bold font-caption-bold">PASS</span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-xl py-lg font-body-emphasis text-body-emphasis text-ink">CS402</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink">Database Management Systems</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink text-center">4</td>
<td className="px-xl py-lg font-display-xs text-display-xs text-primary-bright text-center">A</td>
<td className="px-xl py-lg text-right">
<span className="inline-flex items-center px-sm py-xxs bg-green-50 text-green-700 rounded-full text-caption-bold font-caption-bold">PASS</span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-xl py-lg font-body-emphasis text-body-emphasis text-ink">CS403</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink">Operating Systems</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink text-center">3</td>
<td className="px-xl py-lg font-display-xs text-display-xs text-primary-bright text-center">B+</td>
<td className="px-xl py-lg text-right">
<span className="inline-flex items-center px-sm py-xxs bg-green-50 text-green-700 rounded-full text-caption-bold font-caption-bold">PASS</span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-xl py-lg font-body-emphasis text-body-emphasis text-ink">MA401</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink">Discrete Mathematics</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink text-center">4</td>
<td className="px-xl py-lg font-display-xs text-display-xs text-primary-bright text-center">A</td>
<td className="px-xl py-lg text-right">
<span className="inline-flex items-center px-sm py-xxs bg-green-50 text-green-700 rounded-full text-caption-bold font-caption-bold">PASS</span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-xl py-lg font-body-emphasis text-body-emphasis text-ink">CS404</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink">Computer Organization &amp; Architecture</td>
<td className="px-xl py-lg font-body-md text-body-md text-ink text-center">3</td>
<td className="px-xl py-lg font-display-xs text-display-xs text-primary-bright text-center">A-</td>
<td className="px-xl py-lg text-right">
<span className="inline-flex items-center px-sm py-xxs bg-green-50 text-green-700 rounded-full text-caption-bold font-caption-bold">PASS</span>
</td>
</tr>
</tbody>
</table>
<div className="bg-cloud px-xl py-md flex justify-between items-center border-t border-fog">
<p className="font-caption-md text-caption-md text-secondary">Total SGPA for Semester 4: <span className="font-bold text-ink">8.85</span></p>
<p className="font-caption-md text-caption-md text-secondary">Total Credits Attempted: <span className="font-bold text-ink">18</span></p>
</div>
</div>
</div>

<aside className="lg:col-span-3 space-y-lg">
<div className="bg-canvas border border-fog rounded-xl p-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)]">
<h3 className="font-display-xs text-display-xs mb-md">Quick Actions</h3>
<div className="space-y-md">
<button className="w-full flex items-center justify-center gap-xs bg-ink text-on-ink font-button-md text-button-md py-3 rounded-DEFAULT hover:bg-ink-soft transition-colors scale-100 active:scale-95">
<span className="material-symbols-outlined text-[20px]">download</span>
                            DOWNLOAD MARKSHEET
                        </button>
<button className="w-full flex items-center justify-center gap-xs border border-primary text-primary font-button-md text-button-md py-3 rounded-DEFAULT hover:bg-primary-soft/10 transition-colors scale-100 active:scale-95">
<span className="material-symbols-outlined text-[20px]">description</span>
                            APPLY FOR RE-EVALUATION
                        </button>
</div>
</div>
<div className="bg-cloud border border-fog rounded-xl p-xl">
<h4 className="font-caption-bold text-caption-bold uppercase tracking-wider text-secondary mb-sm">Important Note</h4>
<p className="font-caption-md text-caption-md text-secondary leading-relaxed">
                        Online results are for immediate information only. These cannot be treated as original mark sheets. Original mark sheets will be issued by the University separately.
                    </p>
<hr className="my-md border-fog"/>
<a className="text-primary-bright font-caption-bold text-caption-bold hover:underline flex items-center gap-xxs" href="#">
                        View Grading System
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>

<div className="relative bg-primary-container rounded-xl p-xl text-on-primary-container overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-bright opacity-20 rounded-full"></div>
<h4 className="font-display-xs text-display-xs mb-xs relative z-10">Need Help?</h4>
<p className="font-caption-md text-caption-md opacity-90 mb-md relative z-10">Contact the examination cell for any discrepancies in your record.</p>
<button className="bg-on-ink text-primary px-md py-2 rounded-DEFAULT font-button-md text-button-md relative z-10">Contact Support</button>
</div>
</aside>
</div>
</main>



        </>
    );
}
