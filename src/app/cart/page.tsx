import { getCart } from "@/lib/db/cart";
import formatPrice from "@/lib/formatPrice";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import Link from "next/link";

export const metadata = {
  title: "Seu Carrinho - Mitsuko",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Carrinho</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="flex flex-col items-end sm:items-center">
          <p className="mb-3 font-bold">
            Total: {formatPrice(cart?.subtotal || 0)}
          </p>
          <button className="btn-primary btn sm:w-[200px]">Checkout</button>
          {/* <Link
          href={"/products/" + cart?.subtotal}
          className="btn-primary btn sm:w-[200px]"
        >
          Checkout
        </Link> */}
        </div>
      )}
    </div>
  );
}
