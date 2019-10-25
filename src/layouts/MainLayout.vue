<template>
	<div>
		<NavBar />

		<main class="app-content">
			<div class="app-page">
				<router-view />
			</div>
		</main>
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar";

	export default {
		name: "main-layout",
		components: {
			NavBar
		}
	};
</script>