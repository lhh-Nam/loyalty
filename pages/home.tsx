import Bimmer from '@component/common/Bimmer'
import Contact from '@component/common/Contact'
import Section1 from '@component/home-1/Section1'
import Section12 from '@component/home-1/Section12'
import AppLayout from '@component/layout/AppLayout'

const IndexPage = () => {
  return (
    <AppLayout>
      <Section1 />
      <Section12 />
      <Bimmer />
      <Contact />
    </AppLayout>
  )
}

export default IndexPage
