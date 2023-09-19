import doctorImage from '../../assets/doc.jpg'
import OurDoctorCard from './OurDoctorsCard'

const doctorData = [
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
]

const OurDoctors = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-primary mt-10 pb-2">
        Our Doctors
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full px-4 md:px-0">
        {doctorData.map((data, index) => (
          <OurDoctorCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default OurDoctors
