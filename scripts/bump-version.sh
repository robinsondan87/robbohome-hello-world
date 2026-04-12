#!/bin/bash
TYPE=${1:-patch}
VERSION=$(cat VERSION)
IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"

case $TYPE in
  major) MAJOR=$((MAJOR+1)); MINOR=0; PATCH=0 ;;
  minor) MINOR=$((MINOR+1)); PATCH=0 ;;
  patch) PATCH=$((PATCH+1)) ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
echo $NEW_VERSION > VERSION
git add VERSION
git commit -m "chore: bump version to $NEW_VERSION"
git tag "v$NEW_VERSION"
echo ""
echo "Bumped to v$NEW_VERSION"
echo "Deploy with: git push && git push --tags"
