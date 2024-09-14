import HomeBanner from "./pages/home/HomeBanner";
import HomeHero from "./pages/home/HomeHero";
import HomeBlog from "./pages/home/HomeBlog";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <main className="flex flex-col items-center space-y-2 relative">
        <HomeHero />
        <HomeBanner />
        <HomeBlog />
      </main>
    </div>
  );
}
