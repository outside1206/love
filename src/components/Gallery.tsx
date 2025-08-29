import styled from '@emotion/styled'
import GalleryRowType from './public/GalleryRowType'
import { useState } from 'react'
import GalleryModal from './GalleryModal'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  gap: 12px;

  // border: 1px solid red;
`
const Gallery = () => {
  const images = [
    '2',
    '3',
    '31',
    '32',
    '23',
    '22',
    '1',
    '11',
    '12',
    '33',
    '34',
    '13',
    '14',
    '15',
    '36',
    '24',
    '26',
    '27',
  ]

  const [open, setOpen] = useState<boolean>(false)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const onArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSelectedImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1,
      )
    } else {
      setSelectedImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      )
    }
  }

  const onClickImage = (image: string) => {
    setSelectedImageIndex(images.indexOf(image))
    setOpen(true)
  }

  return (
    <Wrapper>
      <GalleryRowType
        type={2}
        tall1="2"
        tall2="3"
        wide1="31"
        wide2="32"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="23"
        tall2="22"
        tall3="1"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={1}
        tall1="11"
        tall2="12"
        wide1="33"
        wide2="34"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="13"
        tall2="14"
        tall3="15"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={3}
        tall1="36"
        tall2="24"
        wide1="26"
        wide2="27"
        onClickImage={onClickImage}
      />
      {open && (
        <GalleryModal
          open={open}
          onClose={() => setOpen(false)}
          imageNum={images[selectedImageIndex]}
          onArrowClick={onArrowClick}
        />
      )}
    </Wrapper>
  )
}

export default Gallery
