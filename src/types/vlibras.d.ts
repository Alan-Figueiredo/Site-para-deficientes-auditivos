interface VLibrasPlayer {
  translate: (text: string) => void;
}

interface VLibrasWidget {
  new (url: string): void;
  Player?: VLibrasPlayer;
}

interface Window {
  VLibras?: {
    Widget: VLibrasWidget;
    Player?: VLibrasPlayer;
  };
}