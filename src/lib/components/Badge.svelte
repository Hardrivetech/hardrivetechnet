<script lang="ts">
		let { label, class: className = '' }: { label: string; class?: string } = $props();
	</script>

	<span
		class="inline-flex items-center rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[11px] tracking-tight text-slate-300 {className}"
	>
		{label}
	</span>
