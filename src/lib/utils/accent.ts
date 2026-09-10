import type { AccentColor } from '$lib/data/projects';

export interface AccentClasses {
	text: string;
	border: string;
	bgSoft: string;
	bgSolid: string;
	glow: string;
	dot: string;
}

const accentMap: Record<AccentColor, AccentClasses> = {
	indigo: {
		text: 'text-accent-indigo-bright',
		border: 'border-accent-indigo/40',
		bgSoft: 'bg-accent-indigo/10',
		bgSolid: 'bg-accent-indigo',
		glow: 'from-accent-indigo/25 via-accent-indigo/5 to-transparent',
		dot: 'bg-accent-indigo'
	},
	cyan: {
		text: 'text-accent-cyan',
		border: 'border-accent-cyan/40',
		bgSoft: 'bg-accent-cyan/10',
		bgSolid: 'bg-accent-cyan',
		glow: 'from-accent-cyan/25 via-accent-cyan/5 to-transparent',
		dot: 'bg-accent-cyan'
	},
	violet: {
		text: 'text-accent-violet',
		border: 'border-accent-violet/40',
		bgSoft: 'bg-accent-violet/10',
		bgSolid: 'bg-accent-violet',
		glow: 'from-accent-violet/25 via-accent-violet/5 to-transparent',
		dot: 'bg-accent-violet'
	},
	emerald: {
		text: 'text-accent-emerald',
		border: 'border-accent-emerald/40',
		bgSoft: 'bg-accent-emerald/10',
		bgSolid: 'bg-accent-emerald',
		glow: 'from-accent-emerald/25 via-accent-emerald/5 to-transparent',
		dot: 'bg-accent-emerald'
	}
};

export function getAccentClasses(accent: AccentColor): AccentClasses {
	return accentMap[accent];
}
