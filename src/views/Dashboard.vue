<template>
	<DefaultLayout>
		<h1>Welcome Back</h1>
	</DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout"
export default {
	name: "Dashboard",
	components: {
		DefaultLayout
	},
	data: () => ({
		drawer: false
	})
}
</script>
