import Attendance from '@/components/Attendance'
import Dday from '@/components/Dday'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
import Summary from '@/components/Summary'
import Title from '@/components/Title'

const Home1 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Summary />
          <Greeting />
          <JejuGallery visibleMembers />
          <StudioGallery visibleMembers />
          <Schedule />
          <Dday />
          <Location mapType="image" />
          <Attendance />
          <Share templateId={templateId} newsVisible />
        </>
      )}
    </Page>
  )
}

export default Home1
