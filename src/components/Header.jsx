import { Moon, Sun } from "lucide-react";
import brandIcon from "../assets/brandIcon.png";

const Header = ({ theme, onToggle }) => {
  return (
    <header className="w-full flex flex-col items-center text-center gap-2 md:gap-3 md:items-start md:text-left md:py-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sky-600/10 ring-1 ring-sky-500/20 p-2 dark:bg-sky-500/10 dark:ring-sky-400/30">
          <img
            src={brandIcon}
            alt="brandIcon"
            className="size-10 sm:size-12 md:size-14"
          />
        </div>
          <div>
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-100">
              Split Ease
            </h1>
            <p className="text-slate-600 text-sm sm:text-base dark:text-slate-400">
              Split expenses effortlessly
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <>
              <Sun className="h-4 w-4" />
              Light
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              Dark
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
