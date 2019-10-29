<template>
	<form class="card" @submit.prevent="submitHundler">
		<div class="card-content">
			<h5 class="section-title">Добавить категорию</h5>

			<div class="input-field">
				<input type="text" v-model.trim="title" />
				<label for="title">Название категории</label>
			</div>

			<button class="btn waves-effect waves-light" type="submit">
				create
				<i class="material-icons right">arrow_forward</i>
			</button>
		</div>
	</form>
</template>

<script>
	export default {
		name: "CreateCategory",
		data() {
			return {
				title: ""
			};
		},
		methods: {
			async submitHundler() {
				try {
					const category = await this.$store.dispatch("createCategory", {
						title: this.title
					});
					this.$emit("createdCategory");
					this.$message("Категория была создана");
					this.title = "";
					this.$v.reset();
				} catch (e) {}
			}
		}
	};
</script>