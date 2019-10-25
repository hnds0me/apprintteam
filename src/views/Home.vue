<template>
	<div>
		<Header />
		<Portfolio />
	</div>
</template>

<script>
	import Header from "@/components/Header";
	import Portfolio from "@/components/Portfolio";
	export default {
		name: "home",
		components: {
			Portfolio,
			Header
		}
	};
</script>

<style lang="scss" scoped>
</style>
