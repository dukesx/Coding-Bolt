#APP_!/bin/sh

echo "Checking Vars"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_FIREBASE_PRIVATE_KEY#APP_$FIREBASE_PRIVATE_KEY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_SECRET_CURRENT#APP_$COOKIE_SECRET_CURRENT#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_SECRET_PREVIOUS#APP_$COOKIE_SECRET_PREVIOUS#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_IMAGE_CDN_PATH#APP_$NEXT_PUBLIC_IMAGE_CDN_PATH#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_BUCKET_KEY#APP_$BUCKET_KEY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_BUCKET_URL#APP_$BUCKET_URL#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_API_KEY#APP_$NEXT_PUBLIC_API_KEY#g"


echo "Starting Coding Bolt App"
exec "$@"