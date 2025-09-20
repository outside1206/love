import styled from '@emotion/styled'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import nextConfig from '../../../next.config'
import { useState } from 'react'
import Image from 'next/image'

interface GalleryMembersProps {
  type: 'jeju' | 'studio'
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CreditTitleButton = styled.div`
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

const CreditTitle = styled.div`
  font-family: 'Gotham';
  font-weight: 700;
  color: #e6e6e6;
`

const CreditBody = styled(motion.div)``

const ThanksTo = styled.div`
  font-family: 'Gotham';
  font-weight: 500;
  font-size: 12px;
  color: #e6e6e6;

  margin-bottom: 6px;
`

const MemberListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 3px;
`

const MemberWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'Gotham';
  font-weight: 300;
  font-size: 10px;
  color: #e6e6e6;

  gap: 20px;
`

const MemberLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const MemberNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  gap: 5px;
`

const MemberName = styled.div``

const basePath = nextConfig.basePath ?? ''

const jejuMembers = [
  {
    label: 'Photographer',
    names: [
      {
        name: '@rise.mood_',
        link: 'https://www.instagram.com/rise.mood_/',
      },
      {
        name: '@rise.mood_jm',
        link: 'https://www.instagram.com/rise.mood_jm/',
      },
    ],
  },
  {
    label: 'I-phone&drone',
    names: [
      { name: '@yull.graphy', link: 'https://www.instagram.com/yull.graphy/' },
    ],
  },
  {
    label: 'Bridal Assistant',
    names: [
      { name: '@jeju_jungho', link: 'https://www.instagram.com/jeju_jungho/' },
    ],
  },
  {
    label: 'Flowers',
    names: [
      {
        name: '@blooming_alice_wedding',
        link: 'https://www.instagram.com/blooming_alice_wedding/',
      },
    ],
  },
  {
    label: 'Hair/Makeup',
    names: [
      { name: '@jeju_sohyun', link: 'https://www.instagram.com/jeju_sohyun/' },
    ],
  },
  {
    label: 'Dress',
    names: [
      { name: '@_lilli__n', link: 'https://www.instagram.com/_lilli__n/' },
    ],
  },
]

const studioMembers = [
  {
    label: 'Planning',
    names: [
      {
        name: '@with_sujinpl',
        link: 'https://www.instagram.com/with_sujinpl/',
      },
    ],
  },
  {
    label: 'Dress',
    names: [
      {
        name: '@etoffecouture_official',
        link: 'https://www.instagram.com/etoffecouture_official/',
      },
    ],
  },
  {
    label: 'Flowers',
    names: [
      {
        name: '@ermington_flowers',
        link: 'https://www.instagram.com/ermington_flowers/',
      },
    ],
  },
  {
    label: 'Photographer',
    names: [
      { name: '@monin_ssim', link: 'https://www.instagram.com/monin_ssim/' },
    ],
  },
  {
    label: 'Hair/Makeup',
    names: [
      { name: '@__leejin__', link: 'https://www.instagram.com/__leejin__/' },
      { name: '@im_yerinnn', link: 'https://www.instagram.com/im_yerinnn/' },
    ],
  },
  {
    label: 'Hair Stylist',
    names: [
      { name: '@taktaksalon', link: 'https://www.instagram.com/taktaksalon/' },
    ],
  },
]

const creditBodyVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    height: 'auto' as any, // 'auto' 때문에 TS 에러 → 강제 캐스팅
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const, // TS가 Easing 타입으로 인식하게 단언
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
}

const memberWrapperVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut' as const, // TS 에러 방지
    },
  },
}

const GalleryMembers = ({ type }: GalleryMembersProps) => {
  const [creditOpen, setCreditOpen] = useState<boolean>(false)
  const members = type === 'jeju' ? jejuMembers : studioMembers

  return (
    <Wrapper>
      <CreditTitleButton onClick={() => setCreditOpen((prev) => !prev)}>
        <CreditTitle>Credit</CreditTitle>
        <Image
          src={`${basePath}/images/raws/arrow-right.png`}
          alt="arrow-right"
          width={15}
          height={15}
        />
      </CreditTitleButton>
      <AnimatePresence>
        {creditOpen && (
          <CreditBody
            variants={creditBodyVariants}
            initial="hidden"
            animate="visible"
            exit="exit"

            // initial={{ y: '100%' }}
            // animate={{ y: '-100%' }}
            // exit={{ opacity: 0 }}
            // transition={{
            //   duration: 20, // 크레딧 올라가는 속도 (초 단위)
            //   ease: 'linear',
            // }}
            // style={{
            //   position: 'relative',
            //   overflow: 'hidden',
            //   height: '300px', // 보여줄 영역 높이
            // }}

            // initial={{ height: 0, opacity: 0 }}
            // animate={{ height: 'auto', opacity: 1 }}
            // exit={{ height: 0, opacity: 0 }}
            // transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ThanksTo>THANKS TO</ThanksTo>
            <MemberListWrapper
              variants={creditBodyVariants}
              initial="hidden"
              animate="visible"
              exit="exit"

              //   style={{
              //     display: 'flex',
              //     flexDirection: 'column',
              //     alignItems: 'center',
              //     gap: '10px',
              //   }}
            >
              {members.map(({ label, names }) => (
                <MemberWrapper
                  key={`jeju-${label}`}
                  variants={memberWrapperVariants}
                >
                  <MemberLabel>{label}</MemberLabel>
                  <MemberNameWrapper>
                    {names.map(({ name, link }) => (
                      <MemberName key={`jeju-${label}-${name}`}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </a>
                      </MemberName>
                    ))}
                  </MemberNameWrapper>
                </MemberWrapper>
              ))}
            </MemberListWrapper>
          </CreditBody>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default GalleryMembers
