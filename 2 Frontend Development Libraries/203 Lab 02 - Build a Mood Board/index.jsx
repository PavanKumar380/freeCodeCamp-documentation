export const MoodBoardItem = ({color, image, description}) => {
  const moodStyle = {
    backgroundColor: color
  };
  return (
    <div
      className="mood-board-item"
      style={moodStyle}
    >
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

const moodArr = [
  {
    id: 0,
    color: "#145A32",
    image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
    description: "Pathway"
  },
  {
    id: 1,
    color: "#7D6608",
    image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
    description: "Shore"
  },
  {
    id: 2,
    color: "#154360",
    image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
    description: "Ship"
  }
];

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodArr.map(mood => (
          <MoodBoardItem
            key={mood.id}
            color={mood.color}
            image={mood.image}
            description={mood.description}
          />
        ))}
      </div>
    </div>
  );
};