'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Wrench, Users, Briefcase } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'SOPs', href: '/sops', icon: BookOpen },
  { name: 'Tools & Apps', href: '/tools', icon: Wrench },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Projects', href: '/projects', icon: Briefcase },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-thresh-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-thresh-blue">
              Thresh
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                      isActive
                        ? 'bg-thresh-blue text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">user@threshconsulting.com</span>
            <button className="text-thresh-blue px-4 py-2 rounded-md text-sm hover:text-thresh-blue transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
