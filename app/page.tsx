"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import cekiciImg from "@/public/cekici.webp"
import TextTransition, { presets } from "react-text-transition"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Icons } from "../components/icons"

export default function IndexPage() {
  const TEXTS = [
    "Hızlı",
    "Güvenilir",
    "Ekonomik",
    "Profesyonel",
    "Kullanıcı dostu",
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 text-center">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          {/* Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS. */}
          Profesyonel oto çekici hizmeti ile 7/24 yanınızdayız.
          <TextTransition
            className="justify-center text-rose-600 md:my-2"
            springConfig={presets.wobbly}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
          çözümlerle aracınızı güvende tutuyoruz.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Oto çekici hizmeti arayışınızda, tecrübeli ekibimizle 7/24 yanınızda
          olmanın gururunu yaşıyoruz. Güvenilir çekici hizmetimizle yolda kalmış
          araç çözümleri sunarak, aracınızın güvenliğini önceliğimiz kılıyoruz.
        </p>
      </div>
      <div className="flex gap-4 justify-center	">
        <Link
          href={siteConfig.links.phone}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          <Icons.phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.whatsapp}
          className={buttonVariants({ variant: "outline" })}
        >
          <Icons.whatsapp className="h-5 w-5 mr-2" />
          WhatsApp
        </Link>
        {/* <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.location}
          className={buttonVariants({ variant: "outline" })}
        >
          <Icons.location className="h-5 w-5 mr-2" />
          Konum
        </Link> */}
      </div>
      <div className="flex justify-center">
        <Image
          src={cekiciImg}
          width={500}
          height={500}
          className="rounded-md drop-shadow mt-3"
          alt="Çekici fotoğrafı"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>İletişim</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            İsim: <span className="font-semibold">İsim Soyisim</span>
          </p>
          <p>
            Telefon: <span className="font-semibold">0 555 55 55</span>
          </p>
          <p>
            Adres: <span className="font-semibold">Adres</span>
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
