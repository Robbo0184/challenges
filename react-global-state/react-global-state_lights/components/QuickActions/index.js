import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;



export default function QuickActions({lights, toggleAllLightsOn, toggleAllLightsOff}) {
  const allLightsOff = lights.every(light => !light.isOn);
  const allLightsOn = lights.every(light => light.isOn);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={allLightsOff ? true : false}
        onClick={() => {
          toggleAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={allLightsOn ? true : false}
        onClick={() => {
          toggleAllLightsOn()
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
