import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Box, Settings, PieChart, Layers } from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: { name: string; href: string }[];
}

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

const menuItems: Record<string, MenuItem[]> = {
  Functies: [
    {
      name: 'PLATFORM',
      href: '/platform',
      icon: <Box className="h-5 w-5 text-muted-foreground" />,
      subItems: [
        { name: 'Productoverzicht', href: '/platform/overview' },
        { name: 'Alle functies', href: '/platform/features' },
        { name: 'Meest recente functierelease', href: '/platform/recent' },
        { name: 'App-integraties', href: '/platform/integrations' },
      ]
    },
    {
      name: 'MOGELIJKHEDEN',
      href: '/possibilities',
      icon: <Settings className="h-5 w-5 text-muted-foreground" />,
      subItems: [
        { name: 'Projectbeheer', href: '/possibilities/project-management' },
        { name: 'Projecten', href: '/possibilities/projects' },
        { name: 'Projectweergaven', href: '/possibilities/project-views' },
        { name: 'Taken', href: '/possibilities/tasks' },
        { name: 'Aangepaste velden', href: '/possibilities/custom-fields' },
        { name: 'Statusupdates', href: '/possibilities/status-updates' },
      ]
    },
  ],
  Extra: [
    {
      name: 'ANALYTICS',
      href: '/analytics',
      icon: <PieChart className="h-5 w-5 text-muted-foreground" />,
      subItems: [
        { name: 'Dashboard', href: '/analytics/dashboard' },
        { name: 'Rapporten', href: '/analytics/reports' },
      ]
    },
    {
      name: 'DOCUMENTATIE',
      href: '/documentation',
      icon: <Layers className="h-5 w-5 text-muted-foreground" />,
      subItems: [
        { name: 'API-overzicht', href: '/documentation/api' },
        { name: 'Handleidingen', href: '/documentation/guides' },
      ]
    },
  ]
};

const plans = [
  { name: 'Personal', description: 'Voor individuen of teams die elk project willen organiseren' },
  { name: 'Starter', description: 'Voor teams die met vertrouwen projectplannen moeten maken' },
  { name: 'Advanced', description: 'Voor teams die robuuste functies nodig hebben voor projectbeheer' },
];

const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, onClose }) => {
  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 top-[7rem] bg-background shadow-lg z-40 overflow-y-auto"
          style={{ height: '65vh' }}  // Adjusted to align with the header and limit the height
        >
          <div className="container mx-auto px-4 py-8 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="md:grid md:grid-cols-4 md:gap-8">
              <div className="md:col-span-3 space-y-8">
                {menuItems[activeMenu]?.map((item) => (
                  <div key={item.name}>
                    <h3 className="font-bold text-lg mb-4 text-foreground flex items-center">
                      {item.icon} <span className="ml-2">{item.name}</span>
                    </h3>
                    <ul className="space-y-2">
                      {item.subItems?.map((subItem) => (
                        <li key={subItem.name}>
                          <Link href={subItem.href} className="text-muted-foreground hover:text-primary flex items-center">
                            {subItem.name}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-0 bg-secondary p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-secondary-foreground">ALLE ABONNEMENTEN</h3>
                {plans.map((plan) => (
                  <div key={plan.name} className="mb-4">
                    <h4 className="font-semibold text-secondary-foreground">{plan.name}</h4>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                ))}
                <Link href="/pricing" className="text-primary hover:underline">
                  Alle plannen vergelijken
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
