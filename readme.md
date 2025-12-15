# Comando uteis de NODE-JS

## Iniciar um projeto Node
    ´´´
        npm init -y
    ´´´
## Iniciar Typescript
    -Instalar
    ´´´
        npm i typescript tsx tsup -D
    ´´´
    -Inicializar
    ´´´
        npx tsc --init
    ´´´ 
    -Tscondfig
        {
            "compilerOptions": {
                "target": "ES6",
                "module": "commonjs",
                "outDir": "/dist",
                "strict": true,
                "esModuleInterop": true
            }
        }
    - Config package.json inicial
        {
            "name": "project-podcast",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "start:dev": "tsx src/server.ts",
                "start:watch": "tsx watch src/server.ts",
                "dist": "tsup src",
                "start:dist": "npm run dist && node/server.js"
                 },
            "keywords": [],
            "author": "Matheus F Jaconis",
            "license": "ISC",
            "devDependencies": {
                "tsup": "^8.5.1",
                "tsx": "^4.21.0",
                "typescript": "^5.9.3"
                }
        }
