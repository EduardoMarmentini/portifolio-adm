import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Educação</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Bacharelado em Administração</h3>
          <p className="text-[#4D1C2C]">Faculdade Uniguaçu</p>
          <p className="text-[#6D273D]">2023 - 2026</p>
          <div className="mt-2">
            <Badge variant="secondary" className="bg-[#F1D4DC] text-[#6D273D]">
              Gestão Estratégica
            </Badge>
            <Badge variant="secondary" className="ml-2 bg-[#F1D4DC] text-[#6D273D]">
              Inovação Empresarial
            </Badge>
            <Badge variant="secondary" className="ml-2 bg-[#F1D4DC] text-[#6D273D]">
              Gestão de RH
            </Badge>
            <Badge variant="secondary" className="ml-2 bg-[#F1D4DC] text-[#6D273D]">
              Visão Empresarial
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Ensino Médio</h3>
          <p className="text-[#4D1C2C]">Colégio Civico Militar Tancredo Neves</p>
          <p className="text-[#6D273D]">2019 - 2021</p>
        </div>
      </CardContent>
    </Card>
  )
}

