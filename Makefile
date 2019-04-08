watch:
	babel -w src -d dist

build:
	babel src -d dist

dev:
	sudo ./node_modules/.bin/babel-node src/$(FILE_NAME)