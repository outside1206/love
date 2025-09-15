import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import nextConfig from '../../../next.config'

interface GalleryRowTypeProps {
  type: 1 | 2 | 3 | 4
  tall1: string
  tall2: string
  wide1?: string
  wide2?: string
  tall3?: string
  onClickImage: (image: string) => void
}

const Row = styled(motion.div)<{ type: 1 | 2 | 3 | 4 }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3칸 */
  grid-template-rows: repeat(2, 80px); /* 2행 */

  grid-template-areas: ${({ type }) =>
    type === 1
      ? `'wide1 tall1 tall2' 'wide2 tall1 tall2'`
      : type === 2
        ? `'tall1 wide1 tall2' 'tall1 wide2 tall2'`
        : type === 3
          ? `'tall1 tall2 wide1' 'tall1 tall2 wide2'`
          : `'tall1 tall2 tall3' 'tall1 tall2 tall3'`};

  gap: 12px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const TallWrapper = styled.div<{ area: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  grid-area: ${(p) => p.area};
  border-radius: 12px;
  overflow: hidden;
`

const WideWrapper = styled.div<{ area: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 3;
  grid-area: ${(p) => p.area};
  border-radius: 12px;
  overflow: hidden;
`

const PictureThumb = ({
  baseName,
  alt,
  sizes,
}: {
  baseName: string
  alt: string
  sizes: string
}) => {
  const bp = nextConfig.basePath ?? ''
  const srcsetWebp = [
    `${bp}/images/converted2/${baseName}-430.webp 430w`,
    `${bp}/images/converted2/${baseName}-860.webp 860w`,
    `${bp}/images/converted2/${baseName}-1290.webp 1290w`,
    `${bp}/images/converted2/${baseName}-1625.webp 1625w`,
  ].join(', ')

  return (
    <picture>
      <source type="image/webp" srcSet={srcsetWebp} sizes={sizes} />
      <Img
        src={`${bp}/images/converted2/${baseName}.jpeg`}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

/** 갤러리 한 줄 */
const GalleryRowType = ({
  type,
  tall1,
  tall2,
  wide1,
  wide2,
  tall3,
  onClickImage,
}: GalleryRowTypeProps) => {
  const THUMB_SIZES = '(max-width: 430px) calc((100vw - 24px)/3), 135px'

  return (
    <Row
      type={type}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <TallWrapper area="tall1" onClick={() => onClickImage(tall1)}>
        <PictureThumb
          baseName={`gallery${tall1}`}
          alt={`gallery${tall1}`}
          sizes={THUMB_SIZES}
        />
      </TallWrapper>

      <TallWrapper area="tall2" onClick={() => onClickImage(tall2)}>
        <PictureThumb
          baseName={`gallery${tall2}`}
          alt={`gallery${tall2}`}
          sizes={THUMB_SIZES}
        />
      </TallWrapper>

      {wide1 && (
        <WideWrapper area="wide1" onClick={() => onClickImage(wide1)}>
          <PictureThumb
            baseName={`gallery${wide1}`}
            alt={`gallery${wide1}`}
            sizes={THUMB_SIZES}
          />
        </WideWrapper>
      )}

      {wide2 && (
        <WideWrapper area="wide2" onClick={() => onClickImage(wide2)}>
          <PictureThumb
            baseName={`gallery${wide2}`}
            alt={`gallery${wide2}`}
            sizes={THUMB_SIZES}
          />
        </WideWrapper>
      )}

      {tall3 && (
        <TallWrapper area="tall3" onClick={() => onClickImage(tall3)}>
          <PictureThumb
            baseName={`gallery${tall3}`}
            alt={`gallery${tall3}`}
            sizes={THUMB_SIZES}
          />
        </TallWrapper>
      )}
    </Row>
  )
}

export default GalleryRowType
