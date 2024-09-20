export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'projetos_strapi-db'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'projetos'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', '6825430a3ab045029256'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
