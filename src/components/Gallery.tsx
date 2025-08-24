import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import nextConfig from '../../next.config'
import GalleryModal from './GalleryModal'

const Wrapper = styled.div`
  padding: 40px 0;
`

const Title = styled.div`
  color: #e0e0e0;

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
  // TODO: 이미지 정해지면 개선 필요
  const limit = 12
  const offset = 20
  const imageNumbers = Array.from({ length: limit }, (_, i) => i + offset)

  const [open, setOpen] = useState<boolean>(false)
  const [selectImageNum, setSelectImageNum] = useState<number>(1)

  const onArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSelectImageNum((prev) =>
        prev === offset ? offset + limit - 1 : prev - 1,
      )
    } else {
      setSelectImageNum((prev) =>
        prev === offset + limit - 1 ? offset : prev + 1,
      )
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
