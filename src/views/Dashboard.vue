<template>
	<section class="section">
		<div class="container">
			<Loader v-if="loading" />
			<div class="row" v-else>
				<div class="col s12 m6">
					<CreateCategory @createdCategory="fetchCategories" />
				</div>
				<div class="col s12 m6">
					<EditCategory
						:categories="categories"
						@updatedCategory="fetchCategories"
						v-if="categories.length"
					/>
					<p v-else>Категорий пока что нет.</p>
				</div>

				<div class="col s12">
					<CreateItem :categories="categories" v-if="categories.length" />
					<p v-else>Категорий пока что нет.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CreateCategory from "@/components/CreateCategory";
	import EditCategory from "@/components/EditCategory";
	import CreateItem from "@/components/CreateItem";
	import Loader from "@/components/Loader";
	export default {
		name: "dashboard",
		data() {
			return {
				categories: [],
				loading: true
			};
		},
		mounted() {
			this.fetchCategories();
		},
		methods: {
			async fetchCategories() {
				console.log("fetchCategories");
				this.loading = true;
				this.categories = await this.$store.dispatch("fetchCategories");
				this.loading = false;
			}
		},
		components: {
			CreateCategory,
			EditCategory,
			CreateItem,
			Loader
		}
	};
</script>

<style lang="scss" scoped>
</style>