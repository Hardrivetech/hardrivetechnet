<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackgroundFx from '$lib/components/BackgroundFx.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';

	let { children } = $props();
</script>

<BackgroundFx />
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-indigo focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
>
	Skip to content
</a>
<Nav />
<ScrollProgress />

<main id="main-content" class="relative" tabindex="-1">
	{@render children?.()}
</main>

<Footer />
