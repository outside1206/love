import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import nextConfig from '../../next.config'
import GalleryModal from './GalleryModal'

const Wrapper = styled.div`
  padding: 40px 0;

  background-color: #fffdf4;
`

const Title = styled.div`
  color: #4e4c4b;

  margin-bottom: 40px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  position: relative;
  aspect-ratio: 3 / 4;
`

const Gallery = () => {
  const imageNumbers = Array.from({ length: 12 }, (_, i) => i + 20)

  const [open, setOpen] = useState<boolean>(false)
  const [selectImageNum, setSelectImageNum] = useState<number>(1)

  const onArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSelectImageNum((prev) => (prev === 1 ? 12 : prev - 1))
    } else {
      setSelectImageNum((prev) => (prev === 12 ? 1 : prev + 1))
    }
  }

  return (
    <Wrapper>
      <Title
        onClick={() => {
          setOpen(true)
        }}
      >
        GALLERY
      </Title>
      <Container>
        {imageNumbers.map((num) => (
          <ImageWrapper key={`index-gallery-${num}`}>
            <Image
              src={`${nextConfig.basePath}/images/gallery${num}.jpeg`}
              alt={`gallery${num}`}
              fill
              style={{ objectFit: 'cover' }}
              onClick={() => {
                setSelectImageNum(num)
                setOpen(true)
              }}
            />
          </ImageWrapper>
        ))}
      </Container>
      {open && (
        <GalleryModal
          open={open}
          onClose={() => setOpen(false)}
          imageNum={selectImageNum}
          onArrowClick={onArrowClick}
        />
      )}
    </Wrapper>
  )
}

export default Gallery
