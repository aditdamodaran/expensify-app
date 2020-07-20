live-server /public

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

yarn test -- --watchAll