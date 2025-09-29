import Account from '@/components/Account'
import Attendance from '@/components/Attendance'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
import Summary from '@/components/Summary'
import Title from '@/components/Title'

const Home2 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Summary />
          <Greeting />
          <JejuGallery />
          <StudioGallery />
          <Schedule visibleDday />
          <Location mapType="naver" />
          <Attendance />
          <Account />
          <Share templateId={templateId} />
        </>
      )}
    </Page>
  )
}

export default Home2

/**
추가할 것
- 대절버스 안내

고민중
- 사진 좀 뺄까
- 오는 길 설명 단촐하게 바꿀까
 */
