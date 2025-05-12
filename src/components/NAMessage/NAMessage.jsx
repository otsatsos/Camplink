import Button from "../Button/Button.jsx";

const NAMessage = ({ title, message, cta, link }) => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h3 className="text-4xl font-semibold">{title}</h3>
      <p className="my-5 text-xl">{message}</p>
      <Button style="bg-[#e4ac67] p-2 rounded-md hover:bg-[#FAAA48] cursor-pointer" link={link}>
        {cta}
      </Button>
    </div>
  );
};

export default NAMessage;
