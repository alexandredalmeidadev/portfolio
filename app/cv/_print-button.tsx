"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-black hover:bg-purple-700 transition-colors shadow-lg"
    >
      <Download size={15} />
      Télécharger en PDF
    </button>
  );
}
