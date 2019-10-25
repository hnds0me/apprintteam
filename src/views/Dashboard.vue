<template>
	<section class="section">
		<div class="container">
			<div class="row">
				<div class="col s12 m6 l4">
					<CreateCategory />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CreateCategory from "@/components/CreateCategory";
	export default {
		name: "dashboard",
		components: {
			CreateCategory
		}
	};
</script>

<style lang="scss" scoped>
</style>