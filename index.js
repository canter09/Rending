const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'83676655-e9f9-464c-9b6d-084fb72efd49'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
