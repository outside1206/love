import styled from '@emotion/styled'
import { VscClose } from 'react-icons/vsc'
import Modal from './Modal'
import Image from 'next/image'

interface ImageModalProps {
  open: boolean
  onClose: () => void
  image: string
  descriptions: string[]
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
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 430px;

  background-color: #000;
  margin: 0 20px;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  text-align: left;
  color: #fff;
`

const ImageModal = ({
  open,
  onClose,
  image,
  descriptions,
}: ImageModalProps) => {
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
          <ImageWrapper>
            <Image src={image} alt={image} width={300} height={400} />
          </ImageWrapper>
          <TextWrapper>
            {descriptions.map((description) => (
              <Text key={`${description}`}>{description}</Text>
            ))}
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Modal>
  )
}

export default ImageModal
