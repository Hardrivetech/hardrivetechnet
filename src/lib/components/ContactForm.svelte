<script lang="ts">
    const PUBLIC_WEB3FORMS_ACCESS_KEY = "0d0bfbd7-72ec-4679-ae4c-735c589e7244";
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

	async function submitViaWeb3Forms() {
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({
				access_key: PUBLIC_WEB3FORMS_ACCESS_KEY,
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
			if (PUBLIC_WEB3FORMS_ACCESS_KEY) {
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
			<input
				id="name"
				name="name"
				type="text"
				autocomplete="name"
				bind:value={name}
				onblur={() => markTouched('name')}
				placeholder="Ada Lovelace"
				class={`w-full rounded-md border bg-white/3 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none ${
					touched.name && errors.name
						? 'border-red-400/50 focus:border-red-400'
						: 'border-white/10 focus:border-accent-cyan/50'
				}`}
				aria-invalid={touched.name && !!errors.name}
				aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
			/>
			{#if touched.name && errors.name}
				<p id="name-error" class="mt-1.5 text-xs text-red-400">{errors.name}</p>
			{/if}
		</div>

		<div class="sm:col-span-1">
			<label for="email" class="mb-2 block text-sm font-medium text-slate-300">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				autocomplete="email"
				bind:value={email}
				onblur={() => markTouched('email')}
				placeholder="you@example.com"
				class={`w-full rounded-md border bg-white/3 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none ${
					touched.email && errors.email
						? 'border-red-400/50 focus:border-red-400'
						: 'border-white/10 focus:border-accent-cyan/50'
				}`}
				aria-invalid={touched.email && !!errors.email}
				aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
			/>
			{#if touched.email && errors.email}
				<p id="email-error" class="mt-1.5 text-xs text-red-400">{errors.email}</p>
			{/if}
		</div>

		<div class="sm:col-span-2">
			<div class="mb-2 flex items-center justify-between">
				<label for="message" class="block text-sm font-medium text-slate-300">Message</label>
				<span class="font-mono text-[11px] text-slate-500"
					>{message.trim().length}/{MIN_MESSAGE_LENGTH}+</span
				>
			</div>
			<textarea
				id="message"
				name="message"
				rows="5"
				bind:value={message}
				onblur={() => markTouched('message')}
				placeholder="Tell me about the system you're building..."
				class={`w-full resize-none rounded-md border bg-white/3 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none ${
					touched.message && errors.message
						? 'border-red-400/50 focus:border-red-400'
						: 'border-white/10 focus:border-accent-cyan/50'
				}`}
				aria-invalid={touched.message && !!errors.message}
				aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
			></textarea>
			{#if touched.message && errors.message}
				<p id="message-error" class="mt-1.5 text-xs text-red-400">{errors.message}</p>
			{/if}
		</div>
	</div>

	<div class="mt-8 flex flex-wrap items-center gap-4">
		<button
			type="submit"
			disabled={status === 'submitting'}
			class="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-accent-indigo to-accent-indigo-bright px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
		>
			{#if status === 'submitting'}
				<span
					class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
				></span>
				Transmitting…
			{:else}
				Send Transmission
			{/if}
		</button>

		{#if status === 'success'}
			<p class="flex items-center gap-1.5 text-sm text-accent-emerald" role="status">
				<span>✓</span> Message received — I'll be in touch shortly.
			</p>
		{/if}

		{#if status === 'error'}
			<p class="flex items-center gap-1.5 text-sm text-red-400" role="alert">
				<span>✕</span> Something went wrong — email me directly instead.
			</p>
		{/if}
	</div>
</form>
