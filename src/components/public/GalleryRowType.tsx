import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
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

const Image = styled(NextImage)`
  object-fit: cover;
`

const TallWrapper = styled.div<{ area: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 2/3;

  grid-area: ${(props) => props.area};

  border-radius: 12px;
  overflow: hidden;
`

const WideWrapper = styled.div<{ area: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;

  grid-area: ${(props) => props.area};

  border-radius: 12px;
  overflow: hidden;
`

const GalleryRowType = ({
  type,
  tall1,
  tall2,
  wide1,
  wide2,
  tall3,
  onClickImage,
}: GalleryRowTypeProps) => {
  return (
    <Row
      type={type}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <TallWrapper area="tall1" onClick={() => onClickImage(tall1)}>
        <Image
          src={`${nextConfig.basePath}/images/gallery${tall1}.jpeg`}
          alt={`gallery${tall1}`}
          fill
        />
      </TallWrapper>

      <TallWrapper area="tall2" onClick={() => onClickImage(tall2)}>
        <Image
          src={`${nextConfig.basePath}/images/gallery${tall2}.jpeg`}
          alt={`gallery${tall2}`}
          fill
        />
      </TallWrapper>

      {wide1 && (
        <WideWrapper area="wide1" onClick={() => onClickImage(wide1)}>
          <Image
            src={`${nextConfig.basePath}/images/gallery${wide1}.jpeg`}
            alt={`gallery${wide1}`}
            fill
          />
        </WideWrapper>
      )}

      {wide2 && (
        <WideWrapper area="wide2" onClick={() => onClickImage(wide2)}>
          <Image
            src={`${nextConfig.basePath}/images/gallery${wide2}.jpeg`}
            alt={`gallery${wide2}`}
            fill
          />
        </WideWrapper>
      )}

      {tall3 && (
        <TallWrapper area="tall3" onClick={() => onClickImage(tall3)}>
          <Image
            src={`${nextConfig.basePath}/images/gallery${tall3}.jpeg`}
            alt={`gallery${tall3}`}
            fill
          />
        </TallWrapper>
      )}
    </Row>
  )
}

export default GalleryRowType
