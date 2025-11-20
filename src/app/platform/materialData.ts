export type VideoLink = {
  title: string;
  url: string;
};

export type MaterialSubsection = {
  id: string;
  title: string;
  description?: string;
  videos: VideoLink[];
};

export type MaterialCategory = {
  id: string;
  title: string;
  label: string; // small label like "Ice Skills"
  description: string;
  imageUrl?: string; // optional picture inside the big tab
  subsections: MaterialSubsection[];
};

export const materialCategories: MaterialCategory[] = [
  {
    id: "ice-skills",
    label: "Ice Skills",
    title: "On-Ice Skill Development",
    description:
      "Skating, deception, shooting in stride, and game-speed decision making.",
    imageUrl: "/material/ice-skills.jpg", // put your own image in /public/material/
    subsections: [
      {
        id: "skating",
        title: "Skating",
        description: "Edges, crossovers, first three steps, acceleration.",
        videos: [
          {
            title: "Edge Work – Inside & Outside Edges",
            url: "https://www.youtube.com/watch?v=xxxxxxxxxxx",
          },
          {
            title: "Explosive First Three Steps",
            url: "https://www.youtube.com/watch?v=yyyyyyyyyyy",
          },
        ],
      },
      {
        id: "stickhandling",
        title: "Stickhandling",
        description: "Deception, weight transfer, puck protection.",
        videos: [
          {
            title: "Puck Protection Along the Boards",
            url: "https://www.youtube.com/watch?v=zzzzzzzzzzz",
          },
        ],
      },
      {
        id: "shooting",
        title: "Shooting",
        description: "Release speed, accuracy, shooting in stride.",
        videos: [
          {
            title: "One-Timer Mechanics",
            url: "https://www.youtube.com/watch?v=aaaaaaaaaaa",
          },
        ],
      },
      {
        id: "tactics",
        title: "Tactics",
        description: "Hockey IQ, entries, forecheck, D-zone habits.",
        videos: [
          {
            title: "Offensive Zone Entries",
            url: "https://www.youtube.com/watch?v=bbbbbbbbbbb",
          },
        ],
      },
    ],
  },
  {
    id: "off-ice",
    label: "Off-Ice Training",
    title: "Gym, Power, and Recovery",
    description:
      "Strength, conditioning blocks, mobility, jumps, and recovery routines.",
    imageUrl: "/material/off-ice.jpg",
    subsections: [
      {
        id: "stamina",
        title: "Stamina & Conditioning",
        videos: [
          {
            title: "Tempo Runs for Hockey",
            url: "https://www.youtube.com/watch?v=ccccccccccc",
          },
        ],
      },
      {
        id: "power",
        title: "Power & Explosiveness",
        videos: [
          {
            title: "Jump Progressions for Explosive Skating",
            url: "https://www.youtube.com/watch?v=ddddddddddd",
          },
        ],
      },
      {
        id: "strength",
        title: "Strength",
        videos: [
          {
            title: "Full-Body Strength for Hockey",
            url: "https://www.youtube.com/watch?v=eeeeeeeeeee",
          },
        ],
      },
      {
        id: "mobility",
        title: "Mobility & Flexibility",
        videos: [
          {
            title: "Hip & Ankle Mobility Routine",
            url: "https://www.youtube.com/watch?v=fffffffffff",
          },
        ],
      },
      {
        id: "recovery",
        title: "Recovery",
        videos: [
          {
            title: "Breathing Work & Sleep Tips",
            url: "https://www.youtube.com/watch?v=ggggggggggg",
          },
        ],
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition",
    title: "Fuel for Performance",
    description:
      "Bulking phases, cutting phases, and staying game-ready all season long.",
    imageUrl: "/material/nutrition.jpg",
    subsections: [
      {
        id: "bulking",
        title: "Bulking – Clean Mass",
        videos: [
          {
            title: "In-Season Bulking Nutrition",
            url: "https://www.youtube.com/watch?v=hhhhhhhhhhh",
          },
        ],
      },
      {
        id: "maintenance",
        title: "Maintenance",
        videos: [
          {
            title: "Game Day Meal Examples",
            url: "https://www.youtube.com/watch?v=iiiiiiiiiii",
          },
        ],
      },
      {
        id: "cutting",
        title: "Cutting Weight",
        videos: [
          {
            title: "Smart Body-Fat Reduction",
            url: "https://www.youtube.com/watch?v=jjjjjjjjjjj",
          },
        ],
      },
    ],
  },
];