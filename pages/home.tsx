import Bimmer from '@component/common/Bimmer'
import Contact from '@component/common/Contact'
import Section1 from '@component/home-1/Section1'
import Section12 from '@component/home-1/Section12'
import AppLayout from '@component/layout/AppLayout'

const IndexPage = () => {
  return (
    <AppLayout>
      <Section1 />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section13 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 /> */}
      <Section12 />
      <Bimmer />
      <Contact />
    </AppLayout>
  )
}

export default IndexPage
