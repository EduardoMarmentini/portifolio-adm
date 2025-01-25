import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Experiência</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Estágio em Gestão de Projetos</h3>
          <p className="text-[#4D1C2C]">TechInova Ltda.</p>
          <p className="text-[#6D273D]">Jun 2023 - Presente</p>
          <ul className="list-disc list-inside text-[#2D111A] mt-2">
            <li>Auxiliar no planejamento e execução de projetos de transformação digital</li>
            <li>Desenvolver análises de mercado e relatórios de desempenho</li>
            <li>Participar de reuniões com stakeholders e apresentar resultados</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Voluntária em Educação Financeira</h3>
          <p className="text-[#4D1C2C]">ONG Futuro Financeiro</p>
          <p className="text-[#6D273D]">Jan 2022 - Presente</p>
          <ul className="list-disc list-inside text-[#2D111A] mt-2">
            <li>Ministrar workshops de educação financeira para jovens de comunidades carentes</li>
            <li>Desenvolver material didático sobre orçamento pessoal e investimentos</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

