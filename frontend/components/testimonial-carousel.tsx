"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ouma",
    role: "Food Critic",
    content:
      "Absolutely incredible experience! The reservation process was seamless, and the food exceeded all expectations. Will definitely be returning.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Mutia",
    role: "Regular Guest",
    content:
      "Perfect for our anniversary dinner. The ambiance, service, and cuisine created an unforgettable evening. Highly recommend!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Wine Enthusiast",
    content:
      "The online reservation system made booking so easy. The staff was attentive and the wine pairing was exceptional.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Otieno",
    role: "Business Executive",
    content:
      "Outstanding venue for client dinners. Professional service, exquisite food, and perfect atmosphere for business discussions.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Lisa Olang'",
    role: "Local Foodie",
    content:
      "Every dish was a masterpiece. The chef's attention to detail and creativity shines through in every bite. A true culinary gem!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-0 shadow-lg min-h-[200px]">
        <CardContent className="p-8">
          <div className="flex mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-lg text-gray-600 mb-6 italic">"{currentTestimonial.content}"</blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-50"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-50"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-600" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}
