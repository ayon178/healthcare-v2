import Image from 'next/image'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const OurDoctorCard = ({ data }) => {
  return (
    <div className="w-full mx-auto max-w-sm p-0 pb-4  ">
      <div className="relative" style={{ paddingBottom: '85%' }}>
        <Image
          src={data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, 640px"
          objectPosition="top"
          className="rounded-md"
        />
      </div>
      <div className="bg-primary text-center px-8 py-4 rounded-md mt-2">
        <h1 className="text-xl font-semibold text-secondaryText">
          {data.name}
        </h1>
        <p className="text-sm text-primaryText">{data.degignation}</p>
        <p className="text-sm md:text-center text-primaryText mt-4">
          {data.details}
        </p>
        <div className="flex justify-center mt-4">
          <BsFacebook className="text-lg text-white mr-3" />
          <BsTwitter className="text-lg text-white mr-3" />
          <BsInstagram className="text-lg text-white mr-3" />
          <BsLinkedin className="text-lg text-white mr" />
        </div>
      </div>
    </div>
  )
}

export default OurDoctorCard
