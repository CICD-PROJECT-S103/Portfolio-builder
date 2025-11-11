# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if available)
COPY package.json pnpm-lock.yaml* ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies (without frozen lockfile to handle outdated lock)
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Change ownership of the app directory to the nextjs user
RUN chown -R nextjs:nodejs /app

# Switch to the non-root user
USER nextjs

# Start the application
CMD ["pnpm", "start"]