import { useParams } from "react-router-dom";

const CharacterProfile = ({characters}) => {
    const { id } = useParams();
    const character = characters[id];
    return (
        <>
            <h1>{character.name}</h1>
            <h3>Height: {character.height}</h3>
            <h3>Mass: {character.mass}</h3>
            <h3>Birth Year: {character.birth_year}</h3>
        </>
    )
}

export default CharacterProfile;