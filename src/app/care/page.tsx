import bigLogo from "@/assets/biglogo.png";
import enjoyCandle from "@/assets/enjoyCandle.png";
import Image from "next/image";

const CandlesCarePage = () => {
  return (
    <div className="flex w-full flex-col ">
      <div>
        <div className="p-4 text-center">
          <h1 className="text-5xl font-bold">Cuidados com a sua vela</h1>
        </div>
        <div className="m-4 gap-4">
          <p className="p-4 text-lg">
            &bull; Ao acender sua vela pela primeira vez deixe-a queimar até que
            a cera de toda a superfície esteja derretida, formando uma
            piscininha;
          </p>
          <p className="p-4 text-lg">
            &bull; Nunca deixe sua vela acesa por mais de 3 horas seguidas;
          </p>
          <p className="p-4 text-lg">
            &bull; Apare o pavio antes de acender a vela novamente;
          </p>
          <p className="p-4 text-lg">
            &bull; Sempre queime a vela com a supervisão de um adulto, não
            deixando a vela sozinha enquanto estiver acesa;
          </p>
          <p className="p-4 text-lg">
            &bull; Evitar deixar a vela próxima de cortinas e outros objetos
            inflamáveis, bem como de crianças e animais domésticos;
          </p>
          <p className="p-4 text-lg">
            &bull; Para maior aproveitamento do aroma, guardar sua vela em local
            seco e sem exposição direta ao sol.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={enjoyCandle}
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
export default CandlesCarePage;
