"use client";
import React, { useState } from "react";
import mockData from "@/data/mockData.json";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


export default function FacultyDirectory() {
    const [searchQuery, setSearchQuery] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("All");
    const filteredFaculty = mockData.faculty.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || member.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesDept = departmentFilter === "All" || member.department === departmentFilter;
        return matchesSearch && matchesDept;
    });
    const departments = ["All", ...new Set(mockData.faculty.map(f => f.department))];

    return (
        <>



<main className="pt-16 min-h-screen">

<section className="bg-ink text-on-ink py-xl relative overflow-hidden">
<div className="max-w-[1366px] mx-auto px-xl relative z-10">
<h1 className="font-display-lg text-display-lg font-bold mb-xs">Faculty Directory</h1>
<p className="text-on-ink opacity-80 font-body-lg text-body-lg max-w-2xl">Connect with our world-class researchers and distinguished scholars driving innovation at the Northvale Institute of Engineering &amp; Technology.</p>
</div>

<div className="absolute right-0 top-0 h-full w-32 flex items-center justify-end pointer-events-none">
<div className="h-4/5 w-16 bg-primary opacity-20 transform skew-x-[-15deg] translate-x-8"></div>
<div className="h-3/5 w-8 bg-primary opacity-40 transform skew-x-[-15deg] translate-x-4"></div>
</div>
</section>
<section className="max-w-[1366px] mx-auto px-xl py-section">
<div className="flex flex-col md:flex-row gap-xxl">

<aside className="w-full md:w-72 flex-shrink-0">
<div className="sticky top-24 space-y-xl">
<div className="bg-cloud p-lg rounded-xl border border-fog">
<h3 className="font-caption-bold text-caption-bold mb-md uppercase tracking-wider text-ink-soft">Search Faculty</h3>
<div className="relative">
<input className="w-full h-11 px-md rounded-[4px] border border-steel focus:border-ink focus:ring-0 transition-colors text-body-md" placeholder="Name or Research interest..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-secondary" data-icon="manage_search">manage_search</span>
</div>
</div>
<div className="space-y-sm">
<h3 className="font-caption-bold text-caption-bold mb-md uppercase tracking-wider text-ink-soft px-xxs">Departments</h3>
<nav className="flex flex-col gap-xxs">
<button className="flex items-center justify-between w-full px-md py-sm bg-primary text-on-ink rounded-[4px] font-body-emphasis text-body-emphasis text-left transition-all">
<span>All Departments</span>
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between w-full px-md py-sm text-secondary hover:bg-cloud hover:text-ink rounded-[4px] font-body-md text-body-md text-left transition-all group">
<span>Computer Science</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between w-full px-md py-sm text-secondary hover:bg-cloud hover:text-ink rounded-[4px] font-body-md text-body-md text-left transition-all group">
<span>Artificial Intelligence</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between w-full px-md py-sm text-secondary hover:bg-cloud hover:text-ink rounded-[4px] font-body-md text-body-md text-left transition-all group">
<span>Robotics &amp; Control</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between w-full px-md py-sm text-secondary hover:bg-cloud hover:text-ink rounded-[4px] font-body-md text-body-md text-left transition-all group">
<span>Civil Engineering</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between w-full px-md py-sm text-secondary hover:bg-cloud hover:text-ink rounded-[4px] font-body-md text-body-md text-left transition-all group">
<span>Nanotechnology</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</button>
</nav>
</div>
</div>
</aside>

<div className="flex-grow">
<div className="flex items-center justify-between mb-xl pb-md border-b border-fog">
<span className="text-secondary font-caption-md text-caption-md">Showing 48 Faculty Members</span>
<div className="flex gap-sm">
<span className="text-caption-md font-caption-bold">Sort By:</span>
<select className="bg-transparent border-none p-0 text-caption-md font-caption-md focus:ring-0 cursor-pointer text-primary">
<option>A - Z</option>
<option>Seniority</option>
<option>Recent Publications</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A professional portrait of a female university professor with a focused and confident expression, set against a blurred academic background. She is wearing professional attire. The lighting is soft and high-key, aligning with a modern, clean light-mode aesthetic dominated by whites and soft greys with subtle blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0xPpQT1T83ERU-Hl3ExsLLDZViAQMD_qa-dzXZF1D8YOKVvmj8NEcxbKb4OWIOXnKnWp_uF5wJZBzJuc9A-1WsjV1bc4PyrzRl8QJzLpLefcRUZA2DdbMirHNyhRIAt_Pp-4Pr7ygbaJCrBKK8L8FDJ1F0k6HwU2qsdCePBkEGtuoqW-Z9nZ_OiJGLjRWRoK-cyTTbqsduQzzBI7kPVxdLKCRondDm1i_Z2PzZVC1pB3JyUNm2j3rOAg9adq09A3UY5tzrPqdDmnK"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Computer Science</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Dr. Elena Rodriguez</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Head of AI Research Lab</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Neural Networks</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Ethics in AI</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A distinguished male professor with short hair and glasses, wearing a tailored navy blazer, looking directly at the camera with a calm, intellectual demeanor. The background is a minimalist, modern office with soft daylight. The aesthetic is professional and clean, using a palette of white, steel grey, and deep blue to ensure visual harmony." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtP1aEBglfc3EzbMwAhcpr7emTTF7wGQG0By39s65nee-HnStjjwd3S1uPxZjqfvzSWgdg2Qh14ykNkhSfqA9czYaQBnE_44VZsB_Qvqv15475qZ3ip-DE_3XTP7LCh2UcR8qwz22OQIThqqTgfr6r2lPqvDpivUGCgq6mXIMOsGXNAG4JRpvUeqQL9yF_QN-7rlU3XjEMGZw6PdL5PAw1ctp_q5OtgGfKdEMPR3Kwckez--Qd55-SzUqgZi-2KjTOnTNhYqg6f0DR"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Nanotechnology</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Dr. Marcus Chen</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Distinguished Professor</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Quantum Sensing</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Materials Science</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A portrait of a female research scientist in a brightly lit academic environment. She has a warm, welcoming expression. The photo is composed with clean lines and plenty of whitespace. The lighting is natural and bright, echoing the corporate-clean brand identity with a high-contrast focus on her professional presence against a soft-focus laboratory background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgkUPhHjc73VQFYGYabBCuVuW9ifSv9LmBzO7JyWw8X4idkALOrOjRIbzEuUA4ZYJklm3fIvOHyqpX_GIOlUgLWqxB4LUEnvOQdPSx3oIz5ZQxgaCvnj_TCRzjVXpxBTYrauFGfcodjDpkFkmTaPft9w-mHdCU4IvkBHrTjX8b7NU4zQdyBuS9wolpSZSzknkjAjGB_11EW6iidP7wRuZAzaaDinZkrlh33PLtcWQc4PQrLkafrINSX_zoch2qjh9-zOll2mIEtKCx"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Robotics &amp; Control</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Prof. Sarah Jenkins</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Senior Faculty, Robotics</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Autonomous Systems</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Mechatronics</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A high-quality professional photograph of a male professor in a scholarly setting. He has a thoughtful expression and is dressed in a crisp white shirt and a dark blazer. The image emphasizes a clean, high-density professional aesthetic with bright lighting and deep ink-black shadows for depth. The style is modern-corporate with architectural clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Tb-TGo4gfeXJmxWhbEePLs_uday7lYcMJt2-O2MRnFRiuON0ljwxA85A1f2CFKEAi6Z9jbzBHwc9YV-mcFvUrj3-PUuwwwzVCs9ut-sCd_0V0w95_2nRQfgTEbiWD1zoUcXRKFmUk0typlIJw6tSk4CdTocj2ukFE5JUOzrreumd82x0tf1SgrEZiLRNWqFwxtWd_XjiZ4VvVhQHT7ERzKSfdVemhH3dbL0al7dQThoT6sJM7RdF8MuiOFFB1orVZoEG6m_De81E"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Artificial Intelligence</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Dr. James Wilson</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Director, Deep Learning Lab</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Computer Vision</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">NLP</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A focused portrait of a male researcher in a modern academic building. He is wearing smart casual clothing and has a scholarly appearance. The environment is clean and architectural, with strong vertical lines. The color palette is restricted to white, grey, and professional navy, creating a look of efficiency and structured reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCv9l7yIzDwlGzY1jBV9fxJ565sG4FMHofYl8M-V_CgMO9IONPt3uRO3v9ELFrgg3PKY0KnFs8T0xAhBpCk2AbalAbspIPCAPvYjH2kXfQSMNPxgqbBE1xHaR_NDwW1YzCk4aDpXt4r_JnAxiISXCIJ0Xz5Ybpl4XC85hkY_AOBAqKQjvX5LneJBz3MbOp8XtkbOpWonAyQzBOFj6wOlA88oI8whvvWPFSkJhIEkCm8unEI28w1-JlPOLFy7HhnFR7ntqyQh4dmWKy"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Civil Engineering</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Dr. Robert Halloway</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Structural Design Lead</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Sustainability</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Seismic Resilience</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>

<div className="bg-paper rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border border-fog flex flex-col group hover:shadow-[0_8px_24px_rgba(26,26,26,0.12)] transition-shadow duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Faculty Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A professional headshot of a female academic in an office setting with shelves of books in the soft-focus background. She is smiling warmly yet maintains a professional and authoritative air. The lighting is even and bright, emphasizing a commercial-clean look with pristine white highlights and sharp, modern contrasts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNY5L3Csxhhd6O6dwC4Cc1lye2ieSImK6WZp6qLyiK2XqGirMu4tKK2UyxhxR79hg5ovtWm3oTjp73oIMZdzORoW_64pKChMoBg4TiCnej9zI9lrR0OsuGh62UbAl79Blc4bf9L2-j9OJbWNwfulNanyN41BBfY4vdRyTxaeN52HUXQaYTsjqdil9i-L97AByWO0x0qSSaSTWfFoG5mtocpHfvSPfRsb6qRHA7SPpPDMyuXeKdJUNgt6bVBEauwp4Umd1xj-LVqGmW"/>
<div className="chevron-accent"></div>
</div>
<div className="p-xl flex flex-grow flex-col">
<span className="text-primary font-caption-bold text-caption-bold uppercase tracking-widest mb-xs">Mathematics</span>
<h3 className="font-display-sm text-display-sm font-bold text-ink mb-xxs">Dr. Linda Sterling</h3>
<p className="text-secondary font-body-md text-body-md mb-md">Professor of Applied Math</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-xs mb-xl">
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Graph Theory</span>
<span className="bg-cloud text-graphite text-caption-sm font-caption-sm px-xs py-1 rounded">Stochastic Process</span>
</div>
<button className="w-full border border-primary text-primary font-button-md text-button-md py-2.5 rounded-[4px] hover:bg-primary hover:text-on-ink transition-all duration-200">View Profile</button>
</div>
</div>
</div>
</div>

<div className="mt-section flex items-center justify-center gap-xs">
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-fog hover:bg-cloud transition-colors text-secondary">
<span className="material-symbols-outlined" data-icon="keyboard_arrow_left">keyboard_arrow_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-primary text-on-ink font-button-md">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-fog hover:bg-cloud transition-colors text-secondary font-button-md">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-fog hover:bg-cloud transition-colors text-secondary font-button-md">3</button>
<span className="px-xs text-secondary">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-fog hover:bg-cloud transition-colors text-secondary font-button-md">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-fog hover:bg-cloud transition-colors text-secondary">
<span className="material-symbols-outlined" data-icon="keyboard_arrow_right">keyboard_arrow_right</span>
</button>
</div>
</div>
</div>
</section>
</main>



        </>
    );
}
