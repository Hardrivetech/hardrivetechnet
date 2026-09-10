<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsShowcase from '$lib/components/ProjectsShowcase.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Now from '$lib/components/Now.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { site } from '$lib/data/site';

	const title = `${site.handle} — Systems Engineer & Software Architect`;
	const description = site.description;
	const ogImage = `${site.url}/og-image.png`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		jobTitle: site.role,
		url: site.url,
		email: site.email,
		description: site.description,
		sameAs: [site.social.github]
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.handle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<Hero />
<ProjectsShowcase />
<TechStack />
<Now />
<About />
<Contact />
