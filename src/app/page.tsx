import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B21B6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold">
              <span className="text-[#4C1D95]">Work</span>
              <span className="text-[#F59E0B]">hive</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-12 text-lg font-medium text-gray-600 lg:flex">
            <Link href="#" className="hover:text-[#4C1D95]">
              Find Talent
            </Link>

            <Link href="#" className="hover:text-[#4C1D95]">
              Find Work
            </Link>

            <Link href="#" className="hover:text-[#4C1D95]">
              Why Workhive
            </Link>

            <Link href="#" className="hover:text-[#4C1D95]">
              Enterprise
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="#"
              className="font-semibold text-[#4C1D95] hover:text-[#6D28D9]"
            >
              Sign in
            </Link>

            <button className="rounded-2xl bg-[#4C1D95] px-7 py-3 font-semibold text-white transition hover:bg-[#5B21B6]">
              Join free
            </button>
          </div>

          {/* Mobile */}
          <button
            // onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {/* <Menu size={30} /> */}
          </button>
        </div>
{/* 
        {open && (
          <div className="border-t bg-white lg:hidden">
            <nav className="flex flex-col gap-5 p-6 font-medium text-gray-700">
              <Link href="#">Find Talent</Link>
              <Link href="#">Find Work</Link>
              <Link href="#">Why Workhive</Link>
              <Link href="#">Enterprise</Link>

              <hr />

              <Link href="#">Sign in</Link>

              <button className="rounded-xl bg-[#4C1D95] py-3 text-white">
                Join free
              </button>
            </nav>
          </div>
        )} */}
      </header>
    </>
  );
}
