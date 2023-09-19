import OurPartners from '@/components/partner/OurPartners'
import OurServices from '@/components/service/OurServices'
import SwiperAutoSlider from '@/components/slider/Slider'
import OurVision from '@/components/vision/OurVision'

export default function Home() {
  return (
    <main>
      <SwiperAutoSlider />
      <OurServices />
      <OurPartners />
      <OurVision />
    </main>
  )
}
