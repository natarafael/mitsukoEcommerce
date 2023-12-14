import bigLogo from "@/assets/biglogo.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col ">
      <div>
        <div className="p-4 text-center">
          <h1 className="text-5xl font-bold">Sobre nós</h1>
        </div>
        <div className="m-4 gap-2">
          <p className=" text-lg">Velas artesanais 🤍</p>
          <p className="text-lg">100% natural 🌿 • livre de parafina</p>
          <p className="text-lg">
            Feitas com ceras vegetais de coco 🥥 de palma e amor 💖
          </p>
          <p className="text-lg">
            Por{" "}
            <a href="https://www.instagram.com/mitsuko.velas/" target="_blank">
              @paola.okumoto
            </a>
          </p>
          <p className=" text-lg">Foz do Iguaçu, PR</p>
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

export default AboutPage;
