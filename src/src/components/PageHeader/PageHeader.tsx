import React from "react";

export interface PageHeaderProps {
  text: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
  return (
    <div>
      <div className="text-5xl font-bold underline">{text}</div>
      <p className="underline">Test</p>
    </div>
  );
};
