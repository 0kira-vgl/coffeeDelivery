import CoffeeDeliveryLogo from "../../assets/Logo.svg";
import "../../layouts/DefaultLayout/style.css";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full h-[6.5rem] bg-base-background flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <img src={CoffeeDeliveryLogo} alt="Logo do Coffee Delivery" />

        <div className="flex items-center gap-3">
          <button className="hover:bg-[#dcd6e6] duration-100 bg-brand-purple-light text-brand-purple-dark flex text-sm items-center justify-center gap-1 min-w-[2.3rem] h-[2.3rem] px-2 py-0 rounded-md relative">
            <MapPin className="text-brand-purple" size={20} weight="fill" />
            Porto Alegre, RS
          </button>
          <button className="hover:bg-[#eecd94] duration-100 bg-brand-yellow-light text-brand-yellow-dark flex text-sm items-center justify-center gap-1 min-w-[2.3rem] h-[2.3rem] px-2 py-0 rounded-md relative">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </div>
      </div>
    </header>
  );
}
