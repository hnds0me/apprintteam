<template>
	<section class="section">
		<div class="container">
			<h3 class="section-title center-align">
				Наши
				<span class="text-bold">работы</span>
			</h3>

			<div class="row card-row">
				<div class="card" v-for="item of items" :key="item.id">
					<div class="card-image">
						<img :src="item.screenshot" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "portfolio",
		props: {
			items: {
				type: Array,
				required: true,
				default: []
			}
		}
	};
</script>

<style lang="scss" scoped>
	.row {
		.col {
			padding: 0;
		}
	}
	.card-row {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		flex-grow: 0.5;
		flex-basis: 33%;
		box-shadow: none;
		margin: 0;
	}
</style>