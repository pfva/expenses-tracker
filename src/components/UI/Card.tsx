import './Card.css';

type CardProps = {
  className: string
  children: React.ReactNode
}

function Card(props: CardProps) {
  const classes: string = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
