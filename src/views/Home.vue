<template>
	<div>
		<Header />
		<Loader v-if="loading" />
		<Portfolio :items="items" v-else />
	</div>
</template>

<script>
	import Header from "@/components/Header";
	import Portfolio from "@/components/Portfolio";
	import Loader from "@/components/Loader";
	export default {
		name: "home",
		data() {
			return {
				items: [],
				loading: false
			};
		},
		mounted() {
			this.fetchItems();
		},
		methods: {
			async fetchItems() {
				this.loading = true;
				this.items = await this.$store.dispatch("fetchItems");
				this.loading = false;
				console.log(this.items);
			}
		},
		components: {
			Portfolio,
			Header,
			Loader
		}
	};
</script>

<style lang="scss" scoped>
</style>
