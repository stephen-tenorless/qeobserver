import React from 'react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-cyan-500/20 max-w-md w-full animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-slate-50">Disclaimer</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200 transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              qE is a fictional company in a work of science fiction. Any resemblance
              to real entities, products, or technologies is coincidental and
              unintentional.
            </p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              The concepts, materials, and technologies described on this site are
              speculative and presented for entertainment purposes only.
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 p-6 border-t border-slate-700">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
