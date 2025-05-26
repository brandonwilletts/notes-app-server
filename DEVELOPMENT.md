**********************
Set-up initial backend
**********************
- Initialize Node: npm init
- Initialize TypeScript: npm install typescript --save-dev
- touch app.ts server.ts
- touch .gitignore
		node_modules
		dist
		env

File Structure:
- src/
	- controllers/
	- env/
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


*************************************
Install git, create GitHub repository
*************************************
- git init
- git add / commit
- gh repo create


*************
Configure tsc
*************
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


****************
Configure eslint
****************
- npm install --save-dev eslint @eslint/js typescript-eslint @stylistic/eslint-plugin @types/express @types/eslint__js
- touch eslint.config.mjs
- Configure eslint.config.mjs
- Add package.json script:
		"lint": "eslint ."
- npm run lint


**************
Set-up Express
**************
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


********************************************************
Set-up Separate Environments in Backend with Local "DBs"
********************************************************
- npm install dotenv
- Modify package.json scripts:
    "test": "NODE_ENV=testing echo \"Error: no test specified\" && exit 1"
    "dev": "NODE_ENV=development ts-node-dev ./src/server.ts"
    "start": "NODE_ENV=production node build/server.js"
- Create .env files for test, dev, prod in env/
		.env.testing
		.env.development
		.env.prod
- Create local "DBs" in data/ for test, dev, prod
		db.testing.ts
		db.development.ts
		db.production.ts
- Create utils / config.ts, import dotenv, declare variables (use switch statement for DB selection) and export
- Create an /api/test API call and test so that it returns DB data





set-up loggers and stuff
then Postgres?

-----

e2e testing
Proxy?
docker
deployment
ci/cd

-----

*********
Reminders
*********
- Run npm run tsc to build production