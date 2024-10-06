import GeneralInformation from "@/components/GeneralInformation";
import HowToCultivate from "@/components/HowToCultivate";
import IntroductoryContent from "@/components/IntroductoryContent";

export default function Home() {
  return (
    <main>
      <IntroductoryContent />
      <GeneralInformation />
      <HowToCultivate />
    </main>
  );
}
