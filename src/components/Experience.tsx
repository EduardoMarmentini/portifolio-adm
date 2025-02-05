import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-[#6D273D]">
      <CardHeader className="bg-[#6D273D] text-white">
        <CardTitle className="text-2xl font-semibold">Experiência</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
      <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Contabilista</h3>
          <p className="text-[#4D1C2C]">Santos Contabilidade - </p>
          <p className="text-[#6D273D]">2023 - Presente</p>
          <ul className="list-disc list-inside text-[#2D111A] mt-2">
            <li>Responsável pela escrituração fiscal, apuração de impostos (PIS/COFINS, ICMS, DAS)</li>
            <li>Elaboração de obrigações acessórias</li>
            <li>Atuando na conciliação e analise contábil</li>
            <li>Controle de tributos e cálculos de folha de pagamento, incluindo encargos trabalhistas e benefícios</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">Estágio</h3>
          <p className="text-[#4D1C2C]">ACIME - Associação Comercial Empresarial de Medianeira</p>
          <p className="text-[#6D273D]">2023</p>
          <ul className="list-disc list-inside text-[#2D111A] mt-2">
            <li>Organização e arquivamento de documentos administrativos.</li>
            <li>Auxílio nas tarefas diárias das demais áreas da empresa</li>
            <li>Elaboração de contratos de associação</li>
            <li>Atendimento na recepção, com apoio a clientes e associados</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2D111A]">ACS - Agente censitário supervisor</h3>
          <p className="text-[#4D1C2C]">IBGE - Fundação Instituto Brasileiro de Geografia e Estatística</p>
          <p className="text-[#6D273D]">2022</p>
          <ul className="list-disc list-inside text-[#2D111A] mt-2">
            <li>Responsável pelo treinamento dos recenseadores, instruindo sobre o preenchimento correto dos questionários</li>
            <li>Supervisão de recenseadores, garantindo o bom andamento da coleta de dados</li>
            <li>Prestação de suporte durante a coleta de dados, solucionando dúvidas e assegurando a precisão das informações</li>
            <li>Mapeamento e preparação das áreas de pesquisa</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

