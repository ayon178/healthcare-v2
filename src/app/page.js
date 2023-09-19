import Appointment from '@/components/appointment/Appointment'
import OurDoctors from '@/components/doctor/OurDoctors'
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
      <OurDoctors />
      <Appointment />
    </main>
  )
}
