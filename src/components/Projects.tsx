import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Projetos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Plano de Negócios Sustentável</h3>
          <p className="text-[#4D1C2C] mt-1">
            Desenvolvimento de um plano de negócios para uma startup de produtos ecológicos, incluindo análise de
            mercado, estratégias de marketing e projeções financeiras.
          </p>
          <div className="mt-2">
            <Badge className="bg-[#F1D4DC] text-[#6D273D]">Empreendedorismo</Badge>
            <Badge className="ml-2 bg-[#F1D4DC] text-[#6D273D]">Sustentabilidade</Badge>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Otimização de Processos Logísticos</h3>
          <p className="text-[#4D1C2C] mt-1">
            Projeto de consultoria para uma empresa de e-commerce, focando na otimização da cadeia de suprimentos e
            redução de custos operacionais.
          </p>
          <div className="mt-2">
            <Badge className="bg-[#F1D4DC] text-[#6D273D]">Logística</Badge>
            <Badge className="ml-2 bg-[#F1D4DC] text-[#6D273D]">Gestão de Operações</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

