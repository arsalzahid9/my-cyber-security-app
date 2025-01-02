'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { MessageSquare } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'

const pricingData = [
  {
    title: 'Basic Security Scan',
    price: '$500',
    timeframe: '2-3 business days',
    image: '/placeholder.svg?height=200&width=300',
    bestFor: 'Small businesses or website owners starting with security.',
    description: 'A quick audit to find common issues like outdated technologies, missing HTTPS, and basic misconfigurations. Perfect for identifying key risks without deep technical details.',
    features: [
      'A prioritized list of fixes (Low, Medium, High, Critical).',
      'Simple recommendations to improve security.',
    ],
    certificates: 1
  },
  {
    title: 'Compliance Ready',
    price: 'From $1,000',
    subtitle: '(depends on scope)',
    timeframe: '5-7 business days',
    image: '/placeholder.svg?height=200&width=300',
    bestFor: 'Companies needing legal or standard compliance.',
    description: 'A detailed audit designed to meet industry standards like ISO 27001, PCI DSS 4.0, or HIPAA. Tailored for businesses that need compliance for legal or customer trust reasons.',
    features: [
      'Compliance report aligned with your chosen standard.',
      'Identification of high-risk vulnerabilities.',
      'Ready-to-implement solutions.',
    ],
    certificates: 2
  },
  {
    title: 'Threat Detection',
    price: 'From $2,000',
    timeframe: '7-10 business days',
    image: '/placeholder.svg?height=200&width=300',
    bestFor: 'High-risk applications needing protection.',
    description: 'A deep dive into your application security, including XSS, CSRF, SQL Injection, etc. Focus on finding and preventing vulnerabilities.',
    features: [
      'Full threat analysis (XSS, CSRF, SQL Injection, etc.)',
      'Visual vulnerability mapping',
      'Action-oriented remediation plan',
    ],
    certificates: 3
  }
]

export default function PricingSlider() {
  const [swiper, setSwiper] = useState<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative  bg-[url('/Background.png')] bg-cover bg-center overflow-hidden border-t-4 border-t-emerald-500/50 rounded-t-2xl">
      <div className="inset-0 " />
      
      <div className="relative container  px-2 py-10">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
            }}
            className="!pb-16"
          >
            {pricingData.map((plan, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-black/20 backdrop-blur-sm rounded-3xl p-6"
                >
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl bg-[#1a3b2a]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,0,0.2),transparent_70%)]" />
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-full h-full bg-emerald-500/20 backdrop-blur-sm rotate-45" />
                    </motion.div>
                    <div className="absolute bottom-8 left-8 transform -rotate-12">
                      <div className="text-2xl font-bold text-white/90">{plan.title}</div>
                      <div className="w-12 h-1 bg-emerald-500/50 mt-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{plan.price}</div>
                      {plan.subtitle && (
                        <div className="text-sm text-white/60">{plan.subtitle}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-white/70">{plan.timeframe}</span>
                    <span className="flex-1" />
                    <div className="flex gap-1">
                      {[...Array(plan.certificates)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-emerald-500/50" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-white/80 font-medium mb-4">{plan.bestFor}</p>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="w-1 h-1 mt-1.5 bg-emerald-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-1 rounded-lg bg-black/30 text-white/70 hover:bg-black/40 transition-colors text-sm">
                      <MessageSquare className="w-4 h-4" />
                      Have a question?
                    </button>
                    <button className="flex-1  py-1 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors text-sm">
                      See report example
                    </button>
                    <button className="px-4 py-1 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors text-sm">
                      Order Now
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => swiper?.slidePrev()}
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {pricingData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiper?.slideTo(index)}
                  className={`h-0.5 transition-all ${
                    activeIndex === index ? 'w-8 bg-emerald-500' : 'w-2 bg-emerald-500/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => swiper?.slideNext()}
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

