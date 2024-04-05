import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import IntroBackground from "../../../assets/Background.png";
import IntroImg from "../../../assets/IntroImg.png";
import { InfoWithIcon } from "../../../components/InfoWithIcon";

export function Intro() {
  return (
    <section className="flex items-center justify-center relative w-full h-[34rem] bg-gradient-to-b via-base-background to-base-background">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${IntroBackground})` }}
      />

      <div className="flex items-center justify-between gap-14 w-full max-w-[70rem] mx-auto">
        <div>
          <section>
            <h1 className="text-base-title text-5xl font-extrabold leading-[130%]">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base-text text-3xl font-normal leading-[130%]">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </section>

          <div className="w-full grid grid-cols-2 gap-y-5 mt-[4.125rem]">
            <InfoWithIcon
              bgIcon="bg-brand-yellow-dark"
              icon={<ShoppingCart weight="fill" />}
              text={"Compra simples e segura"}
            />
            <InfoWithIcon
              bgIcon="bg-base-text"
              icon={<Package weight="fill" />}
              text={"Embalagem mantém o café intacto"}
            />
            <InfoWithIcon
              bgIcon="bg-brand-yellow"
              icon={<Timer weight="fill" />}
              text={"Entrega rápida e rastreada"}
            />
            <InfoWithIcon
              bgIcon="bg-brand-purple"
              icon={<Coffee weight="fill" />}
              text={"O café chega fresquinho até você"}
            />
          </div>
        </div>

        <img src={IntroImg} alt="Imagem ilustrativa do Coffee Delivery" />
      </div>
    </section>
  );
}
