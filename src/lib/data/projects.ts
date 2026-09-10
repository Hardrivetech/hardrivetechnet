export type AccentColor = 'indigo' | 'cyan' | 'violet' | 'emerald';
export type ProjectStatus = 'active' | 'stable' | 'r&d';

export interface ProjectHighlight {
	label: string;
	value: string;
}

export interface Project {
	slug: string;
	index: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	stack: string[];
	highlights: ProjectHighlight[];
	repoHref: string;
	liveHref?: string;
	status: ProjectStatus;
	accent: AccentColor;
	span: 'lg' | 'md';
}

export const featuredProjects: Project[] = [
	{
		slug: 'carnage-engine',
		index: '01',
		name: 'CarnageEngine',
		category: 'Game Engine Architecture',
		tagline:
			'A proprietary Vulkan-based engine built for visceral, industrial-themed action — “The Heart of Industrial Action.”',
		description:
			'CarnageEngine is DriveBy Studios’ proprietary C++ / Vulkan engine powering Through the Eyes of Carnage. Built around “The Law of Carnage” — physics as a governing law rather than a background calculation — it drives high-contrast industrial rendering, cybernetic AI pathfinding, and procedural cyber-drone audio. Its physics core, CiPhyxs, has been spun out and open-sourced for the wider developer community.',
		stack: ['C++', 'Vulkan', 'GLFW', 'GLM', 'Dear ImGui', 'VMA', 'spdlog'],
		highlights: [
			{ label: 'Physics', value: 'CiPhyxs solver' },
			{ label: 'Renderer', value: 'Vulkan (in-progress)' },
			{ label: 'Studio', value: 'DriveBy Studios' }
		],
		repoHref: 'https://github.com/Driveby-Studios/CarnageEngine-Public',
		status: 'r&d',
		accent: 'indigo',
		span: 'lg'
	},
	{
		slug: 'windows-10-longevity-suite',
		index: '02',
		name: 'Windows 10 Longevity Suite',
		category: 'System Automation & Maintenance',
		tagline: 'A modular PowerShell suite that automates Windows health, performance, and longevity.',
		description:
			'An 18-script PowerShell automation suite that combats “system rot” on Windows 10/11 — orchestrating disk health monitoring, SFC/DISM integrity repair, WinSxS cleanup, thermal and resource watchdogs, malware scans, and Robocopy-based backups. Each script runs standalone, while Master.ps1 orchestrates the full sequence and emits a consolidated status report, with Task Scheduler automation and signed-script hardening built in.',
		stack: ['PowerShell', 'WMI / CIM', 'Task Scheduler', 'DISM / SFC', 'S.M.A.R.T.', 'Robocopy'],
		highlights: [
			{ label: 'Scripts', value: '18 modular units' },
			{ label: 'Orchestration', value: 'Master.ps1 pipeline' },
			{ label: 'Automation', value: 'Scheduled + signed' }
		],
		repoHref: 'https://github.com/Hardrivetech/Windows-10-Longevity-Suite',
		status: 'active',
		accent: 'cyan',
		span: 'md'
	},
	{
		slug: 'pi-stereo',
		index: '03',
		name: 'piStereo',
		category: 'Embedded Automotive Head Unit',
		tagline: 'A Raspberry Pi 5 double-DIN headunit retrofit for a 1988 Chrysler Conquest.',
		description:
			'A custom double-DIN car headunit built around a Raspberry Pi 5, replacing the factory stereo in a 1988 Chrysler Conquest. A Python GPIO daemon drives the physical controls — volume knob, power button, and transport buttons — running as a systemd service, while PipeWire and BlueZ handle Bluetooth A2DP streaming out to RCA preouts (front/rear/sub) and amplified speaker outputs.',
		stack: ['Python', 'Raspberry Pi 5', 'GPIO', 'systemd', 'PipeWire', 'BlueZ / A2DP'],
		highlights: [
			{ label: 'Platform', value: 'Raspberry Pi 5' },
			{ label: 'Controls', value: 'GPIO daemon' },
			{ label: 'Audio', value: 'Bluetooth A2DP + RCA' }
		],
		repoHref: 'https://github.com/Hardrivetech/piStereo',
		status: 'active',
		accent: 'violet',
		span: 'md'
	},
	{
		slug: 't1d-tracker',
		index: '04',
		name: 't1dTracker',
		category: 'Android Health & Security Engineering',
		tagline: 'An encrypted, privacy-first Type 1 diabetes tracker built with Kotlin and Jetpack Compose.',
		description:
			'A native Android app for logging insulin doses and glucose readings, built on Kotlin, Jetpack Compose, and Room. Security is treated as a first-class feature: backups are encrypted client-side with PBKDF2-derived AES-GCM (400k iterations), an optional biometric lock gates app startup, and telemetry is opt-in only. The release pipeline enforces ktlint/detekt static analysis, CodeQL scanning, and R8-minified, signed builds end-to-end via CI.',
		stack: ['Kotlin', 'Jetpack Compose', 'Room', 'AES-GCM', 'Gradle', 'CodeQL'],
		highlights: [
			{ label: 'Encryption', value: 'PBKDF2 + AES-GCM' },
			{ label: 'Auth', value: 'Biometric lock' },
			{ label: 'CI', value: 'ktlint + detekt + CodeQL' }
		],
		repoHref: 'https://github.com/Hardrivetech/t1dTracker',
		status: 'active',
		accent: 'emerald',
		span: 'lg'
	}
];
