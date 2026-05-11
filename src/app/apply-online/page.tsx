/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


export default function ApplyOnline() {
    return (
        <>



<main className="max-w-max-width mx-auto px-lg py-section min-h-[calc(100vh-64px)]">

<div className="mb-section">
<div className="relative flex justify-between items-start max-w-4xl mx-auto">

<div className="absolute top-5 left-0 w-full h-[2px] bg-fog -z-10"></div>
<div className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500 -z-10" style={{ width: '12.5%' }}></div>

<div className="flex flex-col items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-md">1</div>
<span className="font-caption-bold text-ink">Personal Info</span>
</div>

<div className="flex flex-col items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-canvas border-2 border-fog text-secondary flex items-center justify-center font-bold">2</div>
<span className="font-caption-md text-secondary">Academic History</span>
</div>

<div className="flex flex-col items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-canvas border-2 border-fog text-secondary flex items-center justify-center font-bold">3</div>
<span className="font-caption-md text-secondary">Program Selection</span>
</div>

<div className="flex flex-col items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-canvas border-2 border-fog text-secondary flex items-center justify-center font-bold">4</div>
<span className="font-caption-md text-secondary">Document Upload</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">

<div className="lg:col-span-8 bg-canvas rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)] p-xxl relative overflow-hidden">

<div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-10">
<div className="chevron-motif bg-primary w-full h-12 absolute top-0 right-[-20%] rotate-12"></div>
<div className="chevron-motif bg-primary w-full h-12 absolute top-8 right-[-10%] rotate-12"></div>
</div>
<div className="mb-xl">
<h1 className="font-display-md text-display-md text-ink mb-xs">Personal Information</h1>
<p className="text-body-md text-on-surface-variant">Please provide your primary contact and family details as per your official documents.</p>
</div>
<form className="space-y-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl">

<div className="flex flex-col gap-xs">
<label className="font-caption-bold text-ink" htmlFor="name">Full Name (As per High School Certificate)</label>
<input className="h-11 rounded-lg border-steel focus:border-ink focus:ring-0 transition-all px-md font-body-md text-ink placeholder:text-outline" id="name" placeholder="John Doe" type="text"/>
</div>

<div className="flex flex-col gap-xs">
<label className="font-caption-bold text-ink" htmlFor="email">Email Address</label>
<input className="h-11 rounded-lg border-steel focus:border-ink focus:ring-0 transition-all px-md font-body-md text-ink placeholder:text-outline" id="email" placeholder="john.doe@example.com" type="email"/>
</div>

<div className="flex flex-col gap-xs">
<label className="font-caption-bold text-ink" htmlFor="phone">Phone Number</label>
<div className="flex gap-xxs">
<span className="h-11 flex items-center px-sm bg-cloud border border-steel rounded-lg text-secondary font-body-md">+91</span>
<input className="h-11 flex-1 rounded-lg border-steel focus:border-ink focus:ring-0 transition-all px-md font-body-md text-ink placeholder:text-outline" id="phone" placeholder="9876543210" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-xs">
<label className="font-caption-bold text-ink" htmlFor="father">Father&apos;s Name</label>
<input className="h-11 rounded-lg border-steel focus:border-ink focus:ring-0 transition-all px-md font-body-md text-ink placeholder:text-outline" id="father" placeholder="Robert Doe" type="text"/>
</div>
</div>

<div className="flex flex-col gap-xs">
<label className="font-caption-bold text-ink" htmlFor="address">Permanent Address</label>
<textarea className="rounded-lg border-steel focus:border-ink focus:ring-0 transition-all p-md font-body-md text-ink placeholder:text-outline resize-none" id="address" placeholder="Street name, City, State, ZIP code" rows={3}></textarea>
</div>
<div className="pt-lg flex items-center justify-between border-t border-fog">
<p className="text-caption-sm text-secondary italic">Step 1 of 4: Personal Information</p>
<button className="bg-primary hover:bg-primary-deep text-on-primary font-button-md h-11 px-xxl rounded transition-all active:scale-95 flex items-center gap-sm" type="submit">
                            Next: Academic History
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</form>
</div>

<aside className="lg:col-span-4 space-y-lg">

<div className="bg-ink rounded-xl p-xl text-on-ink relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-display-xs text-display-xs mb-md">Need Help?</h3>
<p className="font-caption-md opacity-80 mb-xl">Our admissions team is here to guide you through every step of the application process.</p>
<div className="space-y-lg">
<div className="flex items-start gap-md">
<span className="material-symbols-outlined text-primary-soft">call</span>
<div>
<p className="font-caption-bold">Call Us</p>
<p className="font-body-md text-primary-soft">+91 123 456 7890</p>
</div>
</div>
<div className="flex items-start gap-md">
<span className="material-symbols-outlined text-primary-soft">mail</span>
<div>
<p className="font-caption-bold">Email Support</p>
<p className="font-body-md text-primary-soft">admissions@niet.edu.in</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[-10px] right-[-20px] w-32 h-32 opacity-20 pointer-events-none">
<div className="chevron-motif bg-primary-bright w-full h-full transform rotate-45"></div>
</div>
</div>

<div className="bg-cloud rounded-xl p-xl border border-fog">
<h4 className="font-caption-bold text-ink mb-md flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[20px]">info</span>
                        Checklist for next steps
                    </h4>
<ul className="space-y-sm">
<li className="flex items-start gap-sm text-caption-md text-secondary">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                            10th &amp; 12th Marksheets ready
                        </li>
<li className="flex items-start gap-sm text-caption-md text-secondary">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                            Government ID (Aadhar/Passport)
                        </li>
<li className="flex items-start gap-sm text-caption-md text-secondary">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                            Recent passport size photo
                        </li>
</ul>
</div>

<div className="rounded-xl overflow-hidden aspect-video relative">
<img alt="Modern University Campus" className="w-full h-full object-cover" data-alt="A wide-angle shot of a modern, architectural university campus building at dawn. The structure features clean glass surfaces and sharp geometric lines that reflect a cool, professional blue light. The atmosphere is serene and intellectual, illuminated by soft morning sunlight that creates a sense of optimism and high-end educational pursuit. The background shows a manicured green landscape under a clear, bright sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8GIHjXr4Ut2gAl7XWjtYskYGA5M2kFvlVle8j2X4i5oEmDHMV17IMdPFHLduIRAP_gafjJRR90mVFW51yRQcfk3GF97bpV6cuE2umHnpVImlTPYekht8L2Q5JSnGyspdN7qWFZK7zifnOFfB-QZJt6a5cl5PBCM4TB5KG9sACxiGZXdEv0syMj7x_B7Uuw72lRrZv37jr954noT4kD4JG75ai6MlnL0iFXawaYxg1MVxj2JsbVh-Y7agoz1pHHaoFga8sX9Eu6jeC"/>
<div className="absolute inset-0 bg-ink/20 flex flex-col justify-end p-lg">
<p className="text-on-ink font-display-xs">Join our 2024 Cohort</p>
</div>
</div>
</aside>
</div>
</main>


        </>
    );
}
