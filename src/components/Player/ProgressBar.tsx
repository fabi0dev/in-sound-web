import { FC, useEffect, useState } from "react";
import { Slider } from "../Slider";
import { convertTime } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectorplayer, setCurrentTime } from "@/store/reducers/player";

interface ProgressBarProps {
  player: HTMLAudioElement;
}

export const ProgressBar: FC<ProgressBarProps> = ({ player }) => {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(selectorplayer);
  const [sliderValue, setSliderValue] = useState(0);
  const [durationTotal, setDurationTotal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const percentDuration = (player.currentTime * 100) / player.duration;
      setSliderValue(percentDuration);

      if (durationTotal != player.duration) {
        setDurationTotal(player.duration);
      }

      if (currentTime != player.currentTime) {
        dispatch(setCurrentTime(player.currentTime));
      }
    });

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, player, durationTotal, currentTime]);

  return (
    <div className="flex w-full mb-3 text-sm">
      <span>{convertTime(currentTime)}</span>
      <Slider value={[sliderValue]} className="mx-2" />
      <span>{convertTime(durationTotal)}</span>
    </div>
  );
};
