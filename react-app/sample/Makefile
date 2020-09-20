all: build run

SHELL:=/bin/bash

build:
	docker build -t sample:dev .

run:
	docker run \
		-it \
		--rm \
		-v ${PWD}:/app \
		-v /app/node_modules \
		-p 3001:3000 \
		-e CHOKIDAR_USEPOLLING=true \
		sample:dev

dcb:
	docker-compose build

dc:
	docker-compose up --build

dcu:
	docker-compose up


