<script lang="ts">
	import { site } from '$lib/data/site';
	import { copyToClipboard } from '$lib/utils/clipboard';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout> | undefined;

	async function handleCopyEmail() {
		const ok = await copyToClipboard(site.email);
		if (!ok) return;
		copied = true;
		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2000);
	}

	const github = { href: site.social.github, handle: '@hardrivetech' };
</script>

<section id="contact" class="relative py-28">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading
			eyebrow="Transmission"
			title="Start a Conversation"
			description="Have a system that needs engineering-grade attention? Send the details, or reach out directly."
		/>

		<div class="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
			<ContactForm />

			<div class="space-y-6">
				<div class="rounded-2xl border border-white/10 bg-obsidian-850/60 p-6">
					<h3 class="font-display text-base font-semibold text-white">Reach Me Directly</h3>
					<p class="mt-2 text-sm text-slate-400">Skip the form — email or GitHub work just as well.</p>

					<button
						type="button"
						onclick={handleCopyEmail}
						class="mt-4 flex w-full items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-slate-200 transition hover:border-accent-cyan/40"
					>
						<span>{site.email}</span>
						<span class={copied ? 'text-accent-emerald' : 'text-slate-500'}>
							{copied ? 'Copied ✓' : 'Copy'}
						</span>
					</button>

					<a
						href={github.href}
						target="_blank"
						rel="noreferrer noopener"
						class="mt-3 flex items-center justify-between rounded-md border border-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
					>
						<span class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.97 10.97 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
								/>
							</svg>
							GitHub
						</span>
						<span class="font-mono text-xs text-slate-500">{github.handle}</span>
					</a>
				</div>

				<div class="rounded-2xl border border-accent-emerald/20 bg-accent-emerald/5 p-6">
					<div
						class="flex items-center gap-2 font-mono text-xs tracking-wide text-accent-emerald uppercase"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-accent-emerald"></span>
						Availability: Open
					</div>
					<p class="mt-3 text-sm text-slate-400">
						I'm currently open to select engagements in systems, engine, and embedded software
						work.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
