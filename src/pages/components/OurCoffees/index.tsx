import { coffees } from "../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";

export function OurCoffees() {
  return (
    <section className="w-full max-w-[70rem] mx-auto mt-8">
      <h1 className="text-base-subtitle text-[2rem] font-extrabold leading-[130%] mb-4">
        Nossos cafés
      </h1>

      <div className="w-full grid grid-cols-[repeat(4,1fr)] gap-x-8 gap-y-10 mt-14">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}
