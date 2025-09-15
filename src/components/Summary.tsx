import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  color: #e0e0e0;
`

const Title = styled.div`
  font-family: 'Brownhill Script';
  font-size: 40px;
  color: #ff5e6c;

  margin-bottom: 20px;
`

const Summary = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>Our Wedding Day</Title>
      간단하게 날짜 요일 시간, 장소
    </Wrapper>
  )
}

export default Summary
