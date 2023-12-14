"use client";
import { useEffect, useState } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";
import BrickRender from "./BrickRender";
import {
  IPaymentBrickCustomization,
  IPaymentFormData,
} from "@mercadopago/sdk-react/bricks/payment/type";
import { IBrickError } from "@mercadopago/sdk-react/bricks/util/types/common";

initMercadoPago("TEST-e222d098-a65c-4cd6-82c2-2d3983c286df", {
  locale: "pt-BR",
});
const CheckoutHandler = () => {
  const [paymentId, setPaymentId] = useState<string>("");
  const [renderStatusBrick, setRenderStatusBrick] = useState(false);
  const router = useRouter();

  const initialization = {
    amount: 10,
  };
  const customization: IPaymentBrickCustomization = {
    paymentMethods: {
      bankTransfer: "all",
    },
  };
  const onSubmit = async (formData: IPaymentFormData) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise<void>((resolve, reject) => {
      fetch("/api/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receber o resultado do pagamento
          console.log("responseCheckout", response);
          setPaymentId(response.id);
          resolve();
        })
        .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
          console.log("errorCheckout", error);
          reject();
        });
    });
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

  useEffect(() => {
    if (paymentId) {
      setRenderStatusBrick(true);
    }
  }, [paymentId]);

  return (
    <div>
      {renderStatusBrick ? (
        <BrickRender paymentId={paymentId} />
      ) : (
        <Payment
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      )}
    </div>
  );
};
export default CheckoutHandler;
