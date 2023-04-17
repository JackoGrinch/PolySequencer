import * as Tone from "tone";

class Clock {
  Counters = [120];

  newStrip() {}

  startClock() {
    const part = new Tone.Part(
      (time) => {
        this.makeStep(time);
      },
      [{ time: 0 }, { time: "0:2" }]
    ).start(0);
    part.loop = true;
    Tone.Transport.start();
  }

  makeStep(time) {
    console.log("AYO: " + time);
  }
}

export default Clock;
