<template>
	<form class="card" @submit.prevent="submitHundler">
		<div class="card-content">
			<h5 class="section-title">Добавить раздел</h5>

			<div class="input-field">
				<i class="material-icons prefix">mode_edit</i>
				<input id="title" type="text" v-model.trim="title" />
				<label for="title">Название раздела</label>
			</div>
		</div>

		<div class="card-action">
			<button class="btn waves-effect waves-light" type="submit">
				save
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
					await this.$store.dispatch("createCategory", {
						title: this.title
					});
				} catch (e) {}
			}
		}
	};
</script>