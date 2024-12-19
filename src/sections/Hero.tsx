import robotImg from "@/assets/images/robot.jpg"
import undelineImage from "@/assets/images/underline.svg?url"
import Loader from "@/assets/images/loader.svg"
import { Button } from "@/components/Button";
import Image from "next/image";

export const Hero = () => {
  return (<section className="pb-[1000px]">
    <div className="container">
      <div className="border-l border-r border-[var(--color-border)]">
        <div className="container py-24 relative isolate">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
          <h1 className="text-4xl font-semibold text-gray-100 text-center  leading-tight">Unlock the Future of AI Conversation with{" "}
            <span className="relative">
              <span >Sphereal</span>
              <span className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                style={{ maskImage: `url(${undelineImage.src})`, maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat' }}></span>
            </span>
          </h1>
          <p className="text-center text-lg mt-8">Harness the power of AI with Sphereal. Elevate your productivity and streamline your workflow with 0our cutting-edge Ai chat platform</p>
          <div className="flex justify-center ">
            <Button variant="secondary" className="mt-10">
              Start Chatting
            </Button>
          </div>
          <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
            <Image src={robotImg} alt="Robot image" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-4">
              <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                <Loader className="text-violet-400" />
                <div className="font-semibold text-xl text-gray-100">AI is generating<span>|</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Hero;
