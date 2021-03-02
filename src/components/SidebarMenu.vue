<template>
	<v-list dense nav>
		<div v-for="item in items" :key="item.title">
			<v-list-item v-if="item.submenu === undefined" link>
				<v-list-item-icon>
					<v-icon class="pl-2 mr-4">{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item>

			<!-- IF WITH SUBMENU -->
			<v-list-group v-else slot="activator" no-action>
				<v-list-item slot="activator">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-for="submenu in item.submenu"
					:key="'sub' + submenu.title"
					link
				>
					<v-list-item-icon>
						<v-icon>{{ submenu.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ submenu.title }}</v-list-item-title>
				</v-list-item>
			</v-list-group>
		</div>
	</v-list>
</template>

<script>
import Menu from "@/static/data/menu"

export default {
	name: "SidebarMenu",
	data: () => ({
		items: Menu
	}),
	mounted() {
		console.log(Menu)
	}
}
</script>
