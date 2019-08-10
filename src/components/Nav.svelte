<script>
	import { Ripple, UIButton, IconButton } from 'svelte-toolbox';
	import { fade, fly } from 'svelte/transition';
	export let segment;

	let innerWidth;
	let showDrawer = false;

	function windowKeydown(e) {
		if (e.key === 'Escape' && showDrawer) showDrawer = false;
	}
</script>

<style>
	nav {
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
		position: relative;
		z-index: 1;
		height: 60px;
		overflow: hidden;
	}
	.right,
	.left {
		display: inline-block;
		vertical-align: top;
		user-select: none;
	}
	.right:before,
	.left:after,
	nav:before,
	nav:after {
		content: '';
		display: table;
		clear: both;
	}
	.left {
		line-height: 60px;
		cursor: pointer;
	}
	.right {
		padding: 14px;
		text-align: right;
		width: calc(100% - 400px);
		height: 32px;
		overflow: hidden;
	}
	.logo,
	big {
		vertical-align: top;
	}
	.logo {
		display: inline-block;
		width: 50px;
		height: 50px;
		border-radius: var(--border-r);
		background: url('../st-logo-50.png');
		margin: 5px;
	}
	big {
		height: 60px;
	}
	.move-up {
		vertical-align: top;
		position: relative;
		top: -6px;
		display: inline-block;
		width: 44px;
		height: 44px;
		overflow: hidden;
	}

	/* For the Drawer */
	.drawer-background {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 300px;
		background: var(--back);
		z-index: 3;
		box-shadow: -0.4rem 0 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
		text-align: center;
	}
</style>

<svelte:window bind:innerWidth on:keydown={windowKeydown} />

<nav>
	<a href="/">
		<!-- workaround until https://github.com/svelte-toolbox/svelte-toolbox/issues/100 is resolved -->
		<Ripple>
			<div class="left">
				<div class="logo" />
				<big>Svelte Toolbox</big>
			</div>
		</Ripple>
	</a>
	<div class="right">
		{#if innerWidth > 790}
			<UIButton href="components">Components</UIButton>
			<UIButton href="docs">Docs</UIButton>
			<div class="move-up">
				<IconButton
					icon={{ name: 'chat_bubble_outline', href: 'chat' }} />
			</div>
			<UIButton href="https://github.com/svelte-toolbox/svelte-toolbox">GitHub</UIButton>
		{:else}
			<div class="move-up">
				<IconButton icon="menu" on:click={() => (showDrawer = true)} />
			</div>
		{/if}
	</div>
	<!-- Workaround until we have a drawer component -->
	{#if showDrawer}
		<div
			class="drawer-background"
			transition:fade={{ duration: 200 }}
			on:click={() => (showDrawer = false)} />
		<div class="drawer" transition:fly={{ duration: 200, x: 300 }}>
			<div class="padding-top padding-bottom">
				<UIButton href="components">Components</UIButton>
			</div>
			<div class="padding-top padding-bottom">
				<UIButton href="docs">Docs</UIButton>
			</div>
			<div class="padding-top padding-bottom">
				<!-- <div class="move-up"> -->
				<IconButton
					icon={{ name: 'chat_bubble_outline', href: 'chat' }} />
				<!-- </div> -->
			</div>
			<div class="padding-top padding-bottom">
				<UIButton href="https://github.com/svelte-toolbox/svelte-toolbox">GitHub</UIButton>
			</div>
		</div>
	{/if}
</nav>
