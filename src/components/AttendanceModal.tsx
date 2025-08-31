import styled from '@emotion/styled'
import { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import Modal from './public/Modal'

interface AttendanceModalProps {
  open: boolean
  onClose: () => void
}

const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;

  color: #fff;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 20px;
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  border-radius: 10px;

  background: white;
`

const Title = styled.div`
  display: flex;
  justify-content: start;

  font-weight: bold;
  font-size: 18px;

  margin-bottom: 10px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  gap: 10px;

  padding: 10px 0;
`

const Label = styled.div`
  display: flex;
  justify-content: start;
`

const Content = styled.div`
  display: flex;
  justify-content: start;

  gap: 5px;

  & > button {
    flex: 1;
  }
  & > input {
    flex: 1;
  }
`

const SideButton = styled(Button)<{
  side: '신랑측' | '신부측'
  selected: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  border-radius: 5px;
  background-color: ${({ side, selected }) =>
    side === '신랑측'
      ? `${selected ? '#80a6e5' : '#f9f9f9'}`
      : `${selected ? '#e49caa' : '#f9f9f9'}`};

  color: ${({ selected }) => (selected ? '#fff' : '#666')};
`

const Input = styled.input`
  outline: none;

  padding: 10px 15px;
  margin: 0;

  background: #f9f9f9;
  border: none;

  color: #666;
  font-size: 16px;
`

const EatTypeButton = styled(Button)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  background: ${({ selected }) => (selected ? '#fff' : '#f9f9f9')};
  color: #666;

  border: 1px solid ${({ selected }) => (selected ? '#ddd' : 'transparent')};
  border-radius: 5px;
`

const SubmitButton = styled(Button)`
  margin-top: 24px;
  padding: 15px 0 15px 0;

  color: #fff;

  background-color: #d0b9b9;

  border-radius: 5px;
`

const AttendanceModal = ({ open, onClose }: AttendanceModalProps) => {
  const [side, setSide] = useState<'신랑측' | '신부측'>('신랑측')
  const [name, setName] = useState<string>('')
  const [count, setCount] = useState<string>('')
  const [eatType, setEatType] = useState<'예정' | '안함' | '미정'>('예정')

  const onClickSide = (side: '신랑측' | '신부측') => {
    setSide(side)
  }

  const onClickEatType = (type: '예정' | '안함' | '미정') => {
    setEatType(type)
  }

  const handleSubmit = async () => {
    if (!side || !name || !count || !eatType) {
      alert('모든 필드를 입력해주세요.')

      return
    }

    const formData = new FormData()

    formData.append(
      `${process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID_SIDE}`,
      side,
    )
    formData.append(
      `${process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID_NAME}`,
      name,
    )
    formData.append(
      `${process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID_COUNT}`,
      count,
    )
    formData.append(
      `${process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID_EAT_TYPE}`,
      eatType,
    )

    await fetch(`${process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}`, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })

    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      overlayChildren={
        <Overlay>
          <Button>
            <VscClose size={24} />
          </Button>
        </Overlay>
      }
    >
      <Wrapper>
        <ContentWrapper>
          <Title>참석 의사 전달</Title>
          <Row>
            <Label>구분</Label>
            <Content>
              <SideButton
                onClick={() => {
                  onClickSide('신랑측')
                }}
                side={side}
                selected={side === '신랑측'}
              >
                신랑측
              </SideButton>
              <SideButton
                onClick={() => {
                  onClickSide('신부측')
                }}
                side={side}
                selected={side === '신부측'}
              >
                신부측
              </SideButton>
            </Content>
          </Row>
          <Row>
            <Label>성함</Label>
            <Content>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Content>
          </Row>
          <Row>
            <Label>참석인원</Label>
            <Content>
              <Input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </Content>
          </Row>
          <Row>
            <Label>식사여부</Label>
            <Content>
              <EatTypeButton
                selected={eatType === '예정'}
                onClick={() => onClickEatType('예정')}
              >
                예정
              </EatTypeButton>
              <EatTypeButton
                selected={eatType === '안함'}
                onClick={() => onClickEatType('안함')}
              >
                안함
              </EatTypeButton>
              <EatTypeButton
                selected={eatType === '미정'}
                onClick={() => onClickEatType('미정')}
              >
                미정
              </EatTypeButton>
            </Content>
          </Row>
          <SubmitButton onClick={handleSubmit}>참석 의사 전달하기</SubmitButton>
        </ContentWrapper>
      </Wrapper>
    </Modal>
  )
}

export default AttendanceModal
