# Set-up initial backend
- Initialize Node: npm init
- Initialize TypeScript: npm install typescript --save-dev
- touch app.ts server.ts
- touch .gitignore
		node_modules
		dist
		.env.*

## File Structure:
- src/
	- controllers/
	- middleware/
	- models/
	- requests/
	- routes/
	- services/
	- tests/
	- types/
	- utils/
	- app.ts
	- server.ts
- .env files
- docker-compose.yml files


# Install git, create GitHub repository
- git init
- git add / commit
- gh repo create


# Configure tsc
- Add package.json script: 
		"tsc": "tsc"
- Initialize tsconfig.json: npm run tsc -- --init
- Configure tsconfig.json:
		"target": "ES6",
		"outDir": "./build/",
		"module": "commonjs",
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true,
		"esModuleInterop": true


# Configure eslint
- npm install --save-dev eslint @eslint/js typescript-eslint @stylistic/eslint-plugin @types/express @types/eslint__js
- touch eslint.config.mjs
- Configure eslint.config.mjs
- Add package.json script:
		"lint": "eslint ."
- npm run lint


# Set-up Express
- npm install express
- npm install --save-dev ts-node-dev
- Set-up simple express server in app.ts (const app = express()...) and server.ts (app.listen...)
- Add package.json scripts:
	- "dev": "ts-node-dev ./src/server.ts",
	- "start": "node build/server.js"
- Install CORS:
	- npm install cors
	- npm install --save-dev @types/cors
	- index.ts:
			import cors from 'cors';
			app.use(cors())
- Check that dev server works:
	- npm run dev
	- http://localhost:3000/ping should return pong
- Check that production server works:
	- Create an initial TS production build:
		- npm run tsc
	- npm start
	- http://localhost:3000/ping should return pong


# Set-up Custom Logger and Middleware
- utils / logger.ts
	- Change app.listen to use logger instead of console.log
- middleware / requestLogger.ts
- middleware / unknownEndpoint.ts
- middleware / errorHandler.ts
- Use middleware via app.use(...)
	- Note: unknownEndpoint and errorHandler must be below api calls


# Set-up Separate Environment Variables
- npm install dotenv
- npm install cross-env
- Modify package.json scripts:
    "test": "cross-env NODE_ENV=test echo \"Error: no test specified\" && exit 1"
    "dev": "cross-env NODE_ENV=development ts-node-dev ./src/server.ts"
    "start": "cross-env NODE_ENV=production node build/server.js"
- Create .env files for test, dev, prod in root
		.env.testing
		.env.development
		.env.prod


# Set-up PostgreSQL w/ Docker
- npm install pg sequelize
- Create .dockerignore in root:
		.dockerignore
		.gitignore
		node_modules
		Dockerfile
- Use utils / config.ts to load the right .env based on NODE_ENV, throw errors if critical environment variable missing, and then export them to be used throughout the app


## Process (for each DB)
- In each .env file, define:
		POSTGRES_USER=postgres
		POSTGRES_PASSWORD=postgres
		POSTGRES_DB=db_test
- Create docker-compose.development/production/test.yml in root (PostgreSQL doesn't require a Dockerfile)
		services:
			db:
				image: postgres
				container_name: postgres_development
				restart: always
				env_file: 
					- .env.development
				ports:
					// Use different ports for development, production, and test
					- "5432:5432"
				volumes:
					- pgdata_development:/var/lib/postgresql/data 
		volumes:
  pgdata_development:
- Edit package.json to docker-compose up and docker-compose down (remember to use cross-env NODE_ENV=...)
	- "dev": "cross-env NODE_ENV=development docker-compose -f docker-compose.development.yml up -d && cross-env NODE_ENV=development ts-node-dev ./src/server.ts"
	- Also add a "clean" script that closes all Docker containers and wipes volumes
	- Note: For now, test will just spin-up a Docker postgres container -> jest / supertest will run it's own "server"
To confirm it's working
- In app.ts create a new sequelize instance to connect to the DB (/ping api)
- To run:
		- Open Docker desktop
		- npm run dev / npm start (remember to run tsc first)
		- npm run dev:down / npm run start:down to stop running the container


## Set-up pgadmin
- Download the pgAdmin desktop app
	- Add Server (use localhost)
	- Use the name of the DB as defined in .env (ie: pg_development) as Maintenance Database


## Containerize w/ Docker
- Create Dockerfile for each environment
- Edit docker-compose.yml to run containers based on ENV_NODE

-----

docker
e2e testing
deployment


# Reminders
- Run npm run tsc to build production
- Docker needs to be running