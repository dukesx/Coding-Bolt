#!/bin/sh

echo "Checking Vars"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_SECRET_CURRENT#APP_$COOKIE_SECRET_CURRENT#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_COOKIE_SECRET_PREVIOUS#APP_$COOKIE_SECRET_PREVIOUS#g"

echo "Starting Coding Bolt App"
exec "$@"