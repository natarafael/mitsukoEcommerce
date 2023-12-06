import bigLogo from "@/assets/biglogo.png";
import sendMessage from "@/assets/sendMessage.png";
import Image from "next/image";

const OrderPage = () => {
  return (
    <div className="flex w-full flex-col ">
      <div>
        <div className="p-4 text-center">
          <h1 className="text-5xl font-bold">Como pedir minha vela?</h1>
        </div>
        <div className="m-4 gap-4">
          <p className="p-4 text-2xl">
            Trabalhamos com velas aromáticas por encomenda.
          </p>
          <p className="p-4 text-xl">Temos no total 5 aromas diferentes:</p>
          <p className="p-4 text-xl">
            &bull; <span className="text-purple-500">Sakura Baby</span> (flor de
            cerejeira);
          </p>
          <p className="p-4 text-xl">
            &bull; <span className="text-purple-500">Bala de Baunilha</span>{" "}
            (baunilha);
          </p>
          <p className="p-4 text-xl">
            &bull; <span className="text-purple-500">Floresta de Bambu</span>{" "}
            (bambu);
          </p>
          <p className="p-4 text-xl">
            &bull; <span className="text-purple-500">Sonho de Lavanda</span>{" "}
            (lavanda);
          </p>
          <p className="p-4 text-xl">
            &bull; <span className="text-emerald-500">Capim limão</span> (capim
            limão).
          </p>
          <p className="p-4 text-xl">
            Para garantir sua vela pedimos o pagamento antecipado de 50% do
            valor para o início da produção. No dia da entrega é feito o
            pagamento do restante para o recebimento da sua vela.
          </p>
          <p className="p-4 text-xl">
            Dependendo da disponibilidade de material, pedimos paciência, pois
            todas as velas são produzidas por mim, Paola artesanalmente, por
            isso o processo todo demanda tempo, cuidado e muito carinho ♥
          </p>
          <p className="p-4 text-xl">
            Para pedir sua vela aromática você pode entrar em contato conosco
            pelo{" "}
            <a
              className="text-green-500 hover:text-green-700"
              href="https://wa.me/5545999165279"
              target="_blank"
            >
              WhatsApp
            </a>{" "}
            ou{" "}
            <a
              className="text-amber-800 hover:text-amber-800"
              href="https://www.instagram.com/mitsuko.velas/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={sendMessage}
            alt="Logo front page"
            width={160}
            height={80}
          />
        </div>
      </div>
      <div>
        <div className="divider"></div>
      </div>
      <div className="flex justify-center">
        <Image src={bigLogo} alt="Logo front page" width={300} height={200} />
      </div>
    </div>
  );
};
export default OrderPage;
