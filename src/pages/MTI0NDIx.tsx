import Attendance from '@/components/Attendance'
import Dday from '@/components/Dday'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Notice from '@/components/Notice'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
import Summary from '@/components/Summary'
import Tip from '@/components/Tip'
import Title from '@/components/Title'

const Home1 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Summary />
          <Notice />
          <Tip />
          <Location mapType="image" />
          <Schedule />
          <Attendance />
          <Greeting />
          <JejuGallery visibleMembers />
          <StudioGallery visibleMembers />
          <Dday />
          <Share templateId={templateId} newsVisible />
        </>
      )}
    </Page>
  )
}

export default Home1
