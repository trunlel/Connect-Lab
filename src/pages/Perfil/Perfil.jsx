import { useForm } from "react-hook-form";
import {
  atulizarUserService,
  detailsService,
  ViaCepService,
} from "../../services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Div, PerfilImg } from "./Styles";

// Estilos.

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const validationSchema = yup.object().shape({
  fullName: yup.string().required(),
  photoUrl: yup.string().url().notRequired(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().notRequired(),
  phone: yup.string().required(),
  userAddress: yup.object().shape({
    zipCode: yup.string(),
    street: yup.string(),
    number: yup.string(),
    neighborhood: yup.string(),
    city: yup.string(),
    state: yup.string(),
    complement: yup.string(),
  }),
});

function Perfil() {
  const { register, handleSubmit, setValue, setFocus } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await detailsService();
      setData(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    ViaCepService.getCep(cep).then((res) => {
      setValue("userAddress.street", res.data.logradouro);
      setValue("userAddress.city", res.data.localidade);
      setValue("userAddress.state", res.data.uf);
      setValue("userAddress.neighborhood", res.data.bairro);
      setFocus("userAddress.number");
    });
  };

  const handleDate = (data) => {
    const createUserPromisse = atulizarUserService.atualizaService(data);
    toast.promise(createUserPromisse, {
      pending: "Editando...",
      success: "Editado com sucesso!",
      error: "Campo preenchido incorretamente",
    });
    console.log(data);
  };

  return (
    <Div className="divForm">
      <PerfilImg src={data.photoUrl} alt="" />
      <br />
      <form onSubmit={handleSubmit(handleDate)}>
        <div>
          <input
            type="url"
            {...register("photoUrl")}
            placeholder={data.photoUrl}
          />
        </div>
        <div className="teste">
          <input
            type="name"
            {...register("fullName")}
            placeholder={data.fullName}
          />

          <input type="tel" {...register("phone")} placeholder={data.phone} />
        </div>
        <div>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            placeholder={data.email}
          />
        </div>
        <div className="teste">
          <input
            type="password"
            autoComplete="new-password"
            {...register("password")}
            placeholder="********"
          />
          <input
            autoComplete="new-password"
            type="password"
            placeholder="********"
          />
        </div>
        <br />
        <h2>Endereço</h2>
        <br />
        <div>
          <input
            type="text"
            name="endereco"
            {...register("userAddress.street")}
            placeholder={data.userAddress.street}
          />
        </div>
        <div className="divTest">
          <div className="teste">
            <input
              name="CEP"
              {...register("userAddress.zipCode")}
              onBlur={checkCEP}
              placeholder={data.userAddress.zipCode}
            />
            <input
              name="bairro"
              {...register("userAddress.neighborhood")}
              placeholder={data.userAddress.neighborhood}
            />
          </div>

          <div className="teste">
            <input
              name="estado"
              {...register("userAddress.state")}
              placeholder={data.userAddress.state}
            />

            <input
              name="cidade"
              {...register("userAddress.city")}
              placeholder={data.userAddress.city}
            />
          </div>
          <div className="teste">
            <input
              name="numero"
              type="text"
              {...register("userAddress.number")}
              placeholder={data.userAddress.number}
            />
            <input
              name="complemento"
              {...register("userAddress.complement")}
              placeholder={data.userAddress.complement}
            />
          </div>
        </div>
        <div className="customInput">
          <input type="reset" className="customButton" />
          <input type="submit" className="customButton" />
        </div>
      </form>
    </Div>
  );
}

export default Perfil;
