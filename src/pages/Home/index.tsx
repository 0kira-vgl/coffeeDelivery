import { Intro } from "../components/Intro";
import { OurCoffees } from "../components/OurCoffees";

export function HomePage() {
  return (
    <div className="mb-[9.8rem]">
      <Intro />
      <OurCoffees />
    </div>
  );
}
