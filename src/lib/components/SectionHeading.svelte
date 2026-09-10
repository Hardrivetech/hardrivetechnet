<script lang="ts">
	let {
		eyebrow,
		title,
		description,
		align = 'center'
	}: {
		eyebrow: string;
		title: string;
		description?: string;
		align?: 'center' | 'left';
	} = $props();
</script>

<div class={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
	<div
		class={`mb-4 flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-accent-cyan uppercase ${align === 'center' ? 'justify-center' : 'justify-start'}`}
	>
		<span class="h-px w-6 bg-accent-cyan/50"></span>
		{eyebrow}
	</div>
	<h2 class="text-3xl font-semibold text-balance text-white sm:text-4xl">{title}</h2>
	{#if description}
		<p class="mt-4 text-balance text-slate-400">{description}</p>
	{/if}
</div>
