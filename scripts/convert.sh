#!/usr/bin/env bash
set -euo pipefail

# 사용법: ./convert_gallery_webp.sh [입력폴더] [출력폴더]
# 예시  : ./convert_gallery_webp.sh ./public/images ./public/converted

IN_DIR="${1:-.}"
OUT_DIR="${2:-public/converted}"
SIZES=(430 860 1290 1625)

mkdir -p "$OUT_DIR"

# macOS bash 호환: 확장자가 대소문자 섞여도 매칭되도록
shopt -s nullglob nocaseglob

files=("$IN_DIR"/gallery*.jpg "$IN_DIR"/gallery*.jpeg)
if ((${#files[@]} == 0)); then
  echo "⚠️  '${IN_DIR}'에서 gallery*.jpg|jpeg 파일을 찾지 못했습니다."
  exit 0
fi

for f in "${files[@]}"; do
  filename="$(basename "$f")"
  base="${filename%.*}"              # gallery12.jpeg -> gallery12
  for w in "${SIZES[@]}"; do
    out="${OUT_DIR}/${base}-${w}.webp"  # gallery12-430.webp
    magick "$f" -strip -resize "${w}x" \
      -quality 78 -define webp:lossless=false \
      "$out"
    echo "✓ $out"
  done
done

echo "✅ 변환 완료: $OUT_DIR"
