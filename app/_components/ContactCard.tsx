import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string
}) => {
  const CardContent = (
    <Card className="p-3 glass glass-hover transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10">
          <Image
            src={props.image}
            alt={props.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-contain"
          />
          <Image
            src={props.mediumImage}
            alt={props.name}
            width={16}
            height={16}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold truncate">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="text-primary hover:text-primary-foreground hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
          size={16}
        />
      </div>
    </Card>
  );

  if (props.url) {
    return <a href={props.url} className={cn("w-full", props.className)} target="_blank" rel="noopener noreferrer">{CardContent}</a>;
  }

  return CardContent;
};

// export const ContactCard = (props: ContactCardProps) => {
//   const CardContent = (
   
//   );

//   if (props.url) {
//     return <a href={props.url} target="_blank" rel="noopener noreferrer">{CardContent}</a>;
//   }

//   return CardContent;
// };