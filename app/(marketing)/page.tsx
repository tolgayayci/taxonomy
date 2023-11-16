import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link> */}
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl md:font-extralight lg:text-[270px]">
            YK LABS
          </h1>
          <p className="my-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We provide apps for your blockchain ecosystems.
          </p>
          <div className="space-x-4">
            <Link
              href="https://calendly.com/yklabs-mert/30min"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Contact Us
            </Link>
            {/* <Link
              href="https://calendly.com/yklabs-mert/30min"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Us
            </Link> */}
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We have a range diversity of blockchain projects that works on many
            protocols. You can see the list below.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[310px]  flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Flowana</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Flowana is a protocol aggregator platform that delivers
                  various insights and metrics to track the activities and
                  development of the blockchain ecosystems.
                </p>
                <Link
                  href="https://flowana.app"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[310px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Awesome</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Awesome is a project showcase and management platform for
                  discovering and exploring the most exciting projects across
                  the blockchain ecosystems.
                </p>
                <Link
                  href="https://dev.awesomeaave.org"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[290px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">DFX GUI App</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  A cross-platform native application that provides a graphical
                  abstraction of key dfx cli capabilities.
                </p>
                <Link href="" className={cn(buttonVariants({ size: "lg" }))}>
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[290px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Aave QL</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  AaveQL is an education platform that provides Aave graphql
                  documentation with built-in editor and ready-to-try examples.
                </p>
                <Link
                  href="https://aaveql.org"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[270px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Solana Analytics</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Solana Analytics Application. Currently in private
                  development.
                </p>
                <Link href="" className={cn(buttonVariants({ size: "lg" }))}>
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Peer CLI</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Swiss Army knife for the IPFS that can be used to
                  upload/retrieve files to/from IPFS, navigate in MFS as well as
                  peer-to-peer chat with webrtc-star.
                </p>
                <Link
                  href="https://www.npmjs.com/package/peer-cli"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[270px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Sia Alert Bot</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Telegram bot to forward urgent Sia Renterd and Hostd alerts to
                  the Telegram.
                </p>
                <Link
                  href="https://github.com/justmert/sia-telegram-alert-bot"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[270px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Dotly</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Telegram bot to forward urgent Sia Renterd and Hostd alerts to
                  the Telegram.
                </p>
                <Link
                  href="https://dotly.net"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[270px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Aave API Telegram Bot</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  Telegram bot to get Aave data from the Aave API.
                </p>
                <Link
                  href="http://t.me/aave_api_bot"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6 md:h-[270px]">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Slack-IPFS Integration</h3>
                <p className="pb-4 text-sm text-muted-foreground">
                  The integration allows you to simply upload/view files to/from
                  IPFS via web3.storage on Slack
                </p>
                <Link
                  href="https://github.com/tolgayayci/slack-ipfs-app"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section> */}
    </>
  )
}
