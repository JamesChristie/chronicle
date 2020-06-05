#!/usr/bin/env bash

CURRENT_FILE_PATH=$(realpath $0)

ROOT_DIRECTORY=$(dirname $(dirname $CURRENT_FILE_PATH))
SCRIPT_PATH="${ROOT_DIRECTORY}/script"
BUILD_PATH="${ROOT_DIRECTORY}/build"
ARTIFACT_PATH="${BUILD_PATH}/artifacts"
STYLES_PATH="${ROOT_DIRECTORY}/assets/styles"
TEMPLATE_PATH="${ROOT_DIRECTORY}/assets/templates"

cd $ROOT_DIRECTORY

echo "Cleaning build path..."
if [[ -d $BUILD_PATH ]]
then
  rm -r $BUILD_PATH
fi

mkdir -p $ARTIFACT_PATH

echo "Compiling TypeScript..."
npx tsc --project "${ROOT_DIRECTORY}/tsconfig.json" \
        --outFile "${ARTIFACT_PATH}/out.ts"

echo "Compiling SASS..."
node "${SCRIPT_PATH}/lib/build_sass.js" \
     "${STYLES_PATH}/base.sass" \
     "${ARTIFACT_PATH}/out.css"

echo "Building app..."
node "${SCRIPT_PATH}/lib/build_app.js" \
     "${TEMPLATE_PATH}/app.mustache" \
     "${ARTIFACT_PATH}/out.ts" \
     "${ARTIFACT_PATH}/out.css" \
     "${BUILD_PATH}/index.html"

exit 0
