"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import firstCekici from "@/public/cekici-1.jpeg"
import secondCekici from "@/public/cekici-2.jpeg"
import thirdCekici from "@/public/cekici-3.jpeg"
import fourthCekici from "@/public/cekici-4.jpeg"
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
      <div className="columns-2 sm:columns-2 gap-4">
        <div className="relative h-40 mb-4">
          <Image
            src={firstCekici}
            className="rounded-lg object-cover"
            alt="Çekici fotoğrafı"
            sizes="(max-width: 768px) 213px, 50vw"
            priority
            fill
          />
        </div>
        <div className="relative h-80">
          <Image
            src={thirdCekici}
            className="rounded-lg object-cover"
            alt="Çekici fotoğrafı"
            sizes="(max-width: 768px) 213px, 50vw"
            priority
            fill
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            src={secondCekici}
            className="rounded-lg object-cover"
            alt="Çekici fotoğrafı"
            sizes="(max-width: 768px) 213px, 50vw"
            priority
            fill
          />
        </div>

        <div className="relative h-80">
          <Image
            src={fourthCekici}
            className="rounded-lg object-cover"
            alt="Çekici fotoğrafı"
            sizes="(max-width: 768px) 213px, 50vw"
            priority
            fill
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>İletişim</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            İsim: <span className="font-semibold">Azat Şeker</span>
          </p>
          <p>
            Telefon:{" "}
            <a href={siteConfig.links.phone} className="font-semibold">
              0541 879 14 72
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={siteConfig.links.mail} className="font-semibold">
              sekerazat7241@gmail.com
            </a>
          </p>
          <p>
            Adres: <span className="font-semibold">Adres</span>
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
