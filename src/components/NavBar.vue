<template>
	<div>
		<ul id="adminMenu" class="dropdown-content">
			<li>
				<router-link to="/dashboard">
					<i class="material-icons left">account_circle</i>Админка
				</router-link>
			</li>

			<li class="divider" tabindex="-1"></li>

			<li>
				<a href @click.prevent="logout">
					<i class="material-icons">assignment_return</i>Выйти
				</a>
			</li>
		</ul>
		<nav class="transparent app-nav">
			<div class="nav-wrapper container">
				<a href="#" class="brand-logo left">aprel</a>
				<a href="#" data-target="mobile-menu" class="sidenav-trigger right">
					<i class="material-icons">menu</i>
				</a>
				<ul class="right hide-on-med-and-down">
					<router-link
						v-for="link in links"
						:key="link.url"
						tag="li"
						:to="link.url"
						active-class="active"
						:exact="link.exact"
					>
						<a href>{{link.title}}</a>
					</router-link>
					<li>
						<a class="dropdown-trigger" href="#!" data-target="adminMenu" ref="dropdown">
							user name
							<i class="material-icons right">arrow_drop_down</i>
						</a>
					</li>
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-menu" ref="sidenav">
			<router-link
				v-for="link in links"
				:key="link.url"
				tag="li"
				:to="link.url"
				active-class="active"
				:exact="link.exact"
			>
				<a href>{{link.title}}</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				links: [
					{ title: "Home", url: "/", exact: true },
					{ title: "About", url: "/about" },
					{ title: "Login", url: "/login" }
				],
				dropdown: false,
				sidenav: false
			};
		},
		mounted() {
			this.sidenav = M.Sidenav.init(this.$refs.sidenav, {});

			this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
				constrainWidth: false
			});
		},
		methods: {
			async logout() {
				await this.$store.dispatch("logout");
				this.$router.push("/login?message=logout");
			}
		},
		beforeDestroy() {
			if (this.dropdown && this.dropdown.destaroy) {
				this.dropdown.destaroy();
			}
			if (this.sidenav && this.sidenav.destaroy) {
				this.sidenav.destaroy();
			}
		}
	};
</script>

<style lang="scss" scoped>
	nav.app-nav {
		box-shadow: none;
		color: #3b3b3b;
		margin: 10px 0;
		z-index: 1000;
		position: relative;
		ul {
			li.active {
				background-color: transparent;
				a {
					color: #f4cbdb;
				}
			}
		}
		a {
			color: #3b3b3b;
			font-weight: 500;
			letter-spacing: 0.12em;
			&:hover {
				background-color: transparent;
				color: #f4cbdb;
			}
		}
	}

	.dropdown-content {
		a {
			font-size: 13px;
			font-weight: normal;
		}
	}

	.brand-logo {
		display: flex;
		align-items: center;
		img {
			height: 45px;
			width: auto;
			margin-right: 0.5rem;
		}
	}
</style>