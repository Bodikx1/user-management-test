FROM node:18.16.0-alpine as base

# Add package file
COPY package.json ./

# Install deps
RUN npm install

# Copy source files
COPY ./ ./

# Build dist
RUN npm build

# Start production image build
FROM node:18.16.0-alpine

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base ./dist /dist

# Expose port 3000
EXPOSE 3000
CMD ["dist/index.js"]