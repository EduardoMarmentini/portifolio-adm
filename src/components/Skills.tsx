import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Skill = {
  name: string
  description: string
}

export function Skills() {
  const softSkills: Skill[] = [
    {
      name: " - Liderança",
      description: "Capacidade de motivar e guiar equipes, promovendo um ambiente colaborativo e produtivo.",
    },
    {
      name: " - Comunicação efetiva",
      description: "Habilidade de transmitir ideias de forma clara e persuasiva, tanto oralmente quanto por escrito.",
    },
    {
      name: " - Resolução de problemas",
      description: "Aptidão para analisar situações complexas e desenvolver soluções criativas e eficazes.",
    },
    {
      name: " - Adptabilidade",
      description: "Flexibilidade para se ajustar rapidamente a novas situações e ambientes de trabalho dinâmicos.",
    },
    {
      name: " - Inteligência emocional",
      description:
        "Capacidade de reconhecer e gerenciar emoções próprias e alheias, promovendo relações interpessoais positivas.",
    },
  ]

  const hardSkills: Skill[] = [
    {
      name: " - Gestão de Projetos",
      description:
      "Experiência em planejamento, execução e monitoramento de projetos usando metodologias ágeis e tradicionais.",
    },
    {
      name: " - Processo Contábeis",
      description:
        "Experiência em análise e organização de processos fiscais e contábeis, gestão de informações financeiras com foco em conformidade e precisão, além de conciliação de dados e gerenciamento eficiente de múltiplas demandas.",
    },
    {
      name: " - Análise Financeira",
      description:
        "Competência em interpretar demonstrações financeiras, realizar projeções e avaliar a viabilidade de investimentos.",
    },
    {
      name: " - Pacote Office Avançado",
      description:
        "Domínio de ferramentas como Excel, PowerPoint e Word para análise de dados e apresentações executivas.",
    },
    {
      name: " - Espanhol Intermediario",
      description: "Capacidade para manter um dialogo, e redigir pequenos relatórios no idioma.",
    },
  ]

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Habilidades</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#2D111A] mb-3">Soft Skills</h3>
            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li key={skill.name}>
                  <h4 className="text-lg font-medium text-[#6D273D]">{skill.name}</h4>
                  <p className="text-[#4D1C2C] mt-1">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#2D111A] mb-3">Hard Skills</h3>
            <ul className="space-y-3">
              {hardSkills.map((skill) => (
                <li key={skill.name}>
                  <h4 className="text-lg font-medium text-[#6D273D]">{skill.name}</h4>
                  <p className="text-[#4D1C2C] mt-1">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

