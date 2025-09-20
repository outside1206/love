import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import nextConfig from '../../../next.config'

const Wrapper = styled.div`
  margin: 3px 4px 40px 4px;
`

const TitleButton = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: none;
  background-color: transparent;

  &:active {
    opacity: 0.8 !important;
    transform: scale(0.98) !important;
  }

  cursor: pointer;
`

const Title = styled.div`
  font-size: 12px;
  color: black;
`

const BodyWrapper = styled.div`
  font-size: 11px;
  color: black;
`

const List = styled.ul`
  text-align: left;

  margin-top: 6px;
  padding-left: 20px;
`

const basePath = nextConfig.basePath ?? ''

const News = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <TitleButton onClick={() => setOpen((prev) => !prev)}>
        <Title>새로운 소식</Title>
        <Image
          src={`${basePath}/images/raws/arrow-right-black.png`}
          alt="arrow-right-black"
          width={15}
          height={15}
        />
      </TitleButton>
      {open && (
        <BodyWrapper>
          <List>
            <li>2025-09-20 지하철 나온 후 웨딩홀 가는 길 링크 추가</li>
            <li>2025-09-20 자가용 상세 오는 길 링크 추가</li>
          </List>
        </BodyWrapper>
      )}
    </Wrapper>
  )
}

export default News
