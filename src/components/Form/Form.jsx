import { useForm } from "react-hook-form";
import { senaiApiService, ViaCepService } from "../../services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

// Estilos.
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

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

export const Form = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm({
    resolver: yupResolver(validationSchema),
  });

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

  // .then(() => {
  //   notify("Sucesso!");
  // });

  const handleDate = (data) => {
    const createUserPromisse = senaiApiService.criarUsuario(data);
    toast.promise(createUserPromisse, {
      pending: "Cadastrando usuário...",
      success: "Cadastrado com sucesso",
      error: "Usuário já existe.",
    });
    console.log(data);
  };

  return (
    <div className="divForm">
      <h1>Registrar</h1>
      <br />
      <form onSubmit={handleSubmit(handleDate)}>
        <div>
          <input type="url" {...register("photoUrl")} placeholder="Imagem" />
        </div>
        <div className="teste">
          <input
            type="name"
            {...register("fullName")}
            placeholder="Nome Completo"
          />

          <input type="tel" {...register("phone")} placeholder="Telefone" />
        </div>
        <div>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            placeholder="Email"
          />
        </div>
        <div className="teste">
          <input
            type="password"
            autoComplete="new-password"
            {...register("password")}
            placeholder="Senha"
          />
          <input
            autoComplete="new-password"
            type="password"
            {...register("passwordConfirm")}
            placeholder="Confirmar senha"
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
            placeholder="Rua"
          />
        </div>
        <div className="divTest">
          <div className="teste">
            <input
              name="CEP"
              {...register("userAddress.zipCode")}
              onBlur={checkCEP}
              placeholder="CEP"
            />
            <input
              name="bairro"
              {...register("userAddress.neighborhood")}
              placeholder="Bairro"
            />
          </div>

          <div className="teste">
            <input
              name="estado"
              {...register("userAddress.state")}
              placeholder="Estado"
            />

            <input
              name="cidade"
              {...register("userAddress.city")}
              placeholder="Cidade"
            />
          </div>
          <div className="teste">
            <input
              name="numero"
              type="text"
              {...register("userAddress.number")}
              placeholder="número"
            />
            <input
              name="complemento"
              {...register("userAddress.complement")}
              placeholder="Complemento"
            />
          </div>
        </div>
        <div className="customInput">
          <input type="reset" className="customButton" />
          <input type="submit" className="customButton" />
        </div>
      </form>
    </div>
  );
};
