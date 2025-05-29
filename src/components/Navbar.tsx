import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-slate-900 dark:text-white">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition"
              }
            >
              Contact
            </NavLink>
            <ModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "font-medium text-primary"
                    : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "font-medium text-primary"
                    : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "font-medium text-primary"
                    : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "font-medium text-primary"
                    : "font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;