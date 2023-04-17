import * as Tone from "tone";
import MasterClock from "./Clock.js";

class SequencerStep {
  bIsOn = false;

  SetIsOn(isOn) {
    this.bIsOn = isOn;
  }
}

class SequencerStrip {
  constructor(ID, counter) {
    this.ID = ID;
    this.Counter = counter;
  }

  getID() {
    return this.ID;
  }
  getCounter() {
    return this.Counter;
  }

  makeStep() {
    console.log("BANG");
  }
}

//////////////////////// MAIN AUDIO CLASS ///////////////////////

class SequencerAudio {
  //MasterClock;

  constructor() {
    this.masterClock = new MasterClock();
    Tone.loaded().then(() => {
      console.log("Loaded");
      this.masterClock.newStrip();
      //this.masterClock.startClock();
    });
  }

  start() {
    console.log("GWAN START");
    Tone.loaded().then(() => {
      //this.masterClock.startClock();
    });
  }
}

// class SequencerAudio {
//   Strips = [];
//   Parts = [];
//   MasterClock;

//   constructor() {
//     Tone.loaded().then(() => {
//       this.MasterClock = new MultiCounter();
//       console.log("NEW AUDIO");
//       this.addNewStrip(0);
//     });
//   }

//   makeStep() {
//     console.log("BANG");
//   }

//   startCounter(ID) {
//     const stripCounter = this.Strips[this.getStripByID(ID)].getCounter();
//     this.MasterClock.startCounter(this.counter);
//     this.MasterClock.setIsPlaying(true);
//   }
//   stopCounter(ID) {
//     const stripCounter = this.Strips[this.getStripByID(ID)].getCounter();
//     this.MasterClock.stopCounter(this.counter);
//     this.MasterClock.setIsPlaying(false);
//   }
//   setTempo(ID, bpm) {
//     const stripCounter = this.Strips[this.getStripByID(ID)].getCounter();
//     stripCounter.setBPM(bpm);
//     this.MasterClock.setTempo(stripCounter, bpm);
//   }

//   getStripByID(ID) {
//     for (var x = 0; x < this.Strips.length; x++)
//       if (this.Strips[x].getID() === ID) return x;
//     return -1;
//   }
//   updateStripLength(ID, length) {
//     let x = this.getStripByID(ID);
//     if (x !== -1) this.Strips[x].updateStripLength(length);
//   }
//   addNewStrip(ID) {
//     const tempo = 120;
//     const newStrip = new SequencerStrip(
//       ID,
//       this.MasterClock.addCounter(tempo, this.makeStep)
//     );
//     this.Strips.push(newStrip);
//   }
//   removeStrip(ID) {
//     let x = this.getStripByID(ID);
//     if (x) this.Strips.splice(x, 1);
//   }
// }

export default SequencerAudio;
