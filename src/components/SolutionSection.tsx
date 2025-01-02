import { motion } from "framer-motion"

const solutionCards = [
  {
    id: 1,
    icon: "/Icon.png",
    title: "Detailed Security Analysis",
    description: "Receive a comprehensive report that includes detailed analyses of all vulnerabilities found on your website. Our team will meticulously describe each identified weak point, along with a risk assessment."
  },
  {
    id: 2,
    icon: "/Icondouble.png",
    title: "Recommendations and Instructions",
    description: "The report not only identifies problems but also provides specific recommendations and steps you should take to enhance your website's security. We offer detailed instructions that will help your development team."
  },
  {
    id: 3,
    icon: "/Iconimage.png",
    title: "Overall Security Condition",
    description: "In the report, you will also find an overall assessment of your website's security condition. This helps you understand the current security level of your site."
  },
  {
    id: 4,
    icon: "/iconstar.png",
    title: "Personal Service from Experts",
    description: "You will be served by real human experts in cybersecurity to ensure the highest quality of the provided service. Our team is dedicated to delivering personalised and effective."
  }
]

export const SolutionSection = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-16 md:py-24 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <span className="text-[12rem] md:text-[20rem] font-bold text-[#41A370] tracking-wider">
          Solution
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
            Uncovering vulnerabilities before they become threats.
          </h2>
          <div className="  sm:mx-2 md:mx-10">
            <h3 className="text-xl  md:text-2xl font-semibold text-white mb-2">
              What is a Penetration Test <br/> Report?
              <span className="text-white  md:text-lg mx-10 text-justify ">
              A Penetration Test Report is a detailed document that provides an in-depth analysis of your website's security vulnerabilities. Our cybersecurity experts simulate various attacks on your website, using the most exclusive tools and techniques practiced by the military sector, to identify and evaluate potential weaknesses. This report is your comprehensive guide to understanding the security posture of your website.
            </span>
            </h3>
            
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionCards.map((card) => (
            <motion.div
              key={card.id}
              className="group relative bg-[#0A2818] rounded-3xl p-8 border border-[#41A370]/20 hover:border-[#41A370]/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#41A370]/10 blur-2xl rounded-full group-hover:bg-[#41A370]/20 transition-all duration-300" />
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="relative w-20 h-20 object-contain" 
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {card.title}
              </h4>
              <p className="text-[#41A370] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

