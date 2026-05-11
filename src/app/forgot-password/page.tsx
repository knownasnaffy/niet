/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


export default function ForgotPassword() {
    return (
        <>


<main className="flex-grow flex items-center justify-center px-md py-section">
<div className="w-full max-w-[440px]">

<div className="relative mb-xl">
<div className="absolute -left-4 top-0 w-2 h-full bg-primary"></div>
<div className="bg-canvas p-xxl rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog relative z-10">

<div className="flex flex-col items-center mb-xl text-center">
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-on-primary text-3xl" data-icon="lock_reset">lock_reset</span>
</div>
<h1 className="font-display-md text-display-md text-ink font-bold mb-xs">Forgot Password?</h1>
<p className="font-caption-md text-caption-md text-secondary max-w-[320px]">
                            Enter your institutional email address and we&apos;ll send you a link to reset your password.
                        </p>
</div>

<form action="#" className="space-y-xl">
<div className="space-y-xxs">
<label className="font-caption-bold text-caption-bold text-ink block" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-steel text-xl" data-icon="mail">mail</span>
<input className="w-full h-11 pl-[44px] pr-md bg-canvas border border-steel rounded-[4px] focus:ring-0 focus:border-ink font-body-md text-body-md transition-all placeholder:text-secondary/50" id="email" placeholder="name@niet.edu" required type="email"/>
</div>
</div>
<button className="w-full h-[44px] bg-primary hover:bg-primary-deep text-on-ink font-button-md text-button-md uppercase rounded-[4px] transition-colors flex items-center justify-center gap-xs" type="submit">
                            Send Reset Link
                        </button>
</form>

<div className="mt-xl pt-xl border-t border-fog text-center">
<a className="inline-flex items-center gap-xs font-button-md text-button-md text-primary hover:text-primary-deep transition-colors" href="/login">
<span className="material-symbols-outlined text-lg" data-icon="arrow_back">arrow_back</span>
                            Back to Login
                        </a>
</div>
</div>

<div className="absolute -right-2 -bottom-2 w-16 h-16 opacity-10 pointer-events-none overflow-hidden">
<div className="w-24 h-4 bg-primary rotate-45 absolute top-0"></div>
<div className="w-24 h-4 bg-primary rotate-45 absolute top-8"></div>
</div>
</div>

<div className="hidden md:block mt-xl opacity-40">
<img alt="Cybersecurity and digital protection" className="w-full h-32 object-cover rounded-xl grayscale" data-alt="A sophisticated close-up photograph of a professional laptop keyboard illuminated by cool, ambient blue light from a screen. The setting is a modern, minimalist workspace that conveys high-tech institutional security and reliable software infrastructure. The lighting is crisp and precise, mirroring a clean light-mode UI aesthetic with deep shadows and sharp focus on the mechanical keys. The overall atmosphere is one of technological order and professional integrity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcGLbJeWEUC4joHbi_BkAQ2oX82s-LYLXNCQNgm1xudeZ3VzJWUDwau3Kl3qWe-LvqldtPEITqjYPpGXg8xoB6nYQk4ZPjTtGC9NIcsVCPWtQyHTdyBZldcDF3jSf8Sj-9vqDkiSPX-xMLPG7-RkMGUd0-cyrzrgS2BUC2cCdnnlpIl4NK2xwOqjW9mRaIJjDs0dYxR_EhSPh6wL4ZCSvsslJxEP2QVkWE-8GmE-Bs8xp0xrwSTDyZDyr1ZEHJWlbqw9F3as3xaWXG"/>
</div>
</div>
</main>



        </>
    );
}
