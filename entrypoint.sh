#!/bin/sh

echo "Checking Vars"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#FIREBASE_PRIVATE_KEY#$FIREBASE_PRIVATE_KEY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#COOKIE_SECRET_CURRENT#$COOKIE_SECRET_CURRENT#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#COOKIE_SECRET_PREVIOUS#$COOKIE_SECRET_PREVIOUS#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#NEXT_PUBLIC_IMAGE_CDN_PATH#$NEXT_PUBLIC_IMAGE_CDN_PATH#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#BUCKET_KEY#$BUCKET_KEY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#BUCKET_URL#$BUCKET_URL#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#NEXT_PUBLIC_API_KEY#$NEXT_PUBLIC_API_KEY#g"


echo "Starting Coding Bolt App"
exec "$@"