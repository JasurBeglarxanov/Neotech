import Advantages from "./ui/advatanges";
import Hero from "./ui/hero";
import Solutions from "./ui/solutions";
import TextUs from "./ui/text-us";
import WeCreate from "./ui/we-create";

function Main({darkMode}) {
  return (
    <div>
      <Hero />
      <Solutions darkMode={darkMode} />
      <WeCreate  darkMode={darkMode}/>
      <Advantages darkMode={darkMode} />
      <TextUs />
    </div>
  );
}

export default Main;
