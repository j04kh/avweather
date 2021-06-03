import {
  Container,
  MetarTopRow,
  WindAndConditionsRow,
  ConditionsFlag,
  RawInfo,
  TimeAgoContainer,
  TimeAgo,
} from "./styles";

const Metar = (props) => {
  return (
    <Container info="metar">
      <MetarTopRow>
        <p style={{ fontWeight: 600 }}>METAR</p>
        <WindAndConditionsRow>
          <p style={{ marginRight: 10 }}>{props.windInfo}</p>
          <ConditionsFlag conditions={props.conditions}>
            {props.conditions}
          </ConditionsFlag>
        </WindAndConditionsRow>
      </MetarTopRow>
      <RawInfo>{props.raw}</RawInfo>
      <TimeAgoContainer>
        <TimeAgo timeAgo={props.timeAgo}>{props.timeAgo}</TimeAgo>
      </TimeAgoContainer>
    </Container>
  );
};

export default Metar;
