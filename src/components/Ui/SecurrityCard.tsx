import { SecurityCard as SecurityCardType } from "../../types/card";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface SecurityCardProps {
  card: SecurityCardType;
  isActive?: boolean;
}

export const SecurityCard = ({ card, isActive = false }: SecurityCardProps) => {
  return (
    <motion.div
      className={`relative rounded-[32px] overflow-hidden bg-[#0A2818] border border-[#41A370]/20 w-[370px] ${
        isActive ? "scale-105" : "scale-95"
      } transition-all duration-300`}
    >
      {/* Card Content */}
      <div className="relative p-[10px] space-y-2 h-full flex flex-col">
        {/* Header Image */}
        <div className="mb-4">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover rounded-2xl"
          />
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-[#E4E4E4]">
            {card.title}
          </h3>
          <span className="text-[#E4E4E4] text-sm">From {card.price}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center space-x-2">
          <span className="text-[#41A370] text-sm">{card.duration}</span>
        </div>

        {/* Certificates */}
        <div className="flex items-center space-x-2">
          <span className="text-[#E4E4E4] text-sm">Certificates:</span>
          <div className="flex space-x-2">
            {card.certificates?.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt="certificate"
                className="h-6 w-6"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-[#41A370] text-sm leading-relaxed">
            Best for: {card.description}
          </p>
          <p className="text-[#41A370] text-sm leading-relaxed">
            {card.subDescription}
          </p>
        </div>

        {/* Benefits */}
        <ul className="flex-grow">
          {card.benefits.map((benefit, index) => (
            <li key={index} className="text-[#41A370] text-sm flex items-start">
              <span className="mr-2">•</span>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="space-y-3 mt-auto bg-black rounded-xl p-2">
        <button
  className="w-full flex items-center justify-center space-x-1 text-[#3DFF99] border-2 border-[#0D763F] bg-transparent py-1 rounded-full transition-colors text-sm"
>
  <span>Have a question?</span>
  <MessageCircle size={16} />
</button>

          <button className="w-full bg-[#0D763F] text-[#3DFF99] hover:bg-[#0A1F0E]/80  py-1 rounded-full transition-colors text-sm">
            See report example
          </button>
          <button className="w-full bg-[#41A370] hover:bg-[#41A370]/90 text-black  py-1 rounded-full transition-colors text-sm font-medium">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
