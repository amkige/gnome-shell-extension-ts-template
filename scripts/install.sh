#!/bin/bash

cd out

file=$(find *.zip)

echo "Installing $file..."

gnome-extensions install "$file" \
    --force

echo "Done!"