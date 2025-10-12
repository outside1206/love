import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GalleryModal from './GalleryModal'
import GalleryRowType from './public/GalleryRowType'
import SectionTitle from './public/SectionTitle'
import GalleryMembers from './public/GalleryMembers'

interface JejuGalleryProps {
  visibleMembers?: boolean
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 0 10px;
`

const JejuGallery = ({ visibleMembers }: JejuGalleryProps) => {
  const images = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    ...(visibleMembers ? ['9', '10', '11', '12', '13', '14', '15', '16'] : []),
    '17',
    '18',
    '19',
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
      <SectionTitle>Chapter1. Jeju</SectionTitle>
      <GalleryRowType
        type={2}
        tall1="1"
        wide1="2"
        wide2="3"
        tall2="4"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={1}
        wide1="5"
        wide2="6"
        tall1="7"
        tall2="8"
        onClickImage={onClickImage}
      />
      {visibleMembers && (
        <GalleryRowType
          type={3}
          tall1="9"
          tall2="10"
          wide1="11"
          wide2="12"
          onClickImage={onClickImage}
        />
      )}
      {visibleMembers && (
        <GalleryRowType
          type={3}
          tall1="13"
          tall2="14"
          wide1="15"
          wide2="16"
          onClickImage={onClickImage}
        />
      )}
      <GalleryRowType
        type={4}
        tall1="17"
        tall2="18"
        tall3="19"
        onClickImage={onClickImage}
      />
      {visibleMembers && <GalleryMembers type="jeju" />}
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

export default JejuGallery
