import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full px-5 pt-6 pb-5 flex flex-col gap-8">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/images/avatar.png"}
            alt={"avatar"}
            width={50}
            height={50}
          />
          <h1 className="text-[18px] text-color1 font-bold">
            Giorgi Silagadze
          </h1>
        </div>
      </div>
    </div>
  );
}
