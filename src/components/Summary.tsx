import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  padding: 60px 0;

  color: #e0e0e0;

  // border: 1px solid red;
`

const Summary = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      간단하게 날짜 요일 시간, 장소
    </Wrapper>
  )
}

export default Summary
