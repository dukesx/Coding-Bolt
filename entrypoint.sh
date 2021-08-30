#!/bin/sh

echo "Checking Vars"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_C#$COOKIE_S_C#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_P#$COOKIE_S_PR#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#imgkit#$NEXT_PUBLIC_IMAGE_CDN_PATH#g"

echo "Starting Coding Bolt App"
exec "$@"