// src/data/securityCards.ts
import {SecurityCard}  from '../types/card'
export const securityCards: SecurityCard[] = [
    {
      id: 1,
      title: "Basic Security Scan",
      price: "$500",
      duration: "0-4 business days",
      certificates: ["/certificationone.png", "/certificationtwo.png"],
      description: "Best for: Companies needing legal or standard compliance.",
      subDescription:"A detailed audit designed to meet industry standards like ISO 27001, PCI DSS 4.0, or HIPAA. Tailored for businesses that need compliance for legal or customer trust reasons.",
      benefits: [
        "Compliance report aligned with your chosen standard.",
        "Identification of high-risk vulnerabilities.",
        "Ready-to-implement solutions.",
      ],
      actions: {
        question: "Have a question?",
        report: "See report example",
        order: "Order Now"
      },
      image: "/cardimageone.png" 
    },
    {
        id: 2,
        title: "Compliance Ready",
        price: "From $1000",
        duration: "5-7 business days",
        certificates: ["/certificationone.png", "/certificationtwo.png"],
        description: "Best for: Companies needing legal or standard compliance.",
        subDescription:"A detailed audit designed to meet industry standards like ISO 27001, PCI DSS 4.0, or HIPAA. Tailored for businesses that need compliance for legal or customer trust reasons.",
                  
        benefits: [
          "Compliance report aligned with your chosen standard.",
          "Identification of high-risk vulnerabilities.",
          "Ready-to-implement solutions.",
        ],
        actions: {
          question: "Have a question?",
          report: "See report example",
          order: "Order Now"
        },
        image: "/cardimagetwo.png" 
      },
      {
        id:3,
        title: "Threat Deep Dive",
    price: "From $1200",
        duration: "7-10 business days",
        certificates: ["ISO", "PCI"],
        description: "Best for: Companies needing legal or standard compliance.",
      subDescription:"A detailed audit designed to meet industry standards like ISO 27001, PCI DSS 4.0, or HIPAA. Tailored for businesses that need compliance for legal or customer trust reasons.",

        benefits: [
          "Compliance report aligned with your chosen standard.",
          "Identification of high-risk vulnerabilities.",
          "Ready-to-implement solutions.",
        ],
        actions: {
          question: "Have a question?",
          report: "See report example",
          order: "Order Now"
        },
        image: "/cardimagethree.png" 
      },

      {
        id:4,
        title: "Compliance Ready",
        price: "From $1400",
        duration: "10-14 business days",
        certificates: ["ISO", "PCI"],
        description: "Best for: Companies needing legal or standard compliance.",
      subDescription:"A detailed audit designed to meet industry standards like ISO 27001, PCI DSS 4.0, or HIPAA. Tailored for businesses that need compliance for legal or customer trust reasons.",

        benefits: [
          "Compliance report aligned with your chosen standard.",
          "Identification of high-risk vulnerabilities.",
          "Ready-to-implement solutions.",
        ],
        actions: {
          question: "Have a question?",
          report: "See report example",
          order: "Order Now"
        },
        image: "./cardimagetwo.png" 
      }
   
  ];