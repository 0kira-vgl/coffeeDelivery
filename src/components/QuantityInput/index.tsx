import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <div className="flex-1 bg-base-button flex items-center justify-between gap-1 rounded-md p-2">
      <button
        className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple transition-[0.2s] disabled:opacity-40 disabled:hover:text-brand-purple-dark"
        type="button"
      >
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        readOnly
        value={1}
        className="text-center w-full bg-base-button border-none text-base-title focus:outline-none"
      />
      <button
        className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple transition-[0.2s] disabled:opacity-40 disabled:hover:text-brand-purple-dark"
        type="button"
      >
        <Plus size={14} weight="fill" />
      </button>
    </div>
  );
}
