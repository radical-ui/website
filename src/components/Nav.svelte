<script>
	import { Ripple, UIButton, IconButton } from 'svelte-toolbox';
	export let segment;
</script>

<style>
	.right,
	.left {
		display: inline-block;
		vertical-align: top;
		user-select: none;
	}
	.left {
		line-height: 60px;
		cursor: pointer;
	}
	.right {
		padding: 14px;
		text-align: right;
		width: calc(100% - 400px);
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
		background: url('/st-logo-50.png');
		margin: 5px;
	}
	big {
		height: 60px;
	}
</style>

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
		<UIButton href="components">Components</UIButton>
		<UIButton href="docs">Docs</UIButton>
		<div>
			<IconButton icon="chat_bubble_outline" href="chat" />
		</div>
		<UIButton href="github">GitHub</UIButton>
	</div>
</nav>
