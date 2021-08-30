# syntax=docker/dockerfile:1.2
FROM node:14.17-buster-slim AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile
# Rebuild the source code only when needed
FROM node:14.17-buster-slim AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN COOKIE_SECRET_CURRENT=APP_COOKIE_SECRET_CURRENT;COOKIE_SECRET_PREVIOUS=APP_COOKIE_SECRET_PREVIOUS yarn build
# Production image, copy all the files and run next
FROM node:14.17-buster-slim AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --gecos 1001 --system nodejs
RUN adduser --system nextjs --uid 1001
RUN chown -R nextjs:nodejs /app/.next

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-env.d.ts ./
COPY --from=builder /app/postcss.config.js ./
COPY --from=builder /app/tailwind.config.js ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh



USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
ENTRYPOINT ["chmod", "+x","/app/entrypoint.sh"]
CMD ["yarn", "start"]