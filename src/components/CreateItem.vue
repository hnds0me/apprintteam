<template>
	<form @submit.prevent="submitHundler" class="card">
		<div class="card-content">
			<h5 class="section-title">Добавить работу</h5>

			<div class="input-field">
				<input type="text" v-model.trim="title" />
				<label for="title">Название работы</label>
			</div>

			<div class="input-field">
				<textarea id="description" class="materialize-textarea" v-model.trim="description"></textarea>
				<label for="description">Описание</label>
			</div>

			<div class="file-field input-field">
				<div class="btn">
					<span>Скриншот</span>
					<input type="file" @change="changeFile" />
				</div>
				<div class="file-path-wrapper">
					<input class="file-path validate" type="text" />
				</div>
			</div>

			<div class="input-field">
				<select multiple v-model="categoriesSelected" ref="select">
					<option v-for="cat of categories" :key="cat.id" :value="cat.id">{{cat.title}}</option>
				</select>
				<label>Выберите категории</label>
			</div>
			<button class="btn waves-effect waves-light" type="submit" :disabled="disabled">
				create
				<i class="material-icons right">arrow_forward</i>
			</button>
		</div>
	</form>
</template>

<script>
	import firebase from "firebase/app";

	export default {
		name: "CreateItem",
		props: {
			categories: {
				type: Array,
				required: true,
				default: []
			}
		},
		data() {
			return {
				title: "",
				description: "",
				screenshot: null,
				select: null,
				categoriesSelected: [],
				disabled: false
			};
		},
		methods: {
			async submitHundler() {
				this.disabled = true;
				try {
					const formData = {
						title: this.title,
						description: this.description,
						screenshot: this.screenshot,
						categoriesSelected: this.categoriesSelected
					};

					const item = await this.$store.dispatch("createItem", formData);

					this.$message("Работа была создана");
					this.title = "";
					this.description = "";
					this.screenshot = null;
					this.categoriesSelected = [];

					this.disabled = false;
				} catch (e) {
					this.$error(e);
					this.disabled = false;
				}
			},
			changeFile(event) {
				const files = event.target.files || event.dataTransfer.files;
				if (!files.length) return;
				this.screenshot = files[0];
			}
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