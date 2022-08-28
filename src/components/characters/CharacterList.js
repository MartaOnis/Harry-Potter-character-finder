import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';

const CharacterList = (props) => {
  const renderCharacters = () => {
    if (props.charactersFilters.length > 0) {
      return props.charactersFilters
        .sort((aName, bName) => {
          if (aName.name.toLowerCase() < bName.name.toLowerCase()) {
            return -1;
          }
          if (aName.name.toLowerCase() > bName.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .map((character, index) => {
          return (
            <CharacterCard
              character={character}
              key={index}
              detailURL={props.detailURL}
              handleDetailURL={props.handleDetailURL}
            />
          );
        });
    } else {
      return (
        <section className="notName-message">
          No hay ningún personaje que coincida con la palabra:
          <p className="notName-message__input"> {props.getInputName}</p>
        </section>
      );
    }
  };
  return (
    <section>
      <ul className="character-list">{renderCharacters()}</ul>
    </section>
  );
};

export default CharacterList;
