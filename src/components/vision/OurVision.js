import visionImage from '../../assets/vision.jpg'

const OurVision = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
        Our Vision
      </h1>

      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(58,201,131,0.05), rgba(58,201,131,1)), url(${visionImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top ',
          backgroundRepeat: 'no-repeat',
        }}
        className=" grid py-20 grid-cols-1 md:grid-cols-2 h-full w-full mt-8 gap-5 items-center"
      >
        <div className=" px-8">
          {' '}
          <h1 className="text-2xl font-bold text-secondaryText">
            Why Choose Us
          </h1>
          <p className="text-sm text-justify mb-5 mt-7 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima labore fugit incidunt a asperiores! Odit, est culpa. Eveniet
            quas ab rerum aperiam aliquam inventore nobis, saepe id impedit
            officia. Voluptatum quasi architecto nemo veritatis voluptas sunt
            quo, aspernatur consequatur.
          </p>
          <p className="text-sm text-justify font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            ducimus est quae enim pariatur, magnam deleniti, vero iure
            consequuntur minus labore quibusdam unde accusamus maiores mollitia
            repudiandae natus nihil? Quas saepe hic dolores illum, dolor aliquid
            ea doloremque ab sapiente numquam qui fugit temporibus! Cupiditate
            porro temporibus quidem voluptas eligendi, unde tempora id
          </p>
          <button className="mt-7 bg-white px-2 py-1 font-medium rounded-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurVision
