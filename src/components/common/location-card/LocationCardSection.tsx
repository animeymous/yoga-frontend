import { MapPin } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export function LocationCard({ locationName, address }: { locationName: string; address: string }) {
  return (
    <Card className="shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2 flex flex-row items-center gap-3">
        <MapPin className="text-primary w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-800">{locationName}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm leading-relaxed">{address}</p>
      </CardContent>
    </Card>
  )
}
