<template>
	<v-app-bar dense app color="white" elevation="0">
		<v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-avatar size="30" color="grey">
			<img src="https://reqres.in/img/faces/2-image.jpg" alt="alt" />
		</v-avatar>
	</v-app-bar>
</template>

<script>
export default {
	name: "Appbar",
	computed: {
		drawer: function() {
			return this.$store.state.SET_SIDEBAR
		}
	},
	methods: {
		setDrawer(bool) {
			this.$store.commit("SET_SIDEBAR", bool)
		}
	}
}
</script>
