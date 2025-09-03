import styled from '@emotion/styled'
import Image from 'next/image'
import nextConfig from '../../next.config'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  position: relative;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

const Title = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <StyledImage
        src={`${nextConfig.basePath}/images/title.jpeg`}
        alt="title"
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
    </Wrapper>
  )
}

export default Title
