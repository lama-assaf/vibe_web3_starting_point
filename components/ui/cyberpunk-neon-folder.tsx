import React from "react";
import { cn } from "@/lib/utils";

export const Component = () => {
  return (
    <div className="cyberpunk-container w-full h-screen flex items-center justify-center">
      <div className="folder-container-neon">
        <div className="doc-sheet sheet-1"></div>
        <div className="doc-sheet sheet-2"></div>
        <div className="doc-sheet sheet-3"></div>

        <div className="folder-card-neon">
          <div className="flex justify-center items-center h-full">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 folder-icon-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-xl font-semibold folder-title-neon">DATA_FILES</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
