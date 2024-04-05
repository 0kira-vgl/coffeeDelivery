import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";
import { formatMoney } from "../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface coffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: coffeeProps) {
  const formattedPrice = formatMoney(coffee.price);

  return (
    <div className="w-full bg-base-card rounded-[6px_36px_6px_36px] p-5 flex items-center flex-col justify-center pt-0 text-center">
      <img
        src={`/coffees/${coffee.photo}`}
        alt="Imagem ilustrando o café"
        className="w-[7.5rem] h-[7.5rem] -mt-5"
      />

      <div className="w-full flex items-center justify-center gap-1 mt-4 mb-5 flex-wrap">
        {coffee.tags.map((tag) => (
          <span
            key={`${coffee.id}${tag}`}
            className="bg-brand-yellow-light text-brand-yellow-dark text-[0.625rem] uppercase font-bold px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-base-subtitle text-[1.2rem] font-bold leading-[130%] mb-2">
        {coffee.name}
      </h1>

      <p className="text-base-label text-[0.875rem] leading-[130%] mb-8">
        {coffee.description}
      </p>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-[3px]">
          <h2 className="text-base-subtitle text-[0.875rem] leading-[.75rem]">
            R$
          </h2>
          <h2 className="text-base-text text-[1.5rem] leading-[.75rem] font-bold">
            {formattedPrice}
          </h2>
        </div>

        <div className="w-[7.5rem] flex">
          <QuantityInput />
          <button className="w-[2.375rem] h-[2.375rem] border-none flex items-center justify-center bg-brand-purple-dark text-base-card rounded-md ml-[0.3rem] transition-[0.2s] hover:bg-brand-purple">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
