/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


export default function ResetPassword() {
    return (
        <>



<main className="flex-grow flex items-center justify-center py-section px-md relative overflow-hidden">

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 hidden lg:block">
<div className="chevron-decoration bg-primary w-24 h-96 opacity-10"></div>
</div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 hidden lg:block">
<div className="chevron-decoration bg-primary w-24 h-96 opacity-10"></div>
</div>

<div className="w-full max-w-[480px] bg-canvas rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)] p-xxl relative z-10 border border-fog">

<div className="mb-xxl text-center">
<div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-low rounded-full mb-md">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="lock_reset">lock_reset</span>
</div>
<h1 className="font-display-md text-display-md text-ink mb-xs">Set New Password</h1>
<p className="font-body-md text-body-md text-secondary">Create a secure password to protect your account.</p>
</div>

<form className="space-y-xl">

<div className="space-y-xs">
<label className="font-body-emphasis text-body-emphasis text-charcoal" htmlFor="new_password">New Password</label>
<div className="relative">
<input className="w-full h-[44px] px-md border border-steel rounded-[4px] focus:border-ink focus:ring-0 text-body-md font-body-md transition-colors outline-none pr-12" id="new_password" placeholder="Min. 12 characters" type="password"/>
<button className="absolute right-md top-1/2 -translate-y-1/2 text-graphite hover:text-ink transition-colors" type="button">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>

<div className="pt-xxs">
<div className="flex justify-between items-center mb-xxs">
<span className="font-caption-md text-caption-md text-graphite">Strength: <span className="text-primary-bright font-bold">Strong</span></span>
</div>
<div className="flex gap-xxs h-1">
<div className="flex-1 bg-primary rounded-full"></div>
<div className="flex-1 bg-primary rounded-full"></div>
<div className="flex-1 bg-primary rounded-full"></div>
<div className="flex-1 bg-fog rounded-full"></div>
</div>
<p className="font-caption-sm text-caption-sm text-graphite mt-xs">Use a mix of letters, numbers, and symbols.</p>
</div>
</div>

<div className="space-y-xs">
<label className="font-body-emphasis text-body-emphasis text-charcoal" htmlFor="confirm_password">Confirm New Password</label>
<div className="relative">
<input className="w-full h-[44px] px-md border border-steel rounded-[4px] focus:border-ink focus:ring-0 text-body-md font-body-md transition-colors outline-none pr-12" id="confirm_password" placeholder="Repeat new password" type="password"/>
<button className="absolute right-md top-1/2 -translate-y-1/2 text-graphite hover:text-ink transition-colors" type="button">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</div>
</div>

<div className="pt-md">
<button className="w-full h-[44px] bg-primary text-on-ink font-button-md text-button-md uppercase rounded-[4px] hover:bg-primary-deep transition-all duration-200 flex items-center justify-center gap-xs" type="submit">
                        Update Password
                        <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="text-center pt-md">
<a className="font-caption-bold text-caption-bold text-primary hover:text-primary-deep transition-colors flex items-center justify-center gap-xxs" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
                        Back to Login
                    </a>
</div>
</form>
</div>
</main>



        </>
    );
}
