import './Button.css';

function Button({ onClickFunction, children, id, addClassName }) {
  return (
    <button
      type='button'
      className={`standard-button ${addClassName}`}
      onClick={onClickFunction}
      data-testid={id}
      id={id}
    >
      { children }
    </button>
  );
}

export default Button;
