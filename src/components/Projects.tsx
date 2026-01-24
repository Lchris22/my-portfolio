import React, { useState } from 'react';
import { ExternalLink, X, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
        title: 'AI-Powered Voice Interview',
        description: 'Winner "Best GenAI Solution" at Semicolons 2025. An AI-driven interview platform utilizing LLMs to conduct voice-based exams, evaluate relevance, and score conversations.',
        details: 'Leveraged OpenAI API for core logic and speech-to-text. Built a custom scoring algorithm to rate candidates on technical accuracy and communication skills.',
        tags: ['GenAI', 'LLM', 'Voice Tech', 'Python', 'React'],
        link: '#',
    },
    {
        title: 'AI-Powered Nutrition Tracker',
        description: 'Cross-platform app using Meta Llama Vision and Watsonx.ai to analyze food images for real-time nutritional insights.',
        details: 'Integrated Firebase authentication and database. distinct features include macro-nutrient breakdown charts and history tracking.',
        tags: ['React Native', 'Python', 'Llama Vision', 'Firebase'],
        link: '#',
    },
    {
        title: 'High-Frequency Trading Dashboard',
        description: 'PWA integrating with a trading broker API via WebSockets for real-time market data.',
        details: 'Features minimal latency (<50ms) updates, automated risk management scripts, and one-click execution for high-volatility environments.',
        tags: ['Svelte', 'WebSocket', 'JavaScript', 'PWA'],
        link: '#',
    },
];

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white font-display">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-lg dark:hover:shadow-zinc-900/50 ${expandedIndex === index ? 'row-span-2' : ''}`}
                        >
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                                {project.description}
                            </p>

                            {expandedIndex === index && (
                                <div className="mb-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                                        {project.details}
                                    </p>
                                </div>
                            )}

                            <div className="mt-auto space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4">
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        {expandedIndex === index ? (
                                            <>Show Less <ChevronUp className="w-4 h-4" /></>
                                        ) : (
                                            <>Read More <ChevronDown className="w-4 h-4" /></>
                                        )}
                                    </button>

                                    {project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                        >
                                            Demo <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
