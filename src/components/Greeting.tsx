import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled(motion.div)`
  padding: 40px 0;

  color: #e0e0e0;
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
      <SectionTitle>Invite You</SectionTitle>
      <Image
        src={`${basePath}/images/raws2/hand-copy-2.png`}
        alt="hand-copy"
        width={300}
        height={360}
      />
    </Wrapper>
  )
}
export default Greeting
