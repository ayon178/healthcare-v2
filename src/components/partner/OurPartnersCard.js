const OurPartnersCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(58,201,131,0.05), rgba(58,201,131,1)), url(${data.image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-72 mx-auto max-w-sm p-0 pb-4 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex items-center justify-end flex-col h-full w-full ">
        <h1 className="text-center px-4 text-lg md:text-xl font-semibold mt-3 mb-2">
          {data.title}
        </h1>
        <p className="text-justify text-[.8rem] px-4 font-medium">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default OurPartnersCard
