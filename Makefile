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