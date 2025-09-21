import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  color: #e0e0e0;

  margin: 60px 0;
`

const Text = styled.div`
  font-family: 'Anek Bangla Expanded';
  font-size: 18px;
`

const Summary = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Text>2025년 11월 22일 토요일 오후 1시</Text>
      <Text>L65 호텔 웨딩 컨벤션 6층 컨벤션홀</Text>
    </Wrapper>
  )
}

export default Summary
