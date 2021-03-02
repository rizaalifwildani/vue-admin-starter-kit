const MainMenu = [
	{ title: "Menu 1", icon: "mdi-view-dashboard", link: "/" },
	{ title: "Menu 2", icon: "mdi-account-multiple", link: "/menu-2" },
	{
		title: "Menu 3",
		icon: "mdi-folder",
		submenu: [
			{
				title: "Submenu 1",
				icon: "mdi-view-dashboard",
				link: "/submenu-1"
			},
			{
				title: "Submenu 2",
				icon: "mdi-view-dashboard",
				link: "/submenu-2"
			}
		]
	}
]

export { MainMenu }
