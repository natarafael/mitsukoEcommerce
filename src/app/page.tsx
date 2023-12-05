import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import pixLogo from "@/assets/icons8-foto-50.png";
import motoLogo from "@/assets/icons8-motocicleta-50.png";
import whatsLogo from "@/assets/icons8-whatsapp-50.png";
import bigLogo from "@/assets/biglogo.png";
interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="my-5 flex w-full flex-col items-center text-center">
          <Image
            src={bigLogo}
            alt="Logo front page"
            width={300}
            height={200}
          ></Image>
        </div>
      </div>
      {currentPage === 1 && (
        <div className="hero max-h-fit rounded-xl bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                href={"/products/" + products[0].id}
                className="btn-primary btn"
              >
                Ver produto
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="my-10 flex w-full flex-col lg:flex-row">
        <div className="card rounded-box grid h-32 flex-grow place-items-center">
          <div className="flex flex-row items-center gap-4 text-center">
            <Image
              src={pixLogo}
              alt="pix logo"
              width={50}
              height={50}
              className="h-11 w-11"
            />
            <h2 className="text-2xl font-bold">Pagamentos via PIX</h2>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid h-32 flex-grow place-items-center ">
          <div className="flex flex-row items-center gap-4 text-center">
            <Image src={motoLogo} alt="moto logo" width={50} height={50} />
            <h2 className="text-2xl font-bold">Entregas em Foz e região</h2>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid h-32 flex-grow place-items-center ">
          <a
            href="https://wa.me/5545999165279"
            target="_blank"
            className="flex flex-row items-center gap-4 text-center"
          >
            <Image src={whatsLogo} alt="moto logo" width={40} height={40} />
            <h2 className="text-2xl font-bold">Aceitamos encomendas</h2>
          </a>
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
