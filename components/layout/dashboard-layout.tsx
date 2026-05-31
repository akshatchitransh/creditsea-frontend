"use client";

import Link from "next/link";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    label: "Loans",
    href: "/dashboard/loans",
  },

  {
    label: "Collections",
    href: "/dashboard/collections",
  },

  {
    label: "Analytics",
    href: "/dashboard/analytics",
  },
];

export default function DashboardLayout({
  children,
}: Props) {

  const router = useRouter();

  const pathname = usePathname();

  const handleLogout = () => {

    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex bg-[#020817]">

      {/* SIDEBAR */}
      <aside
        className="
          hidden
          md:flex
          w-72
          bg-[#081120]
          border-r
          border-white/10
          p-6
          flex-col
          justify-between
        "
      >

        <div>

          {/* LOGO */}
          <div className="mb-12">

            <h1
              className="
                text-5xl
                font-black
                text-cyan-400
              "
            >
              CreditSea
            </h1>

          </div>

          {/* NAV */}
          <div className="space-y-3">

            {navItems.map((item) => {

              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    h-12
                    rounded-2xl
                    px-5
                    flex
                    items-center
                    transition-all
                    text-lg
                    ${
                      isActive
                        ? `
                          bg-cyan-400/10
                          text-cyan-400
                          border
                          border-cyan-400/20
                        `
                        : `
                          text-slate-300
                          hover:bg-white/5
                        `
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

          </div>

        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
            h-12
            rounded-2xl
            bg-red-500
            text-white
            font-semibold
            hover:bg-red-400
            transition-all
          "
        >
          Logout
        </button>

      </aside>

      {/* MAIN */}
      <main
        className="
          flex-1
          p-6
          md:p-10
          overflow-auto
        "
      >
        {children}
      </main>

    </div>
  );
}