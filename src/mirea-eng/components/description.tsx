

interface DescriptionProps {
    content: string;
}

function Description({ content }: DescriptionProps) {

    return (
        <p className="mt-5 max-w-[80%] text-center text-lg">{ content }</p>
    );
}

export default Description;