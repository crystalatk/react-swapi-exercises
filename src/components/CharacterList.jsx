import { Link } from "react-router-dom";

const CharacterList = ({characters}) => {
    console.log("This is the characters: ", characters );
    return (
        <>
            <h1>Character List!</h1>
            {characters.map((character, index) => (
                <Link to={`/character/${index}`}>
                    <h2 key={index}>{character.name}</h2>
                </Link>
                )
            )}
        </>
    )
}

export default CharacterList;