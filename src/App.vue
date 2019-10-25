<template>
	<div id="app">
		<component :is="layout"></component>
	</div>
</template>

<script>
	import EmptyLayout from "@/layouts/EmptyLayout";
	import MainLayout from "@/layouts/MainLayout";

	export default {
		computed: {
			layout() {
				return (this.$route.meta.layout || "empty") + "-layout";
			}
		},
		components: {
			EmptyLayout,
			MainLayout
		}
	};
</script>

<style lang="scss">
	@import "~materialize-css/dist/css/materialize.min.css";

	body,
	html {
		background-color: #fff;
	}

	.section {
		padding-bottom: 7rem;
		padding-top: 7rem;
		background-color: #f7f7f9;
	}

	.section-title {
		font-weight: 300;
		margin-bottom: 3.5rem;
		text-transform: capitalize;
	}

	.header-title {
		font-weight: 200;
	}
	.header-title-bold {
		font-weight: 700;
	}

	.text-bold {
		font-weight: 800;
	}

	.special-subtitle {
		display: block;
		font-size: 10px;
		line-height: 20px;
		letter-spacing: 0.3rem;
		font-weight: 700;
		opacity: 0.5;
	}
</style>
