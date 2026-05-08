#!/bin/bash

echo "Setting up PIKUS core structure..."

mkdir -p app \
components/ui \
components/layout \
components/navigation \
components/products \
components/mdli \
components/blog \
components/shared \
sections/home \
sections/products \
sections/mdli \
sections/discover \
sections/partners \
sections/support \
features/products \
features/blog \
features/mdli \
features/shared \
lib \
hooks \
config \
styles \
assets/images \
assets/icons \
assets/videos \
types

echo "Structure ready (existing folders skipped automatically)."