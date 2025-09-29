import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { RiKakaoTalkLine } from 'react-icons/ri'
import News from './public/News'

interface ShareProps {
  templateId: number
  newsVisible?: boolean
}

const Wrapper = styled(motion.div)<{ newVisible?: boolean }>`
  margin-top: 40px;
  padding-bottom: 40px;

  background-color: #f2eeee;
  border-top: 1px solid #e0e0e0;

  ${({ newVisible }) => !newVisible && 'padding-top: 40px;'}
`

const ThankYouText = styled.div`
  font-size: 12px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 40px;
  gap: 10px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: #f2eeee;

  gap: 3px;

  :enabled:active {
    opacity: 0.8 !important;
    transform: scale(0.98) !important;
  }
`

const CopyRight = styled.div`
  font-size: 10px;

  a {
    text-decoration: underline;
  }
`

const Share = ({ templateId, newsVisible }: ShareProps) => {
  const onClickKakaoShare = () => {
    window.Kakao.Share.sendCustom({
      templateId,
    })
  }

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)
    }
  }, [])

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
      newVisible={newsVisible}
    >
      {newsVisible && <News />}
      <ThankYouText>
        항상 저희를 지켜봐주시고 지원해주신 부모님과 가족,
      </ThankYouText>
      <ThankYouText>
        그리고 응원과 축하의 마음을 전해주신 모든 분들께
      </ThankYouText>
      <ThankYouText>진심으로 감사드립니다.</ThankYouText>
      <ThankYouText>항상 건강하시고 행복하세요.</ThankYouText>
      <ButtonWrapper>
        <Button onClick={onClickKakaoShare}>
          <RiKakaoTalkLine size={18} />
          카카오톡 공유하기
        </Button>
      </ButtonWrapper>
      {/* <CopyRight>직접 만든 종이청첩장 구경하기</CopyRight> */}
      <CopyRight>
        Created by 7ryean. Developed by{' '}
        <a href="https://github.com/byun618">byun618</a>.
      </CopyRight>
      <CopyRight>Powered by Github Page. 2025.</CopyRight>
    </Wrapper>
  )
}

export default Share
