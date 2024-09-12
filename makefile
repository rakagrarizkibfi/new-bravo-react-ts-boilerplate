IMAGE_NAME ?= com.bfi.bravo/bravo-approver-platform
IMAGE_TAG ?= latest
.DEFAULT_GOAL := default

default: build

clean:
	rm -rf ./node_modules

install:
	yarn install

unit-test-and-report: install
	yarn test

build: install
	yarn build

build-dev: install
	yarn build:dev

build-sit: install
	yarn build:sit

build-uat: install
	yarn build:uat

build-prod: install
	yarn build:production

check-style: install
	yarn lint
	yarn prettier

fix-style: install
	yarn format

run-local: install
	yarn local

reset: clean build run-local
