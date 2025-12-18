import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { DisclaimerModal } from "../components/DisclaimerModal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const SiteLayout: React.FC = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
    </div>
  );
};
