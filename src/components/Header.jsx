import brandIcon from "../assets/brandIcon.png";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center text-center gap-2 md:gap-3 md:items-start md:text-left md:py-4">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-sky-600/10 ring-1 ring-sky-500/20 p-2">
          <img
            src={brandIcon}
            alt="brandIcon"
            className="size-10 sm:size-12 md:size-14"
          />
        </div>
        <div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900">
            Split Ease
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Split expenses effortlessly
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
