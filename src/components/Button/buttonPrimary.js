const ButtonPrimary = ({ title, event, type }) => {
  return (
    <button
      type={type}
      onClick={event}
      className="bg-colorDarkSecondary text-colorLigthTree dark:bg-colorLigthTree dark:text-colorDarkSecondary px-4 py-2 font-semibold rounded-xl"
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;