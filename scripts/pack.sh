#!/bin/bash

cd out

echo "Packing..."

gnome-extensions pack dist \
    --force \
    --extra-source="modules" \
    --extra-source="assets" \
    --extra-source="lib"

echo "Done!"