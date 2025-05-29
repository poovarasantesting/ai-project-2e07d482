import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-1 mt-2 md:mt-0 text-sm text-slate-600 dark:text-slate-400">
            Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Me
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;