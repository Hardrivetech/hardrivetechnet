<script lang="ts">
	let progress = $state(0);

	function updateProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
	}

	$effect(() => {
		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);
		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	});
</script>

<div class="fixed inset-x-0 top-16 z-40 h-px bg-white/5">
	<div
		class="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
		style={`width: ${progress}%`}
	></div>
</div>
