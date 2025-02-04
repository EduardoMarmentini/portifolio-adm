
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Header() {
  return (
    <Card className="bg-white text-[#2D111A] shadow-xl overflow-hidden rounded-xl border border-[#6D273D]">
      <CardHeader className="text-center relative z-10 bg-[#6D273D] text-white">
          <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white">
            <AvatarImage src="?height=128&width=128" alt="Debora Bonordt" />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
        <CardTitle className="text-3xl font-bold">Debora Bonordt</CardTitle>
        <p className="text-xl text-[#F1D4DC]">Academica de Administração</p>
      </CardHeader>
    </Card>
  )
}

