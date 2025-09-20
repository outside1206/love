import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled(motion.div)`
  padding-bottom: 40px;

  color: #e0e0e0;
`

const HandCopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  margin-top: 40px;
`

const Greeting = () => {
  const basePath = nextConfig.basePath ?? ''

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Celebrate With Us</SectionTitle>
      <HandCopyWrapper>
        <Image
          src={`${basePath}/images/raws/hand-copy-1.png`}
          alt="hand-copy"
          width={312}
          height={52}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-2.png`}
          alt="hand-copy"
          width={322}
          height={57}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-3.png`}
          alt="hand-copy"
          width={243}
          height={58}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-4.png`}
          alt="hand-copy"
          width={275}
          height={79}
        />
      </HandCopyWrapper>
    </Wrapper>
  )
}
export default Greeting
