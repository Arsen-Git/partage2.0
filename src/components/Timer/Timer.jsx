import { useState, useEffect, useCallback } from "react";

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState("2023-04-10");
  const [end, setEnd] = useState(false);

  const getTimeRemaining = useCallback((deadline) => {
    let t = Date.parse(deadline) - Date.parse(new Date());
    if (t <= 0) {
      setEnd(true);
      return;
    }
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTimeRemaining(deadline);
      if (end) {
        clearInterval(intervalId);
      }
    }, 1000);
  }, [end]);

  return (
    <div className="collection__about__auction">
      <p className="collection__about__auction__text">Auction ends in:</p>
      <div className="collection__about__auction__timer">
        <div className="collection__about__auction__time">
          <h2 className="collection__about__auction__time__number">{hours}</h2>
          <p className="collection__about__auction__text">Hours</p>
        </div>
        <div className="collection__about__auction__time">
          <h2 className="collection__about__auction__time__number">:</h2>
        </div>
        <div className="collection__about__auction__time">
          <h2 className="collection__about__auction__time__number">
            {minutes}
          </h2>
          <p className="collection__about__auction__text">Minutes</p>
        </div>
        <div className="collection__about__auction__time">
          <h2 className="collection__about__auction__time__number">:</h2>
        </div>
        <div className="collection__about__auction__time">
          <h2 className="collection__about__auction__time__number">
            {seconds}
          </h2>
          <p className="collection__about__auction__text">Seconds</p>
        </div>
      </div>
      <div
        className={
          end
            ? "collection__about__auction__btn-dis collection__about__auction__btn"
            : "collection__about__auction__btn"
        }
      >
        Place Bid
      </div>
    </div>
  );
}
