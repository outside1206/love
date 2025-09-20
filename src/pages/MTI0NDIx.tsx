import Attendance from '@/components/Attendance'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
import Title from '@/components/Title'

const Home1 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Greeting />
          <JejuGallery />
          <StudioGallery />
          <Schedule />
          <Location />
          <Attendance />
          <Share templateId={templateId} />
        </>
      )}
    </Page>
  )
}

export default Home1
