<template>
	<div id="app">
		<div id="nav" class="navbar-fixed">
			<NavBar />
		</div>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar";
	export default {
		components: {
			NavBar
		}
	};
</script>

<style lang="scss">
	@import "~materialize-css/dist/css/materialize.min.css";
</style>
