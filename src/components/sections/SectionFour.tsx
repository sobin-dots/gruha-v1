"use client";

import React from 'react';
import { BaseStepSection } from '../ui/BaseStepSection';

const features = [
  {
    title: "Master Plan",
    description: "Understand the entire layout at a glance.",
    icon: "/assets/04-project-tower/Vector.svg"
  },
  {
    title: "Amenities",
    description: "See everything you'll love, inside & out.",
    icon: "/assets/04-project-tower/Vector (2).svg"
  },
  {
    title: "Construction updates",
    description: "See everything you'll love, inside & out.",
    icon: "/assets/04-project-tower/Vector (3).svg"
  }
];

const cards = [
  {
    title: "How efficiently is\nspace used?",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/list (1).png",
    id:"pj-1",
    bg:"bg-[#B349A6]",
    textColor: "text-white"
  },
  {
    title: "Construction\nProgress",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/list (3).png",
    id:"pj-2",
    bg:"bg-[#9BEBDF]",
  },
  {
    title: "Movement &\nAccess",
    description: "Understand real walking distances\nand daily movement inside the\nproject.",
    image: "/assets/list-after-project/list (4).png",
    id:"pj-3",
    bg:"bg-[#EA726D]",
    textColor: "text-white"
  },
  {
    title: "Sun & Shadow\nSimulation",
    description: "See how sunlight and shadows move\nacross your project and affect your\nselected unit.",
    image: "/assets/list-after-project/list (2).png",
    id:"pj-4",
    bg:"bg-[#65EB8B]",
  }
];

export const SectionFour = () => {
  return (
    <BaseStepSection
      step={4}
      number="04"
      title={<>Project & Tower <br/>Intelligence</>}
      description="Big decisions need the full picture."
      sidebarImage="/assets/drone.png"
      cards={cards}
      features={features}
    />
  );
};
