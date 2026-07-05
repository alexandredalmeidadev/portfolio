import { Download } from "lucide-react";
import Link from "next/link";

export const CVDownloadButton = () => {
  return (
    <Link
      href="/cv"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-zinc-200 text-foreground font-bold text-base hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 group"
    >
      <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
      Télécharger mon CV
    </Link>
  );
};
