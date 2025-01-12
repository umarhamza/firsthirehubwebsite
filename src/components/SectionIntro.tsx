type SectionIntroProps = {
    title: string;
    description: string;
}

const SectionIntro = ({ title, description }: SectionIntroProps) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
    )
}

export default SectionIntro;
