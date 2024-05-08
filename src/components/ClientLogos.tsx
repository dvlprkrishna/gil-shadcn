import Image from "next/image";
import React from "react";

const ClientLogos = () => {
  return (
    <section className=" text-white pt-8 pb-4">
      <h2 className=" hidden text-center text-2xl mb-2 font-bold leading-8 ">
        Our Clients
      </h2>
      <p className="text-center text-[#d4beff] text-xl font-[500] leading-8 ">
        500 + organisations trust our exceptional expertise. <br /> Join us
        today!
      </p>{" "}
      <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="SavvyCal"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
            alt="SavvyCal"
          />
        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="SavvyCal"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
            alt="SavvyCal"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
