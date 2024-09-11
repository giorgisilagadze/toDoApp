interface Props {
  isPopUpVisible: boolean;
  setIsPopUpVisible: (isPopUpVisible: boolean) => void;
}

export default function AddEditCard({
  isPopUpVisible,
  setIsPopUpVisible,
}: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full  flex justify-center items-center transition-opacity duration-500 ${
        isPopUpVisible
          ? "bg-popUpBg opacity-100 z-[99]"
          : "bg-transparent opacity-0 -z-10"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-[98]`}
        onClick={() => setIsPopUpVisible(false)}
      ></div>
    </div>
  );
}
