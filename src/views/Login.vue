<template>
	<AuthLayout>
		<v-row align="center" justify="center" class="login">
			<v-col cols="4">
				<LoginForm />
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
