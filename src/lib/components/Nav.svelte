<script lang="ts">
	import { onMount } from 'svelte';
	import { navLinks } from '$lib/data/nav';

	let open = $state(false);
	let activeHref = $state('#top');

	function close() {
		open = false;
	}

	onMount(() => {
		const ids = ['top', ...navLinks.map((link) => link.href.slice(1))];
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeHref = `#${entry.target.id}`;
					}
				}
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<header class="glass-panel fixed inset-x-0 top-0 z-50 border-b border-white/5">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<a href="#top" class="flex items-center gap-2.5" onclick={close}>
			<span
				class="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent-indigo to-accent-cyan text-sm font-bold text-obsidian-950"
			>
				H
			</span>
			<span class="font-display text-sm font-semibold tracking-wide text-white">
				HARDRIVE<span class="text-accent-cyan">TECH</span>
			</span>
			<span class="hidden font-mono text-[10px] text-slate-500 sm:inline">v2.4.1</span>
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class={`text-sm transition ${activeHref === link.href ? 'text-white' : 'text-slate-300 hover:text-white'}`}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="#contact"
				class="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-indigo/50 hover:bg-white/10"
			>
				Get in Touch
			</a>
		</nav>

		<button
			type="button"
			class="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 md:hidden"
			aria-label="Toggle navigation menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none">
					<path
						d="M6 6l12 12M18 6L6 18"
						stroke="currentColor"
						stroke-width="1.75"
						stroke-linecap="round"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none">
					<path
						d="M4 7h16M4 12h16M4 17h16"
						stroke="currentColor"
						stroke-width="1.75"
						stroke-linecap="round"
					/>
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="glass-panel border-t border-white/5 px-6 py-4 md:hidden">
			<div class="flex flex-col gap-4">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						onclick={close}
						class="text-sm text-slate-300 transition hover:text-white"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="#contact"
					onclick={close}
					class="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-medium text-white"
				>
					Get in Touch
				</a>
			</div>
		</nav>
	{/if}
</header>
