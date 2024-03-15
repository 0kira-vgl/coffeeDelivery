import { ReactNode } from "react";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  bgIcon?: string; // Adicionando uma propriedade opcional para a classe de fundo
}

export function InfoWithIcon({ icon, text, bgIcon }: InfoWithIconProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-[50%] text-base-white flex items-center justify-center ${bgIcon}`}
      >
        {icon}
      </div>
      {typeof text === "string" ? <p>{text}</p> : text}
    </div>
  );
}
