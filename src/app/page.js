import OurPartners from '@/components/partner/OurPartners'
import OurServices from '@/components/service/OurServices'
import SwiperAutoSlider from '@/components/slider/Slider'

export default function Home() {
  return (
    <main>
      <SwiperAutoSlider />
      <OurServices />
      <OurPartners />
    </main>
  )
}
