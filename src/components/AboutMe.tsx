import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutMe() {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Sobre Mim</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-[#2D111A] leading-relaxed">
          Sou Debora Bonordt, uma apaixonada estudante de Administração com foco em gestão estratégica e inovação
          empresarial. Atualmente cursando o 5º periodo na Faculdade Uniguaçu, busco constantemente aplicar os
          conhecimentos teóricos em projetos práticos e desafiadores.
        </p>
        <p className="text-[#2D111A] leading-relaxed mt-4">
          Minha jornada acadêmica tem sido marcada por um profundo interesse em sustentabilidade corporativa e
          transformação digital. Participei ativamente de projetos de extensão voltados para o empreendedorismo social,
          onde pude desenvolver habilidades de liderança e trabalho em equipe.
        </p>
        <p className="text-[#2D111A] leading-relaxed mt-4">
          Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Meu objetivo é me
          tornar uma gestora capaz de liderar equipes diversas e impulsionar mudanças positivas nas organizações.
        </p>
      </CardContent>
    </Card>
  )
}