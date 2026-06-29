# ---- Base Stage ----
FROM node:18-alpine AS base
WORKDIR /usr/src/app

# ---- Dependencies ----
COPY package*.json ./
RUN npm install --production

# ---- App ----
COPY . .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/hello || exit 1

# Run app
CMD ["node", "index.js"]
