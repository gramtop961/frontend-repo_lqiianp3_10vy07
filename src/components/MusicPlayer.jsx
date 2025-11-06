import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.35;
    if (enabled && playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [enabled, playing]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="flex items-center gap-2 rounded-2xl bg-black/40 backdrop-blur px-3 py-2 ring-1 ring-white/10">
        <Music className="h-4 w-4 text-white/70" />
        <span className="text-sm text-white/80 mr-1">Music</span>
        <button
          onClick={() => setEnabled(v => !v)}
          className={`px-2 py-1 rounded-lg text-xs font-medium transition ${enabled ? 'bg-white/15 text-white' : 'bg-white/5 text-white/70 hover:text-white'}`}
        >
          {enabled ? 'On' : 'Off'}
        </button>
        <button
          onClick={() => setPlaying(p => !p)}
          disabled={!enabled}
          className={`p-2 rounded-lg transition ${enabled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white/5 text-white/40 cursor-not-allowed'}`}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          onClick={() => { if (audioRef.current) audioRef.current.muted = !audioRef.current.muted; }}
          className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
          aria-label="Toggle mute"
        >
          {audioRef.current && audioRef.current.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <audio
          ref={audioRef}
          src="https://cdn.pixabay.com/download/audio/2023/02/28/audio_08a5b5a1e1.mp3?filename=adventure-time-139577.mp3"
          loop
        />
      </div>
    </div>
  );
}
