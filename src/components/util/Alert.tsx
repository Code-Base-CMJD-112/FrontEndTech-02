interface AlertProps {
  type: "success" | "failed";
  message: string;
  onClose: () => void;
}

export const Alert = ({ type, message, onClose }: AlertProps) => {
  return (
    <div
      className={`mb-6 p-4 rounded-md text-white
         ${type === "success" ? "bg-green-500" : "bg-red-600"}`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold hover:opacity-75">
          x
        </button>
      </div>
    </div>
  );
};
