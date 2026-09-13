#!/usr/bin/env bash
set -e

mkdir -p out

echo "=========================================================="
echo "🎬 Renderizando Reel 1: Autoridade & Engenheiro Sênior (18s)..."
echo "=========================================================="
./node_modules/.bin/remotion render src/index.ts Reel1Authority out/reel1-autoridade.mp4 --concurrency=4

echo "=========================================================="
echo "🎨 Renderizando Reel 2: Showcase Visual Cosmic UI (16s)..."
echo "=========================================================="
./node_modules/.bin/remotion render src/index.ts Reel2Visual out/reel2-visual.mp4 --concurrency=4

echo "=========================================================="
echo "⚡ Renderizando Reel 3: Teaser Rápido & CTA Direto (12s)..."
echo "=========================================================="
./node_modules/.bin/remotion render src/index.ts Reel3Teaser out/reel3-teaser.mp4 --concurrency=4

echo "=========================================================="
echo "✅ Todos os 3 vídeos foram renderizados com sucesso em out/!"
echo "=========================================================="
