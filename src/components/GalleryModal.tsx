import styled from '@emotion/styled'
import { useState } from 'react'
import { VscArrowLeft, VscArrowRight, VscClose } from 'react-icons/vsc'
import nextConfig from '../../next.config'
import Modal from './public/Modal'

interface GalleryModalProps {
  open: boolean
  onClose: () => void
  imageNum: string
  onArrowClick: (direction: 'left' | 'right') => void
}

const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;

  color: #fff;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 10px;
`

const ImageWrapper = styled.div<{ aspectRatio: number }>`
  width: 100%;
  max-width: 700px;

  position: relative;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const GalleryModal = ({
  open,
  onClose,
  imageNum,
  onArrowClick,
}: GalleryModalProps) => {
  const [aspectRatio, setAspectRatio] = useState(1)

  const basePath = nextConfig.basePath ?? ''
  const srcsetWebp = [
    `${basePath}/images/converted2/gallery${imageNum}-1290.webp 1290w`,
    `${basePath}/images/converted2/gallery${imageNum}-1625.webp 1625w`,
  ].join(', ')

  return (
    <Modal
      open={open}
      onClose={onClose}
      overlayChildren={
        <Overlay>
          <Button>
            <VscClose size={24} />
          </Button>
        </Overlay>
      }
    >
      <Wrapper>
        <Button>
          <VscArrowLeft
            size={24}
            color="#fff"
            onClick={() => {
              onArrowClick('left')
            }}
          />
        </Button>
        <ImageWrapper aspectRatio={aspectRatio}>
          <picture>
            <source type="image/webp" srcSet={srcsetWebp} />
            <Img
              src={`${basePath}/images/converted2/gallery${imageNum}.jpeg`}
              alt={`gallery${imageNum}`}
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                const image = e.currentTarget as HTMLImageElement
                const ratio = image.naturalWidth / image.naturalHeight
                setAspectRatio(ratio)
              }}
            />
          </picture>
        </ImageWrapper>
        <Button>
          <VscArrowRight
            size={24}
            color="#fff"
            onClick={() => {
              onArrowClick('right')
            }}
          />
        </Button>
      </Wrapper>
    </Modal>
  )
}

export default GalleryModal
