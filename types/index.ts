// Project Specs Shape
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSpec {
  title: string;
  imagePath: string;
  description: string;
  techStack: string[];
  websiteUrl: string;  
}

// Calendar Slot Shape
export interface CalendarSlot {
  date: number;
  available: boolean;
}
