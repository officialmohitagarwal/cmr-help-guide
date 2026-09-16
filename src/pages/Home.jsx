import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";

export default function Home({ onSearchClick }) {
  return (
    <div className="min-w-0 flex-1">
      <Hero onSearchClick={onSearchClick} />

      <CategoryGrid />
    </div>
  );
}