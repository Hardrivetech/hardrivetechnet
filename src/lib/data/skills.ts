export interface SkillCategory {
	title: string;
	description: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: 'Core Languages',
		description: 'The languages behind every shipped project, from engine code to scripts.',
		skills: ['C++', 'Kotlin', 'Python', 'PowerShell', 'TypeScript', 'GLSL']
	},
	{
		title: 'Game Engine & Graphics',
		description: 'Built while developing CarnageEngine for Through the Eyes of Carnage.',
		skills: ['Vulkan', 'GLFW', 'GLM', 'Dear ImGui', 'VMA', 'spdlog']
	},
	{
		title: 'Systems & Embedded',
		description: 'From Windows internals automation to a Raspberry Pi car headunit build.',
		skills: ['Raspberry Pi 5', 'GPIO / systemd', 'WMI / CIM', 'Task Scheduler', 'DISM / SFC', 'PipeWire / BlueZ']
	},
	{
		title: 'Android & Mobile',
		description: 'Shipped as t1dTracker, a security-hardened Type 1 diabetes tracker.',
		skills: ['Jetpack Compose', 'Room', 'Gradle', 'AES-GCM / PBKDF2', 'ktlint / detekt', 'CodeQL']
	},
	{
		title: 'Web Development',
		description: 'The stack this very site is built on — fast, typed, and modern.',
		skills: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js']
	},
	{
		title: 'Engineering Practice',
		description: 'The discipline behind the code, enforced through CI on every project.',
		skills: [
			'CI/CD Pipelines',
			'Static Analysis',
			'Automated Testing',
			'Git',
			'Secure-by-Design',
			'Technical Documentation'
		]
	}
];
