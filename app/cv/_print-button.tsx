"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    const ok = window.confirm(
      "Dans la boîte d'impression :\n→ Décochez « En-têtes et pieds de page »\n→ Sélectionnez « Enregistrer en PDF »\n\nCliquez OK pour ouvrir l'impression."
    );
    if (ok) window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-black hover:bg-purple-700 transition-colors shadow-lg"
    >
      <Download size={15} />
      Télécharger en PDF
    </button>
  );
}
