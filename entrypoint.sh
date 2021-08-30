#!/bin/sh

echo "Checking Vars"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_CK_C#$COOKIE_SECRET_CURRENT#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_CK_P#$COOKIE_SECRET_PREVIOUS#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#imgkit#$NEXT_PUBLIC_IMAGE_CDN_PATH#g"

echo "Starting Coding Bolt App"
exec "$@"