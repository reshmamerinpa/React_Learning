const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-cyan-400 uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;