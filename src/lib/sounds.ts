const audioCtx = () => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  return ctx;
};

let ctx: AudioContext | null = null;

function getCtx() {
  if (!ctx) ctx = audioCtx();
  return ctx;
}

function playTone(frequency: number, duration: number, type: OscillatorType = "sine", volume = 0.15) {
  try {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, c.currentTime);
    gain.gain.setValueAtTime(volume, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + duration);
  } catch {}
}

export function playFlipSound() {
  playTone(800, 0.08, "sine", 0.1);
}

export function playMatchSound() {
  const c = getCtx();
  const now = c.currentTime;
  [523, 659, 784, 1047].forEach((freq, i) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + i * 0.1);
    gain.gain.setValueAtTime(0.12, now + i * 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(now + i * 0.1);
    osc.stop(now + i * 0.1 + 0.3);
  });
}

export function playMismatchSound() {
  playTone(300, 0.15, "sawtooth", 0.08);
  setTimeout(() => playTone(220, 0.2, "sawtooth", 0.06), 150);
}

export function playWinSound() {
  const c = getCtx();
  const now = c.currentTime;
  [523, 659, 784, 1047, 1319].forEach((freq, i) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now + i * 0.12);
    gain.gain.setValueAtTime(0.15, now + i * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.5);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(now + i * 0.12);
    osc.stop(now + i * 0.12 + 0.5);
  });
}

export function playButtonSound() {
  playTone(600, 0.05, "sine", 0.08);
}
