VERSION=$1

echo "Packaging version ${VERSION}"

cd public && zip -r ../luna-launcher_v${VERSION}.zip * && cd ..