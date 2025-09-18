import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode, useMemo } from 'react'

interface PageProps {
  children: (templateId: number) => ReactNode
}

const Wrapper = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  position: relative;
  padding-bottom: 0;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
  transition: filter 1s ease-out 0s;

  background-color: black;
`

const Page = ({ children }: PageProps) => {
  const router = useRouter()
  const templateId = useMemo(() => {
    const templateIdBase64 = router.route.split('/')[1]

    if (!templateIdBase64) {
      return null
    }

    return Number(Buffer.from(templateIdBase64, 'base64').toString('utf-8'))
  }, [router.route])

  return (
    templateId && (
      <Wrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children(templateId)}
      </Wrapper>
    )
  )
}

export default Page
