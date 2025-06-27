import Hero from "./component/Hero/page";
import About from "./component/About/page";

export default function Home() {
  return (
    <div className="home overflow-hidden" suppressHydrationWarning>  
      <Hero/>
      <About/>
    </div>
  );
}
