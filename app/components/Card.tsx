interface ICard {
  heading: string;
  body: string;
}

const Card = ({ heading, body }: ICard) => {
  return (
    <div className="shadow-xl p-10">
      <h1 className="text-lg font-bold text-center pb-10">{heading}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Card;
