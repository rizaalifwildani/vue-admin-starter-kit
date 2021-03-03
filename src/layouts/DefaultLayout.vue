<template>
	<v-app>
		<!-- APPBAR -->
		<Appbar />

		<!-- CONTENT -->
		<v-main>
			<slot />
		</v-main>

		<!-- FOOTER -->
		<Footer />

		<!-- SIDEBAR -->
		<Sidebar />
	</v-app>
</template>

<script>
import Appbar from "@/components/core/Appbar"
import Sidebar from "@/components/core/Sidebar"
import Footer from "@/components/core/Footer"
export default {
	name: "DefaultLayout",
	components: {
		Appbar,
		Sidebar,
		Footer
	}
}
</script>
