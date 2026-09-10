<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — HardriveTech</title>
</svelte:head>

<section class="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
	<div class="glass-panel rounded-xl border border-white/10 px-6 py-4 font-mono text-sm">
		<p class="text-accent-cyan">$ curl {page.url.pathname}</p>
		<p class="mt-2 text-red-400">
			error: {page.status} {page.error?.message ?? 'Not Found'}
		</p>
	</div>

	<h1 class="mt-8 font-display text-4xl font-bold text-white sm:text-5xl">
		This route doesn't exist.
	</h1>
	<p class="mt-4 max-w-md text-slate-400">
		Whatever you were looking for isn't here — but the rest of the site is still standing by.
	</p>

	<a
		href="/"
		class="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-accent-indigo to-accent-indigo-bright px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/20 transition hover:brightness-110"
	>
		Back to safety
	</a>
</section>
