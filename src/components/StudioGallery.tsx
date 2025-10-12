import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GalleryModal from './GalleryModal'
import GalleryRowType from './public/GalleryRowType'
import SectionTitle from './public/SectionTitle'
import GalleryMembers from './public/GalleryMembers'

interface StudioGalleryProps {
  visibleMembers?: boolean
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 0 10px;
  margin-top: 40px;
`

const StudioGallery = ({ visibleMembers }: StudioGalleryProps) => {
  const images = [
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    ...(visibleMembers ? ['26', '27', '28'] : []),
    '29',
    '30',
    '31',
    ...(visibleMembers ? ['32', '33', '34'] : []),
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
      <SectionTitle>Chapter2. Studio</SectionTitle>
      <GalleryRowType
        type={4}
        tall1="20"
        tall2="21"
        tall3="22"
        onClickImage={onClickImage}
      />
      <GalleryRowType
        type={4}
        tall1="23"
        tall2="24"
        tall3="25"
        onClickImage={onClickImage}
      />
      {visibleMembers && (
        <GalleryRowType
          type={4}
          tall1="26"
          tall2="27"
          tall3="28"
          onClickImage={onClickImage}
        />
      )}
      <GalleryRowType
        type={4}
        tall1="29"
        tall2="30"
        tall3="31"
        onClickImage={onClickImage}
      />
      {visibleMembers && (
        <GalleryRowType
          type={4}
          tall1="32"
          tall2="33"
          tall3="34"
          onClickImage={onClickImage}
        />
      )}
      {visibleMembers && <GalleryMembers type="studio" />}
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
