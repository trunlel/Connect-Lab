import { PrevDiv, TempDiv } from "./Styled";

export const Weather = () => {
  return (
    <TempDiv>
      <div>
        <h2>16°C</h2>
      </div>
      <div>
        <h2>Santa Catarina, SC</h2>
      </div>
      <PrevDiv>
        <h3>Sensação térmica: 15°C -</h3>
        <h3>Precipitação: 0mm -</h3>
        <h3> Chance de chuva: 0%</h3>
      </PrevDiv>
    </TempDiv>
  );
};
