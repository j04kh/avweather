import { Container, RawInfo } from "./styles";

const Taf = (props) => {
  return (
    <Container>
      <p style={{ fontWeight: 600, marginLeft: 10, marginBottom: 5 }}>TAF</p>
      <RawInfo>{props.raw}</RawInfo>
    </Container>
  );
};

export default Taf;
