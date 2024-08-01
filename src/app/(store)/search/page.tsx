import Image from 'next/image'
import Link from 'next/link'
// import style from 'styled-jsx/style'

export default async function Search(props: any) {

console.log(props)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultado para: <span className="font-semibold">moletom</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Link
          // key={product.id}
          href="/product/moletom-never-stop-learning"
          className=" relative group flex item-end justify-center rounded-lg bg-zinc-900 overflow-hidden"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          // key={product.id}
          href="/product/moletom-never-stop-learning"
          className=" relative group flex item-end justify-center rounded-lg bg-zinc-900 overflow-hidden"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          // key={product.id}
          href="/product/moletom-never-stop-learning"
          className=" relative group flex item-end justify-center rounded-lg bg-zinc-900 overflow-hidden"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
