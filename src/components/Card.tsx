type CardProps = {  
    title: string;
    description: string;
    icon: React.ElementType;
}

const Card = ({ title, description, icon }: CardProps) => {
    const Icon = icon;
    return (
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
