import type { AccentColor } from '$lib/data/projects';

export interface NowItem {
	project: string;
	detail: string;
	href: string;
	accent: AccentColor;
}

// What's actively in progress on each project right now — pulled straight
// from each repo's own roadmap / TODO notes, not marketing copy.
export const nowItems: NowItem[] = [
	{
		project: 'CarnageEngine',
		detail: 'Wiring up the CiPhyxs physics integration and the first audio-reactive engine hooks.',
		href: 'https://github.com/Driveby-Studios/CarnageEngine-Public',
		accent: 'indigo'
	},
	{
		project: 'piStereo',
		detail: 'Drafting the wiring diagram and a proper double-DIN enclosure template for the mount.',
		href: 'https://github.com/Hardrivetech/piStereo',
		accent: 'violet'
	},
	{
		project: 't1dTracker',
		detail: "Evaluating a SQLCipher migration path for the app's encrypted local database.",
		href: 'https://github.com/Hardrivetech/t1dTracker',
		accent: 'emerald'
	}
];
