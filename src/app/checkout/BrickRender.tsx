import { StatusScreen } from "@mercadopago/sdk-react";
import { IBrickError } from "@mercadopago/sdk-react/bricks/util/types/common";

interface BrickRenderProps {
  paymentId: string;
}

const BrickRender = ({ paymentId }: BrickRenderProps) => {
  if (paymentId === "" || paymentId === undefined) {
    return null;
  }

  const initialization = {
    paymentId: paymentId, // id do pagamento a ser mostrado
  };
  const onError = async (error: IBrickError) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };
  const onReady = async () => {
    /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
  };

  return (
    <StatusScreen
      initialization={initialization}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default BrickRender;
