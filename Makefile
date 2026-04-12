VERSION := $(shell cat VERSION)
GITHUB_USERNAME := robinsondan87
IMAGE := ghcr.io/$(GITHUB_USERNAME)/robbohome-hello-world

dev:
	docker compose up --build

build:
	docker build --build-arg APP_VERSION=$(VERSION) -t $(IMAGE):$(VERSION) -t $(IMAGE):latest .

push:
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

logs:
	ssh robbohome-server 'cd ~/RobboHome/data/hello-world && docker compose -f docker-compose.prod.yml logs -f'

bump-patch:
	@bash scripts/bump-version.sh patch

bump-minor:
	@bash scripts/bump-version.sh minor

bump-major:
	@bash scripts/bump-version.sh major

ssh:
	ssh robbohome-server
