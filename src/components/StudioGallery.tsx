import styled from '@emotion/styled'
import GalleryRowType from './public/GalleryRowType'
import { useState } from 'react'
import GalleryModal from './GalleryModal'
import { motion } from 'framer-motion'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 0 10px;
  margin-top: 40px;
`

const StudioGallery = () => {
  const images = [
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '33',
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
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Studio</SectionTitle>
      <GalleryRowType
        type={4}
        tall1="20"
        tall2="21"
        tall3="22"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={2}
        tall1="23"
        wide1="24"
        wide2="25"
        tall2="26"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="27"
        tall2="29"
        tall3="33"
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

export default StudioGallery
