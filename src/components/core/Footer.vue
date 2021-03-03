<template>
	<v-footer>
		<v-row align="center" no-gutters>
			<v-spacer></v-spacer>
			<v-col cols="12" md="auto">
				<div class="text-caption font-weight-light pt-6 pt-md-0">
					&copy; {{ new Date().getFullYear() }}, made with
					<v-icon size="18">
						mdi-heart
					</v-icon>
					by
					<a target="blank" href="https://jayadata.id"
						>PT.Jayadata Indonesia</a
					>
					for a better web.
				</div>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>
