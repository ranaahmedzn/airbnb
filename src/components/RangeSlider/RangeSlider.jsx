import MultiRangeSlider from "multi-range-slider-react";
import './RangeSlider.css'

const RangeSlider = ({minValue, setMinValue, maxValue, setMaxValue}) => {

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };

    return (
        <MultiRangeSlider
            min={50}
            max={1100}
            step={5}
            ruler={true}
            label={true}
            preventWheel={false}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
                handleInput(e);
            }}
        />
    );
};

export default RangeSlider;