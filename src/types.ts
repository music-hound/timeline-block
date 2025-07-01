export interface HistoricalEvent {
  year: number;
  description: string;
}

export interface TimePeriod {
  id: number;
  name: string;
  startYear: number;
  endYear: number;
  events: HistoricalEvent[];
}

export interface NavigationProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
  disabled?: {
    previous?: boolean;
    next?: boolean;
  };
}

export interface SliderProps {
  events: HistoricalEvent[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export interface AppState {
  activePeriod: number;
  currentSlide: number;
  periods: TimePeriod[];
}