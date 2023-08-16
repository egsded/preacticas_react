interface HolaMundoProps {
    name: string;
}

export const HolaMundo: React.FC<HolaMundoProps> = ({name}) => {
    return(<>
        HolaMundo desde un componente {name}
    </>)
}