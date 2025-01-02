// src/types/card.ts
export interface SecurityCard {
    id: number;
    title: string;
    price: string;
    duration: string;
    certificates?: string[];
    description: string;
    subDescription: string;
    benefits: string[];
    actions: {
      question: string;
      report: string;
      order: string;
    };
    image: string;
  }