import logo from "@/assets/logo.png";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl">
        <div className="navbar-start min-w-[300px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/care" className="btn-ghost btn flex flex-col">
                  Cuidados com a sua vela
                </Link>
              </li>
              <li>
                <Link href="/about" className="btn-ghost btn flex flex-col">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            {/* <Image src={logo} height={40} width={40} alt="Mitsuko logo" /> */}
            <span className="font-light">光子</span>
            Mitsuko
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/care" className="btn-ghost btn flex flex-col">
                Cuidados com a sua vela
              </Link>
            </li>
            <li>
              <Link href="/about" className="btn-ghost btn flex flex-col">
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Pesquisar"
                className="input-bordered input w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}
