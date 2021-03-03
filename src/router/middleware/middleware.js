const AuthMiddleware = (to, from, next) => {
	let auth = localStorage.getItem("isLoggedIn")
	if (auth === "false") {
		next({ name: "Login" })
		return false
	}
}

export { AuthMiddleware }
