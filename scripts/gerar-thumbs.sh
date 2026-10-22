#!/bin/sh
# Gera miniaturas leves (AVIF, 1000px de largura) das fotos da galeria do Portfólio.
# Os originais em public/images NÃO são alterados: as miniaturas são gravadas em public/thumbs.
# Só gera o que falta (ou cujo original mudou). Requer macOS (usa o sips).
# Uso: sh scripts/gerar-thumbs.sh

cd "$(dirname "$0")/.." || exit 1

grep -o 'src: "/images/[^"]*"' app/portifolio.tsx | sed 's/^src: "//; s/"$//' | while read -r src; do
    orig="public$src"
    thumb="public/thumbs/${src#/images/}"
    thumb="${thumb%.*}.avif"

    [ -f "$orig" ] || { echo "não encontrado: $orig"; continue; }
    [ -f "$thumb" ] && [ "$thumb" -nt "$orig" ] && continue

    mkdir -p "$(dirname "$thumb")"
    width=$(sips -g pixelWidth "$orig" | awk '/pixelWidth/ {print $2}')
    height=$(sips -g pixelHeight "$orig" | awk '/pixelHeight/ {print $2}')

    # largura máx. 1000px; largura e altura sempre pares (o Chrome mostra preto
    # AVIF em grade 4:2:0 com dimensão ímpar)
    if [ "$width" -gt 1000 ]; then tw=1000; else tw=$((width - width % 2)); fi
    th=$((2 * ((height * tw + width) / (2 * width))))

    sips -z "$th" "$tw" -s format avif -s formatOptions 70 "$orig" --out "$thumb" >/dev/null
    echo "gerada: $thumb"
done
