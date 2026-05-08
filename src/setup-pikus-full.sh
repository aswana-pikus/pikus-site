#!/bin/bash

echo "🚀 Setting up PIKUS full architecture..."

mkdir -p app \
app/products/closed-pods \
app/products/disposables \
app/products/open-systems \
app/products/accessories \
app/mdli/what-is-mdli \
app/mdli/flavor-engineering \
app/mdli/performance \
app/discover/blog \
app/discover/guides \
app/discover/regulations \
app/partners/wholesale \
app/partners/marketing-resources \
app/support/faq \
app/support/warranty \
app/support/manuals \
app/about \
app/contact \
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

touch app/layout.tsx \
app/page.tsx \
app/products/page.tsx \
app/mdli/page.tsx \
app/discover/page.tsx \
app/partners/page.tsx \
app/support/page.tsx \
app/about/page.tsx \
app/contact.page.tsx \
config/site.ts \
config/nav.ts \
lib/utils.ts \
lib/seo.ts \
styles/globals.css \
types/product.ts \
types/blog.ts \
types/mdli.ts

echo "✅ PIKUS structure ready. Existing folders/files were safely reused."