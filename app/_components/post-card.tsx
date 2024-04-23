import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DateTime } from "./date-time"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
  coverImage: string
}

export function PostCard(props: Props) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>{props.title}</CardTitle>
        <img src={props.coverImage}  width="250" height="250" className="object-center"></img>
        <CardDescription>
          <DateTime text={props.date} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">{props.excerpt}</p>
      </CardContent>
    </Card>
  )
}
