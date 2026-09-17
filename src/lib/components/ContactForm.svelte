<script lang="ts">
	import { env } from '$env/dynamic/public';
	type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

	let name = $state('');
	let email = $state('');
	let message = $state('');

	let touched = $state({ name: false, email: false, message: false });
	let status = $state<FormStatus>('idle');

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const MIN_MESSAGE_LENGTH = 20;

	const errors = $derived({
		name:
			name.trim().length === 0
				? 'Name is required.'
				: name.trim().length < 2
					? 'Name is too short.'
					: '',
		email:
			email.trim().length === 0
				? 'Email is required.'
				: !emailPattern.test(email.trim())
					? 'Enter a valid email address.'
					: '',
		message:
			message.trim().length === 0
				? 'Message is required.'
				: message.trim().length < MIN_MESSAGE_LENGTH
					? `Add a bit more detail (${message.trim().length}/${MIN_MESSAGE_LENGTH} min characters).`
					: ''
	});

	const isValid = $derived(!errors.name && !errors.email && !errors.message);

	function markTouched(field: keyof typeof touched) {
		touched[field] = true;
	}

	// Enhanced keyboard navigation support
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && status !== 'idle') {
			status = 'idle';
		}
	}

// Auto-save form data to localStorage for better UX
$effect(() => {
	if (status === 'idle') {
		localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));
	}
});

// Load saved form data on component mount
$effect(() => {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('contactFormData');
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				name = parsed.name || '';
				email = parsed.email || '';
				message = parsed.message || '';
			} catch (e) {
				// Ignore parsing errors
			}
		}
	}
});
	async function submitViaWeb3Forms() {
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({
				access_key: env.PUBLIC_WEB3FORMS_ACCESS_KEY,
				subject: `New message from ${name} via hardrivetech.net`,
				from_name: 'HardriveTech contact form',
				name,
				email,
				message
			})
		});

		const result = await response.json();
		if (!response.ok || !result.success) {
			throw new Error(result.message ?? 'Submission failed.');
		}
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		touched = { name: true, email: true, message: true };
		if (!isValid) return;

		status = 'submitting';

		try {
			if (env.PUBLIC_WEB3FORMS_ACCESS_KEY) {
				await submitViaWeb3Forms();
			} else {
				// No form backend configured yet — see README for setup.
				await new Promise((resolve) => setTimeout(resolve, 900));
			}
			status = 'success';
			name = '';
			email = '';
			message = '';
			touched = { name: false, email: false, message: false };
			// Clear saved data on successful submission
			localStorage.removeItem('contactFormData');
		} catch {
			status = 'error';
		}
	}
	</script>

<form
	onsubmit={handleSubmit}
	novalidate
	class="rounded-2xl border border-white/10 bg-obsidian-850/60 p-8"
>
	<div class="grid gap-6 sm:grid-cols-2">
		<div class="sm:col-span-1">
			<label for="name" class="mb-2 block text-sm font-medium text-slate-300">Name</label>
			<div class="relative">
				<input
					id="name"
					name="name"
					type="text"
					autocomplete="name"
					bind:value={name}
					onblur={() => markTouched('name')}
					placeholder="Ada Lovelace"
					class={`w-full rounded-md border bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all duration-200 ${
						touched.name && errors.name
							? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'
						: 'border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20'
					}`}
					aria-invalid={touched.name && !!errors.name}
					aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
				/>
				{#if name && !errors.name}
					<span class="absolute right-3 top-1/2 -translate-y-1/2 text-accent-emerald">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				{/if}
			</div>
			{#if touched.name && errors.name}
				<p id="name-error" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
					<span class="inline-block w-1 h-1 rounded-full bg-red-400"></span>
					{errors.name}
				</p>
			{/if}
		</div>

		<div class="sm:col-span-1">
			<label for="email" class="mb-2 block text-sm font-medium text-slate-300">Email</label>
			<div class="relative">
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					bind:value={email}
					onblur={() => markTouched('email')}
					placeholder="you@example.com"
					class={`w-full rounded-md border bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all duration-200 ${
						touched.email && errors.email
							? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'
						: 'border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20'
					}`}
					aria-invalid={touched.email && !!errors.email}
					aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
				/>
				{#if email && !errors.email && emailPattern.test(email)}
					<span class="absolute right-3 top-1/2 -translate-y-1/2 text-accent-emerald">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				{/if}
			</div>
			{#if touched.email && errors.email}
				<p id="email-error" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
					<span class="inline-block w-1 h-1 rounded-full bg-red-400"></span>
					{errors.email}
				</p>
			{/if}
		</div>

		<div class="sm:col-span-2">
			<div class="mb-2 flex items-center justify-between">
				<label for="message" class="block text-sm font-medium text-slate-300">Message</label>
				<span class="font-mono text-[11px] text-slate-500 transition-colors"
					>{message.trim().length}/{MIN_MESSAGE_LENGTH}+</span
				>
			</div>
			<div class="relative">
				<textarea
					id="message"
					name="message"
					rows="5"
					bind:value={message}
					onblur={() => markTouched('message')}
					placeholder="Tell me about the system you're building..."
					class={`w-full resize-none rounded-md border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all duration-200 ${
						touched.message && errors.message
							? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'
						: 'border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20'
					}`}
					aria-invalid={touched.message && !!errors.message}
					aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
				></textarea>
				{#if message && !errors.message && message.trim().length >= MIN_MESSAGE_LENGTH}
					<span class="absolute right-3 top-3 text-accent-emerald">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				{/if}
			</div>
			{#if touched.message && errors.message}
				<p id="message-error" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
					<span class="inline-block w-1 h-1 rounded-full bg-red-400"></span>
					{errors.message}
				</p>
			{/if}
		</div>
	</div>

	<div class="mt-8 flex flex-wrap items-center gap-4">
		<button
			type="submit"
			disabled={status === 'submitting'}
			class="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-accent-indigo to-accent-indigo-bright px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/20 transition-all duration-300 hover:shadow-accent-indigo/40 hover:brightness-110 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:transform-none"
		>
			{#if status === 'submitting'}
				<span
					class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
				></span>
				<span class="ml-2">Transmitting...</span>
			{:else}
				<span>Send Transmission</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M5 12h14M13 6l6 6-6 6"
						stroke="currentColor"
						stroke-width="1.75"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>

		{#if status === 'success'}
			<p class="flex items-center gap-1.5 text-sm text-accent-emerald" role="status">
				<span>✓</span> Message received — I'll be in touch shortly.
			</p>
		{/if}

		{#if status === 'error'}
			<div class="rounded-lg border border-red-400/30 bg-red-400/5 p-4" role="alert">
				<div class="flex items-start gap-3">
					<span class="mt-0.5 text-red-400">✕</span>
					<div class="flex-1">
						<p class="text-sm font-medium text-red-300">Transmission Failed</p>
						<p class="mt-1 text-xs text-slate-400">Please try again, or email me directly at <code class="text-slate-300">contact@hardrivetech.net</code></p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</form>
