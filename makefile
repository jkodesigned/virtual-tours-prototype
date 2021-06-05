help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

run-dev: ## Run local development environment
	yarn run dev

build-prod: ## Create production build
	yarn run build

run-prod: ## Run production environment
	yarn run start

trans-extract: ## Extract translations
	yarn run lingui:extract

trans-compile: ## Compile translations
	yarn run lingui:compile

check: ## TypeScript and ESLint check
	yarn run check:ts && yarn run check:lint
