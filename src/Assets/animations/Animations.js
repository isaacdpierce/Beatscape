import { getRandomFloat, roundCorrect } from 'Assets/helpers/helpers';

export const animateVolume = (value, min, max, next, setSliderState) => {
  const volumeLoop = setTimeout(() => {
    if (value > next) {
      setSliderState({ value: roundCorrect(value - 0.01, 2) });
    } else if (value < next) {
      setSliderState({ value: roundCorrect(value + 0.01, 2) });
    } else if (value === next) {
      const newNum = getRandomFloat(min, max);
      setSliderState({ next: roundCorrect(newNum - 0.01, 2) });
    }
  }, getRandomFloat(100, 1000));
  return () => clearTimeout(volumeLoop);
};

export const animateKnob = (
  knobValue,
  knobMin,
  knobMax,
  knobNext,
  setKnobValue,
  setKnobNext
) => {
  const knobLoop = setTimeout(() => {
    if (knobValue > knobNext) {
      setKnobValue(roundCorrect(knobValue - 0.01, 2));
    } else if (knobValue < knobNext) {
      setKnobValue(roundCorrect(knobValue + 0.01, 2));
    } else if (knobValue === knobNext) {
      const newNum = getRandomFloat(knobMax, knobMin);
      setKnobNext(roundCorrect(newNum - 0.01, 2));
    }
  }, 0);
  return () => clearTimeout(knobLoop);
};
