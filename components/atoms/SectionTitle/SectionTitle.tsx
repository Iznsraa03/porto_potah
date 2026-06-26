type SectionTitleProps = {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
};

export function SectionTitle({ subtitle, titlePart1, titlePart2 }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
        {subtitle}
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
        {titlePart1} <span className="section-title-gradient">{titlePart2}</span>
      </h2>
    </div>
  );
}
