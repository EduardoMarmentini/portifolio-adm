import { Card } from "@/components/ui/card"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container mx-auto py-4 px-4 text-center">
      <p className="text-sm text-[#F1D4DC]">&copy; {currentYear} Eduardo Marmentini. Todos os direitos reservados.</p>
    </div>
  )
}

