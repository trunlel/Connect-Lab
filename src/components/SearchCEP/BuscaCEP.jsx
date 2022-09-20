import { dataInit } from "./CepInit";

export class BuscaCEP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataInit,
    };
  }
  url = () => {
    return `http://viacep.com.br/ws/${this.state.cep}/json/`;
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, () => {
      this.buscarCep();
    });
  };

  buscarCep() {
    if (this.state.cep.length < 8) {
      return;
    } else {
      fetch(this.url(), { mode: "cors" })
        .then((res) => res.json())
        .then((data) => {
          if (data.hasOwnProperty("erro")) {
            this.setState({ data: dataInit });
            alert("Cep não existente");
          } else {
            this.setState({ data });
          }
        })
        .catch((err) => consolelog(err));
    }
  }

  render() {
    return (
      <div>
        <label>
          {" "}
          Digite o cep:
          <input
            name="cep"
            maxLength={8}
            value={this.state.cep || ""}
            onChange={this.handleChange}
          />
        </label>
        <input
          name="logradouro"
          maxLength={100}
          value={this.state.data.logradouro}
          onChange={this.handleChange}
          placeholder="Rua"
        />
        <input name="complemento" maxLength={100} placeholder="Complemento" />
        <input
          name="Bairro"
          maxLength={100}
          value={this.state.data.bairro}
          onChange={this.handleChange}
          placeholder="Bairro"
        />
        <input
          name="Localidade"
          maxLength={100}
          value={this.state.data.localidade}
          onChange={this.handleChange}
          placeholder="Cidade"
        />
        <input
          name="Estado"
          maxLength={100}
          value={this.state.data.uf}
          onChange={this.handleChange}
          placeholder="Estado"
        />
        <input name="Numero" maxLength={100} placeholder="Número" />
      </div>
    );
  }
}
