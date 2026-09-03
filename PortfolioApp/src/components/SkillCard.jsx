const SkillCard =({icon :Icon, title, description}) => {
    return(
        <div className="p-6 rounded-3xl bg-white dark:bg-[#102a43] shadow-lg hover:-translate-y-3 hover:scale-[1.03] 
        hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300">
            <Icon className="text-6xl text-cyan-500 mb-5 transition-transform duration-300 group-hover:rotate-12"/>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-7">
                {description}
            </p>
        </div>
    );
};
export default SkillCard;