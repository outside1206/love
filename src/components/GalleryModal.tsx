import styled from '@emotion/styled'
import Image from 'next/image'
import nextConfig from '../../next.config'
import Modal from './public/Modal'
import { useState } from 'react'
import { VscClose, VscArrowLeft, VscArrowRight } from 'react-icons/vsc'

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

const GalleryModal = ({
  open,
  onClose,
  imageNum,
  onArrowClick,
}: GalleryModalProps) => {
  const [aspectRatio, setAspectRatio] = useState(1)

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
          <Image
            src={`${nextConfig.basePath}/images/gallery${imageNum}.jpeg`}
            alt={`gallery${imageNum}`}
            fill
            style={{ objectFit: 'contain' }}
            onLoad={(e) => {
              const image = e.currentTarget as HTMLImageElement
              const ratio = image.naturalWidth / image.naturalHeight
              setAspectRatio(ratio)
            }}
          />
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
