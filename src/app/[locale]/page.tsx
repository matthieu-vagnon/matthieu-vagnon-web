import { BlurFade } from "@/components/BlurFade";
import LanguageSwitch from "@/components/LanguageSwitch";
import { Particles } from "@/components/Particules";
import TitleBox from "@/components/TitleBox";

export default function Home() {
  return (
    <>
      <div className="flex-1 w-full flex flex-col gap-y-4 items-center pb-22">
        <BlurFade className="w-full flex justify-end mt-6">
          <LanguageSwitch />
        </BlurFade>
        <div className="flex-auto flex justify-center items-center">
          <BlurFade delay={0.1} className="flex">
            <TitleBox />
          </BlurFade>
        </div>
      </div>
      <Particles
        className="fixed inset-0 -z-1"
        quantity={100}
        ease={80}
        color="var(--foreground)"
        refresh
      />
    </>
  );
}
