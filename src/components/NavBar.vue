<template>
	<nav>
		<div class="nav-wrapper container">
			<router-link to="/" class="brand-logo">Apprint</router-link>

			<a href="#" data-target="mobile-menu" class="sidenav-trigger">
				<i class="material-icons">menu</i>
			</a>

			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<router-link tag="li" to="/" exact active-class="active">
					<a href>Home</a>
				</router-link>

				<router-link tag="li" to="/about" active-class="active">
					<a href>About</a>
				</router-link>
			</ul>

			<ul class="sidenav" id="mobile-menu">
				<router-link tag="li" to="/" exact active-class="active">
					<a href>Home</a>
				</router-link>

				<router-link tag="li" to="/about" active-class="active">
					<a href>About</a>
				</router-link>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		mounted() {
			var elems = document.querySelectorAll(".sidenav");
			var instances = M.Sidenav.init(elems, {});
		}
	};
</script>

<style lang="scss" scoped>
</style>