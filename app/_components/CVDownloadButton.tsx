import { buttonVariants } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CVDownloadButton = () => {
  return (
    <Link
      href="/CV-Alexandre-Dalmeida.pdf"
      download="CV-Alexandre-Dalmeida.pdf"
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "glass glass-hover transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 text-base font-semibold glass-glow group"
      )}
    >
      <Download size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
      Télécharger mon CV
    </Link>
  );
};