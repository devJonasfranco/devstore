import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className=" group flex item-end justify-center col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ai-side.png"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/"
        className=" group flex item-end justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/"
        className=" group flex item-end justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ia-p-devs.png"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  )
}
