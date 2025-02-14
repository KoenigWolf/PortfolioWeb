'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

// ナビゲーションリンクの型定義
interface NavigationLink {
  href: string
  label: string
}

// SNSリンクの型定義
interface SocialLink {
  platform: string
  icon: React.ReactNode
  href: string
  tooltip: string
}

// ナビゲーションリンクの定義
const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
]

// SNSリンクの定義
const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
    href: "https://facebook.com",
    tooltip: "Follow us on Facebook",
  },
  {
    platform: "Twitter",
    icon: <Twitter className="h-4 w-4" />,
    href: "https://twitter.com",
    tooltip: "Follow us on Twitter",
  },
  {
    platform: "Instagram",
    icon: <Instagram className="h-4 w-4" />,
    href: "https://instagram.com",
    tooltip: "Follow us on Instagram",
  },
  {
    platform: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    href: "https://linkedin.com",
    tooltip: "Connect with us on LinkedIn",
  },
]

// フッターポリシーリンクの型定義
interface PolicyLink {
  href: string
  label: string
}

// フッターポリシーリンクの定義
const policyLinks: PolicyLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Settings" },
]

// SNSリンクコンポーネント
const SocialLinkButton: React.FC<SocialLink> = ({ platform, icon, href, tooltip }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          {icon}
          <span className="sr-only">{platform}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

// ニュースレターフォームコンポーネント
const NewsletterForm: React.FC = () => (
  <form className="relative">
    <Input
      type="email"
      placeholder="Enter your email"
      className="pr-12 backdrop-blur-sm"
    />
    <Button
      type="submit"
      size="icon"
      className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
    >
      <Send className="h-4 w-4" />
      <span className="sr-only">Subscribe</span>
    </Button>
  </form>
)

// フッターメインコンポーネント
export function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ニュースレターセクション */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <NewsletterForm />
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* クイックリンクセクション */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <Button variant="link" className="h-auto w-fit p-0 text-foreground hover:text-primary">
                    {label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* コンタクト情報セクション */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>

          {/* SNSとダークモードセクション */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {socialLinks.map((social) => (
                <SocialLinkButton key={social.platform} {...social} />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* フッターボトムセクション */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4">
            {policyLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <Button variant="link" className="h-auto w-fit p-0 text-foreground hover:text-primary">
                  {label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}