<template>
	<form @submit.prevent="subminHundler" class="card">
		<div class="card-content">
			<h5 class="section-title">Редактировать категорию</h5>
			<div class="input-field col s12 m6">
				<select ref="select" v-model="current">
					<option v-for="cat of categories" :key="cat.id" :value="cat.id">{{cat.title}}</option>
				</select>
				<label>Выберите категорию</label>
			</div>
			<div class="input-field col s12 m6">
				<input id="new_title" type="text" v-model="newTitle" />
				<label for="new_title">Новое название категории</label>
			</div>

			<button class="btn waves-effect waves-light" type="submit">
				update
				<i class="material-icons right">arrow_forward</i>
			</button>
		</div>
	</form>
</template>

<script>
	export default {
		props: {
			categories: {
				type: Array,
				required: true,
				default: []
			}
		},
		data() {
			return {
				select: null,
				current: null,
				newTitle: ""
			};
		},
		watch: {
			current(value) {
				const cat = this.categories.find(item => item.id === value);
				this.newTitle = cat ? cat.title : "undefined";
			}
		},
		methods: {
			async subminHundler() {
				const formData = { title: this.newTitle, id: this.current };
				try {
					await this.$store.dispatch("updateCategories", formData);
					this.$message("категория успешно обновлена");
					this.$emit("updatedCategory");
				} catch (e) {}
			}
		},
		created() {
			const { title, id } = this.categories[0] || [];
			this.newTitle = title;
			this.current = id;
		},
		mounted() {
			this.select = M.FormSelect.init(this.$refs.select);
			M.updateTextFields();
		},
		destroyed() {
			if (this.select && this.select.destroy) {
				this.select.destroy();
			}
		}
	};
</script>


<style lang="scss" scoped>
</style>