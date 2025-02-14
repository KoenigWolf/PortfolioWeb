'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-primary/80 transition-colors"
            aria-label="Home"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Avatar */}
          <div className="hidden md:flex items-center ml-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" alt="User avatar" />
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/avatar.png" alt="User avatar" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                </div>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-2 text-sm rounded-md transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}