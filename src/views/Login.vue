<template>
	<AuthLayout>
		<v-row align="center" justify="center">
			<v-col md="4" class="mt-12">
				<v-container class="">
					<LoginForm />
				</v-container>
			</v-col>
		</v-row>
	</AuthLayout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout"
import LoginForm from "@/components/forms/LoginForm"
export default {
	name: "Login",
	components: {
		AuthLayout,
		LoginForm
	}
}
</script>
