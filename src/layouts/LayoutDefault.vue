<template>
	<v-app>
		<!-- APPBAR -->
		<v-app-bar dense app fixed color="white" elevation="0">
			<v-app-bar-nav-icon
				@click="
					drawer = true
					permanent = !permanent
				"
			></v-app-bar-nav-icon>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-avatar size="30" color="grey">
				<img src="https://reqres.in/img/faces/2-image.jpg" alt="alt" />
			</v-avatar>
		</v-app-bar>

		<!-- CONTENT -->
		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>

		<!-- SIDEBAR -->
		<v-navigation-drawer
			width="220"
			v-model="drawer"
			app
			fixed
			:permanent="permanent"
			class="primary sidebar"
			dark
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title font-weight-bold">
						VueBoard
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<SidebarMenu />
		</v-navigation-drawer>
	</v-app>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu"
export default {
	name: "LayoutDefault",
	components: {
		SidebarMenu
	},
	data: () => ({
		drawer: true,
		permanent: true
	})
}
</script>
