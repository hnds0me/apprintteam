<template>
	<form class="card auth-card" @submit.prevent="submitHundler">
		<div class="card-content">
			<div class="input-field">
				<input
					type="text"
					id="email"
					v-model.trim="email"
					:class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
				/>
				<label for="email">Email</label>
				<small
					class="helper-text invalid"
					v-if="$v.email.$dirty && !$v.email.required"
				>Email не должен быть пустым</small>
				<small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Введите email</small>
			</div>

			<div class="input-field">
				<input
					type="password"
					id="password"
					v-model.trim="password"
					:class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
				/>
				<label for="password">Password</label>
				<small
					class="helper-text invalid"
					v-if="$v.password.$dirty && !$v.password.required"
				>Пароль не должен быть пустым</small>
				<small
					class="helper-text invalid"
					v-else-if="$v.password.$dirty && !$v.password.minLength"
				>Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов</small>
			</div>
		</div>

		<div class="card-action">
			<div>
				<button class="btn waves-effect waves-light" type="submit">
					Enter
					<i class="material-icons right">arrow_forward</i>
				</button>
			</div>
		</div>
	</form>
</template>

<script>
	import { email, required, minLength } from "vuelidate/lib/validators";

	export default {
		name: "login",
		data() {
			return {
				email: "",
				password: ""
			};
		},
		validations: {
			email: { email, required },
			password: { required, minLength: minLength(6) }
		},
		methods: {
			async submitHundler() {
				if (this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				const formData = {
					email: this.email,
					password: this.password
				};

				try {
					await this.$store.dispatch("login", formData);
					this.$router.push("/");
				} catch (e) {}
			}
		},
		components: {}
	};
</script>

<style lang="scss" scoped>
	.auth-card {
		width: 100%;
		max-width: 500px;
		min-width: 320px;
	}
</style>