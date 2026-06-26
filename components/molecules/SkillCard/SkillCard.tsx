import React from 'react';

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

type Skill = {
  category: string;
  icon: string;
  color: string;
  items: SkillItem[];
};

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      id={`skill-card-${skill.category.toLowerCase()}`}
      className="flex flex-col h-full"
    >
      <h3 className={`text-4xl sm:text-5xl font-black mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
        {skill.category}
      </h3>
      
      <div className="flex flex-wrap gap-5 mt-auto">
        {skill.items.map((item) => (
          <div 
            key={item.name} 
            className="group relative flex items-center justify-center h-14 w-14 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800 transition-all duration-300 cursor-default"
          >
            <div className="text-2xl text-zinc-400 group-hover:text-blue-400 transition-colors duration-300">
              {item.icon}
            </div>
            
            <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
              <span className="bg-zinc-800 text-white text-xs font-medium px-2.5 py-1.5 rounded-md shadow-xl border border-zinc-700">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
