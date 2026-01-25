FROM ubuntu:24.04

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    git \
    bash \
    && rm -rf /var/lib/apt/lists/*

# NVM settings
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=24

# Install NVM + Node
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && nvm alias default $NODE_VERSION

# Make node/npm available everywhere
ENV PATH="$NVM_DIR/versions/node/$(ls $NVM_DIR/versions/node)/bin:$PATH"

WORKDIR /app
