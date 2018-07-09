install:
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

lint:
	npm run eslint .

publish:
	npm publish