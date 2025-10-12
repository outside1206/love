import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GalleryModal from './GalleryModal'
import GalleryRowType from './public/GalleryRowType'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 0 10px;
`

const Gallery = () => {
  const images = ['5', '6', '7', '8', '23', '24', '25', '30', '18', '31']

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
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Gallery</SectionTitle>
      <GalleryRowType
        type={1}
        wide1="5"
        wide2="6"
        tall1="7"
        tall2="8"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="23"
        tall2="24"
        tall3="25"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="30"
        tall2="18"
        tall3="31"
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
