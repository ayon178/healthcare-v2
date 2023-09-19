'use client'

import React, { useEffect } from 'react'
import { BiLayer } from 'react-icons/bi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import buildingImage from '../../assets/building.jpg'
import OurPartnersCard from './OurPartnersCard'

const cardData = [
  {
    image: buildingImage,
    title: 'Advanced Technology',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit',
    icon: BiLayer,
  },
  {
    image: buildingImage,
    title: 'Comfortable Place',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit',
    icon: BiLayer,
  },
  {
    image: buildingImage,
    title: 'Quality Equipment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit',
    icon: BiLayer,
  },
  {
    image: buildingImage,
    title: 'Friendly Staff',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit',
    icon: BiLayer,
  },
]

const OurPartners = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    cardData.forEach((_, index) => {
      const cardAnimationLeftToRight = gsap.timeline({
        scrollTrigger: {
          trigger: `.partner-card-${index}`,
          start: '70% bottom',
          end: ' center bottom',
          scrub: 1,
        },
        defaults: { duration: 1, ease: 'power2.out' },
      })

      cardAnimationLeftToRight.fromTo(
        `.partner-card-${index}`,
        { opacity: 0, x: '-100%' },
        { opacity: 1, x: '0%' }
      )
    })

    cardData.forEach((_, index) => {
      const cardAnimationLeftToRightArea2 = gsap.timeline({
        scrollTrigger: {
          trigger: `.partner-card-area-2-${index}`,
          start: '70% bottom',
          end: ' center bottom',
          scrub: 1,
        },
        defaults: { duration: 1, ease: 'power2.out' },
      })

      cardAnimationLeftToRightArea2.fromTo(
        `.partner-card-area-2-${index}`,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: '0%' }
      )
    })
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-primary mt-10 pb-2">
        Our Partners
      </h1>
      <h1 className="text-center mt-5 font-semibold bg-primary px-2 py-1 text-white rounded-md w-fit block mx-auto">
        Area 1
      </h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cardData.map((card, index) => (
          <div key={index} className={`partner-card-${index}`}>
            <OurPartnersCard data={card} />
          </div>
        ))}
      </div>
      <h1 className="text-center mt-5 font-semibold bg-primary px-2 py-1 text-white rounded-md w-fit block mx-auto">Area 2</h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cardData.map((card, index) => (
          <div key={index} className={`partner-card-area-2-${index}`}>
            <OurPartnersCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPartners
