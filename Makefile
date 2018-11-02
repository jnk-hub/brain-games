install:
	npm install

start:
	npm run babel-node -- src/bin/brain-$(GAME).js

lint:
	npm run eslint . -- --fix

publish:
	npm publish