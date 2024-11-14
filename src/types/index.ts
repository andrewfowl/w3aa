export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  URL: string;
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  URL: string;
}

export interface Question {
  name: string;
  email: string;
  topic: string;
  question: string;
}
