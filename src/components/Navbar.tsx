import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/cyberLogo.svg";
import CTAIcon from '../assets/images/Cta-icon.svg'
interface NavLinkProps {
  href: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { href: "/", label: "HOME" },
  { href: "/plans", label: "PLANS" },
  { href: "/consultation", label: "CONSULTATION" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const NavLink = ({ href, label }: NavLinkProps) => {
    const isActive = pathname === href;

    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={href}
          className={`transition-colors relative
            ${
              isActive
                ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                : "text-[#41A370] hover:text-primary"
            }`}
        >
          {label}
        </Link>
      </motion.div>
    );
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md px-4 py-4 fixed w-full top-0 z-50 rounded-b-[32px] border-b border-primary/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src={Logo} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="button-glow flex items-center space-x-2 bg-transparent border border-primary text-white px-6 py-2 rounded-full hover:bg-primary/10 transition-colors">
            <img src={CTAIcon}/>
              <span>ORDER YOUR REPORT NOW</span>
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4 bg-background/95 p-4 rounded-lg glass-effect"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
            <button 
            className="w-full flex items-center justify-center space-x-2 bg-transparent 
            border border-primary text-white px-4 py-2 rounded-full
              
             hover:bg-primary/10 transition-colors button-glow
           
             
             ">
                 <img src={CTAIcon}/>
              <span>ORDER YOUR REPORT NOW</span>
             
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
