<template>
	<validation-observer ref="observer" v-slot="{ invalid }">
		<form @submit.prevent="login(true)">
			<v-card>
				<v-card-title primary-title>
					LOGIN
				</v-card-title>
				<v-container>
					<template>
						<v-row no-gutters>
							<v-col cols="12" class="px-2">
								<validation-provider
									v-slot="{ errors }"
									name="email"
									rules="required|email"
								>
									<v-text-field
										v-model="email"
										:error-messages="errors"
										label="Email"
										required
										type="email"
										outlined
									></v-text-field>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="px-2">
								<validation-provider
									v-slot="{ errors }"
									name="password"
									rules="required"
								>
									<v-text-field
										v-model="password"
										:error-messages="errors"
										label="Password"
										required
										type="password"
										outlined
									></v-text-field>
								</validation-provider>
								<v-divider></v-divider>
							</v-col>
							<v-col cols="12" class="px-2">
								<validation-provider name="rememberme">
									<v-checkbox
										v-model="rememberme"
										value="1"
										label="Remember Me"
										type="checkbox"
										color="primary"
									></v-checkbox>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="my-3">
								<v-btn
									type="submit"
									color="primary"
									:disabled="invalid"
									block
									:loading="loading"
								>
									submit
								</v-btn>
							</v-col>
						</v-row>
					</template>
				</v-container>
			</v-card>
		</form>
	</validation-observer>
</template>

<script>
import { required, email } from "vee-validate/dist/rules"
import {
	extend,
	ValidationObserver,
	ValidationProvider,
	setInteractionMode
} from "vee-validate"

setInteractionMode("eager")

extend("required", {
	...required,
	message: "{_field_} can not be empty"
})

extend("email", {
	...email,
	message: "Email must be valid"
})

export default {
	name: "LoginForm",
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data: () => ({
		email: "",
		password: "",
		rememberme: false,
		loading: false
	}),
	methods: {
		login(bool) {
			this.loading = true
			this.$store.commit("LOGGED_IN", bool)
			this.$router.push("/")
			this.loading = false
		}
	}
}
</script>
