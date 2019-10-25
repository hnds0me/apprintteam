<template>
	<div class="grey darken empty-layout">
		<router-view />
	</div>
</template>

<script>
	export default {
		computed: {
			error() {
				return this.$store.getters.error;
			}
		},
		watch: {
			error(fbError) {
				this.$error(fbError.code);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.empty-layout {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>