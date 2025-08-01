import { BlurFade } from "@/components/BlurFade";
import InfoBand from "@/components/InfoBand";
import LanguageSwitch from "@/components/LanguageSwitch";
import { Particles } from "@/components/Particules";
import TitleBox from "@/components/TitleBox";

export default function Home() {
  return (
    <>
      <div className="min-h-svh w-full flex flex-col gap-y-4 items-center pb-22">
        <div className="flex flex-col gap-y-5 w-full mt-2">
          <BlurFade className="w-full">
            <InfoBand className="mt-4" />
          </BlurFade>
          <BlurFade className="w-full flex justify-end">
            <LanguageSwitch />
          </BlurFade>
        </div>
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
