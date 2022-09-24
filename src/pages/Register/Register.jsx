import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { CardDiv } from "../../components/Card/Styles";
import { CardModal } from "../../components/CardModal/CardModal";
import { useForm } from "react-hook-form";
import { devicesService, localService } from "../../services";
import {
  Button,
  CheckBox,
  CheckBoxDiv,
  CheckBoxLabel,
  CheckBoxWrapper,
  DivModal,
  Img,
  Input,
  MainContainer,
  SearchContainer,
  SearchText,
  SelectDiv,
} from "./Styles";
import { toast } from "react-toastify";
import cadastrarDeviceService from "../../services/cadastrarDeviceService";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [devices, setDevices] = useState([]);
  const [local, setLocal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle] = useState("is_on");

  useEffect(() => {
    (async () => {
      const response = await devicesService();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await localService();
      setLocal(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Carregando dados</div>;
  }

  const handleData = (data) => {
    const createUserPromisse = cadastrarDeviceService.cadastrarDevice(data);
    toast.promise(createUserPromisse, {
      pending: "Cadastrando dispositivo...",
      success: "Cadastrado com sucesso",
      error: "Dispositivo já existe.",
    });
    console.log(data);

    // const toggler = () => {
    //   toggle ? setToggle("false") : setToggle("true");
    // };
  };

  const coverUser = localStorage.getItem("user");
  const ourArray = JSON.parse(coverUser);
  const idPerfil = ourArray._id;

  return (
    <MainContainer>
      <SearchContainer>
        <SearchText>Buscar</SearchText>
        <Input type="text" placeholder="Nome do dispositivo" />
      </SearchContainer>

      <CardDiv>
        {devices.map((device) => (
          <Card key={device._id}>
            <Img src={device.photoUrl} alt="Dispositivo" />

            <p>{device.name}</p>

            <CardModal>
              <form onSubmit={handleSubmit(handleData)}>
                <DivModal>
                  <h1>{device.name}</h1>
                  <img src={device.photoUrl} alt="Dispositivo" />
                  <CheckBoxDiv>
                    <div>
                      <span htmlFor="checkbox">Online?</span>
                    </div>
                    <input
                      type="hidden"
                      value={idPerfil}
                      {...register("user")}
                    />
                    <input
                      type="hidden"
                      value={device._id}
                      name="hidden"
                      {...register("device")}
                    />
                    <CheckBoxWrapper>
                      <CheckBox
                        id="checkbox"
                        type="checkbox"
                        {...register(toggle)}
                      />

                      <CheckBoxLabel htmlFor="checkbox" />
                    </CheckBoxWrapper>
                  </CheckBoxDiv>
                  <SelectDiv>
                    <select name="local" id="local" {...register("local")}>
                      <option value="local">Local*</option>
                      {local.map((locals) => (
                        <option value={locals._id} key={locals._id}>
                          {locals.description}
                        </option>
                      ))}
                    </select>

                    <select {...register("room")}>
                      <option value="room">Ambiente*</option>
                      <option value="Quarto">Quarto</option>
                      <option value="Sala">Sala</option>
                      <option value="Cozinha">Cozinha</option>
                    </select>
                  </SelectDiv>
                  <Button
                    onClick={() => {
                      reset({ keepValues: true });
                    }}
                  >
                    Cadastrar
                  </Button>
                </DivModal>
              </form>
            </CardModal>
          </Card>
        ))}
      </CardDiv>
    </MainContainer>
  );
};

export default Register;

/* {devices.map((device) => (
            <li key={device._id}>{device.name}</li>
          ))} */

//   <CardDiv>
// {devices.map((device) => (
//   <Card key={device._id}>
//     <Img src={device.photoUrl} alt="" />
//     <p>{device.name}</p>
//   </Card>
// ))}
// </CardDiv>
