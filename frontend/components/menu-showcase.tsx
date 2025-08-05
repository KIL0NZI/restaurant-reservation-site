"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  isPopular?: boolean
  isNew?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Atlantic Salmon",
    description: "Fresh salmon with lemon herb butter, seasonal vegetables, and wild rice",
    price: '3,200',
    category: "mains",
    image: "/salmon.jpg",
    isPopular: true,
  },
  {
    id: 2,
    name: "Truffle Risotto",
    description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
    price: '1,950',
    category: "mains",
    image: "/risotto.jpg",
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    description: "Prime cut steak with red wine reduction and roasted fingerling potatoes",
    price: '2,450',
    category: "mains",
    image: "/steak.jpg",
  },
  {
    id: 4,
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
    price: '1,800',
    category: "appetizers",
    image: "/burrata caprese.jpg",
    isNew: true,
  },
  {
    id: 5,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: '1,400',
    category: "desserts",
    image: "/chocolate.jpg",
    isPopular: true,
  },
  {
    id: 6,
    name: "Pan-Seared Scallops",
    description: "Diver scallops with cauliflower purée and pancetta",
    price: '2,400',
    category: "appetizers",
    image: "/scallops.jpg",
  },
]

const categories = [
  { id: "all", name: "All Items" },
  { id: "appetizers", name: "Appetizers" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
]

export function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-2">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300"
                style={{
                  transform: hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {item.isPopular && <Badge className="bg-orange-600 hover:bg-orange-700">Popular</Badge>}
                {item.isNew && <Badge variant="secondary">New</Badge>}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="font-bold text-orange-600">KES {item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
