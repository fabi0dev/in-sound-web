import { FC, useEffect, useState } from "react";
import { Slider } from "../Slider";
import { convertTime } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectorPlayer, setCurrentTime } from "@/store/reducers/player";

interface ProgressBarProps {
  player: HTMLAudioElement;
}

export const ProgressBar: FC<ProgressBarProps> = ({ player }) => {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(selectorPlayer);
  const [sliderValue, setSliderValue] = useState(0);
  const [durationTotal, setDurationTotal] = useState(0);

  useEffect(() => {
    player.ontimeupdate = () => {
      if (currentTime != player.currentTime) {
        const percentDuration = (player.currentTime * 100) / player.duration;
        setSliderValue(percentDuration);

        if (durationTotal != player.duration) {
          setDurationTotal(player.duration);
        }

        dispatch(setCurrentTime(player.currentTime));
      }
    };
  }, [dispatch, player, durationTotal, currentTime]);

  return (
    <div className="flex w-full mb-3 text-sm">
      <span>{convertTime(currentTime)}</span>
      <Slider
        minStepsBetweenThumbs={0}
        value={[sliderValue]}
        className="mx-2"
      />
      <span>{convertTime(durationTotal)}</span>
    </div>
  );
};
