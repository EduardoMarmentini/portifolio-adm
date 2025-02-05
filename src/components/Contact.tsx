'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Contato</CardTitle>
      </CardHeader>
      <CardContent className="mt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-[#6D273D]" />
            <span className="text-[#2D111A]">R. Amazonas, 3957 - Medianeira, PR</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-[#6D273D]" />
            <span className="text-[#2D111A]">(45) 99851-9017</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-[#6D273D]" />
            <span className="text-[#2D111A]">deboracristinabonordt@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="h-5 w-5 text-[#6D273D]" />
            <span className="text-[#2D111A]">https://www.linkedin.com/in/deborabonordt/</span>
          </div>
          <div className="flex items-center space-x-3">
            <Instagram className="h-5 w-5 text-[#6D273D]" />
            <span className="text-[#2D111A]">@deborabonordt</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.location.href = "mailto:deboracristinabonordt@gmail.com"}
              className="bg-white hover:bg-[#F1D4DC] text-[#6D273D] border-[#6D273D]"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/deborabonordt/"
              >
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-[#F1D4DC] text-[#6D273D] border-[#6D273D]"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </ Link>
            <Link 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/deborabonordt/"
            >
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-[#F1D4DC] text-[#6D273D] border-[#6D273D]"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </ Link>
        </div>
      </CardContent>
    </Card>
  )
}