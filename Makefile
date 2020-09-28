all: a clean nav build serve

SHELL:=/bin/bash
DIST:=docs

a:
	@echo "Using $$0"

clean:
	rm -r ${DIST} || true

nav:
	./rebuild-navigation.sh

build:
	DOCSEARCH_ENABLED=true DOCSEARCH_ENGINE=lunr NODE_PATH="$(npm -g root)" \
	antora --to-dir ${DIST} \
	--generator=./antora-site-generator-example-html-pages \
	--generator antora-site-generator-lunr \
	--stacktrace antora-playbook.yml
	touch ${DIST}/.nojekyll

serve:
	http-server ${DIST}

release:
	act --secret-file .secrets release --dryrun


IMAGE_NAME:=namespace/repo
PORT:=5000
CMD_ACCESS = aws configure get --profile cndx-dev aws_access_key_id
CMD_SECRET = aws configure get --profile cndx-dev aws_secret_access_key
AWS_ACCESS := $(shell eval $(CMD_ACCESS))
AWS_SECRET := $(shell eval $(CMD_SECRET))

p:
	echo -e $(AWS_ACCESS)
	echo -e $(AWS_SECRET)

build:
	docker build -t ${IMAGE_NAME} \
	--build-arg AWS_ACCESS=${AWS_ACCESS} \
	--build-arg AWS_SECRET=${AWS_SECRET} .

dcb:
	docker-compose build \
		--build-arg AWS_ACCESS=${AWS_ACCESS} \
		--build-arg AWS_SECRET=${AWS_SECRET}

run:
	docker run -it --rm \
		--name b2capp \
		-v ${PWD}:/b2c \
		-p $(PORT):$(PORT) \
		-e CHOKIDAR_USEPOLLING=true \
		${IMAGE_NAME}

runb:
	docker run -it --rm \
		-v ${PWD}:/b2c \
		${IMAGE_NAME} bash
		# -v /b2c/node_modules \

dc:
	docker-compose up --build

dcu:
	docker-compose up


