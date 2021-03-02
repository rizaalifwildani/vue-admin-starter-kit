<template>
	<v-list dense nav>
		<v-list-item>
			<v-list-item-title class="grey--text">MAIN MENU</v-list-item-title>
		</v-list-item>
		<div v-for="item in items" :key="item.title">
			<v-list-item v-if="item.submenu === undefined" link :to="item.link">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item>

			<!-- IF WITH SUBMENU -->
			<v-list-group
				active
				v-else
				slot="activator"
				no-action
				color="white"
				append-icon="mdi-chevron-down"
				:prepend-icon="item.icon"
				:value="checkActive(item.submenu)"
			>
				<v-list-item slot="activator">
					<v-list-item-title class="submenu-title">{{
						item.title
					}}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-for="submenu in item.submenu"
					:key="'sub' + submenu.title"
					link
					:to="submenu.link"
					active-class="white--text"
					@click="checkActive(item.submenu)"
				>
					<v-list-item-subtitle>{{
						submenu.title
					}}</v-list-item-subtitle>
				</v-list-item>
			</v-list-group>
		</div>
	</v-list>
</template>

<script>
import { MainMenu } from "@/static/data/menu"

export default {
	name: "SidebarMenu",
	data: () => ({
		items: MainMenu
	}),
	methods: {
		checkActive(submenu) {
			if (submenu.some(val => val.link === this.$route.path)) {
				return true
			}
		}
	},
	mounted() {
		// console.log(Menu)
	}
}
</script>

<style lang="scss">
.submenu-title {
	margin-left: -8px !important;
}
</style>
