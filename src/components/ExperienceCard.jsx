import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceCard = ({ exp, index, inView, hoveredCard, setHoveredCard }) => {
  const cardRef = useRef(null);

  // GSAP animate on scroll in view
  useEffect(() => {
    if (inView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 70, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [inView, index]);

  // 🎨 Auto color (optional)
  const autoColor = ["#6366F1", "#10B981", "#F59E0B"][index % 3];

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setHoveredCard(exp.id)}
      onMouseLeave={() => setHoveredCard(null)}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "var(--bg-primary)",
        borderRadius: "20px",
        padding: "28px",
        border: `2px solid ${
          hoveredCard === exp.id ? autoColor : "var(--border-subtle)"
        }`,
        cursor: "pointer",
        opacity: 0,
      }}
    >
      {/* Role */}
      <div className="flex items-center gap-3 mb-4">
        <Briefcase size={22} color={autoColor} />
        <h3 className="text-xl font-semibold">{exp.title}</h3>
      </div>

      {/* Company */}
      <p className="text-lg font-medium mb-2">{exp.company}</p>

      {/* Period */}
      <div className="flex items-center gap-2 text-sm mb-2 opacity-80">
        <Calendar size={16} />
        <span>{exp.period}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
        <MapPin size={16} />
        <span>{exp.location}</span>
      </div>

      {/* Description */}
      <p className="opacity-90 leading-relaxed mb-4">{exp.description}</p>

      {/* Achievements */}
      <ul className="list-disc pl-5 space-y-1 opacity-90">
        {exp.achievements?.map((item, i) => (
          <li key={i} className="text-sm">
            {item}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4">
        {exp.technologies?.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
