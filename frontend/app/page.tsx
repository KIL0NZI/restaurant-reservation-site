import { Button } from "@/components/ui/button"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Calendar, Star, Phone, MapPin, Mail, Award, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { AnimatedCounter } from "@/components/animated-counter"
import { ReservationForm } from "@/components/reservation-form"
import { MenuShowcase } from "@/components/menu-showcase"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

const restaurantImages = [
  "/public/images/restaurant-image-1.jpg",
  "/public/images/restaurant-image-2.jpg",
  "/public/images/restaurant-image-3.jpg",
  "/public/images/restaurant-image-4.jpg",
]

export default function RestaurantLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl text-orange-600">Savoria</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#menu">
            Menu
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#reservations">
            Reservations
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit animate-pulse">
                    🔥 Now Taking Reservations
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Experience Fine Dining at <span className="text-orange-600 animate-pulse">Savoria</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Reserve your table at our award-winning restaurant. Enjoy exquisite cuisine, exceptional service,
                    and an unforgettable dining experience in the heart of the city.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#reservationform">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Make Reservation
                  </Button>
                  </Link>
                  <Link href="#menu">
                  <Button variant="outline" size="lg" className="hover:bg-orange-50 transition-colors">
                    View Menu
                  </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span>(2,847 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Open until 11 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ImageCarousel images={restaurantImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-orange-600 text-white">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={15000} suffix="+" />
                </div>
                <p className="text-orange-100">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={38} />
                </div>
                <p className="text-orange-100">Years of Excellence</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-orange-100">Awards Won</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-orange-100">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="reservations">
          <div className="w-full px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Savoria?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From seamless reservations to exceptional dining experiences, we make every moment special.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-orange-100 p-3 group-hover:bg-orange-200 transition-colors">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Easy Reservations</h3>
                  <p className="text-center text-gray-600">
                    Book your table instantly with our simple online reservation system. Choose your preferred date,
                    time, and party size.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-orange-100 p-3 group-hover:bg-orange-200 transition-colors">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Group Dining</h3>
                  <p className="text-center text-gray-600">
                    Perfect for special occasions, business dinners, or celebrations. We accommodate groups of all sizes
                    with personalized service.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-orange-100 p-3 group-hover:bg-orange-200 transition-colors">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Flexible Timing</h3>
                  <p className="text-center text-gray-600">
                    Open for lunch and dinner with extended hours on weekends. Real-time availability ensures you get
                    your preferred slot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="menu">
          <div className="w-full px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Signature Menu</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our carefully crafted dishes made with the finest ingredients and culinary expertise.
                </p>
              </div>
            </div>
            <MenuShowcase />
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="reservationform">
          <div className="w-full px-0 mx-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Reserve?</h2>
                <p className="text-gray-600 md:text-lg">
                  Secure your table at Savoria with our easy online reservation system. We'll confirm your booking
                  within minutes and send you all the details.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="h-4 w-4 text-orange-600" />
                    <span>Michelin Guide Recommended</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                    <span>98% Customer Satisfaction Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="h-4 w-4 text-orange-600" />
                    <span>Perfect for Special Occasions</span>
                  </div>
                </div>
              </div>
              <ReservationForm />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="w-full px-0 mx-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Guests Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our valued guests have to say about their experience.
                </p>
              </div>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600">
          <div className="w-full px-0 mx-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Dine With Us?</h2>
                <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your table now and experience the finest dining in the city. Available for lunch, dinner, and
                  special events.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#reservationform" scroll={true}>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Make Reservation
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-orange-600 hover:bg-white transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50"
        id="contact"
      >
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-orange-600">Savoria</h3>
              <p className="text-sm text-gray-600">Experience fine dining at its best. Reservations available daily.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+254 701256008</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span> <a href="mailto:martinkilonzi748@gmail.com" className="text-gray-600 hover:text-orange-300 transition-colors cursor-pointer"> reservations@savoria.com </a> </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hurlingham, Nairobi</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Hours</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="#menu" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Menu
                </Link>
                <Link href="#reservations" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Reservations
                </Link>
                <Link href="#about" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
                <Link href="#contact" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  )
}
