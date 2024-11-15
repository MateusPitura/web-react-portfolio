import { NavigateBefore, NavigateNext } from "@mui/icons-material";

interface ArrowProperties {
  next?: boolean;
  onClick?: () => void;
}

export default function Arrow({ onClick, next }: ArrowProperties) {
  return (
    <div onClick={onClick} className="hidden sm:block">
      {next ? (
        <NavigateNext className="absolute top-[50%] right-[-2rem] z-1 text-gray-700 hover:opacity-50 cursor-pointer" />
      ) : (
        <NavigateBefore className="absolute top-[50%] left-[-2rem] z-1 text-gray-700 hover:opacity-50 cursor-pointer" />
      )}
    </div>
  );
}
