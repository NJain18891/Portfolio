import Image from "next/image";

export default function NexoraWordmark() {
  return (
    <Image
      src="/wordmark.png"
      alt="Nexora — The Central Creative Nexus"
      width={3400}
      height={750}
      priority
      draggable={false}
      className="
        h-auto
        w-[220px]
        sm:w-[280px]
        lg:w-[340px]
        select-none
        pointer-events-none
      "
    />
  );
}