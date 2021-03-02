<template>
	<LayoutDefault>
		<h1>Welcome Back</h1>
	</LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault"
export default {
	name: "Dashboard",
	components: {
		LayoutDefault
	},
	data: () => ({
		drawer: false
	})
}
</script>
