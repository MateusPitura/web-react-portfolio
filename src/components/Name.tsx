import { memo, type ReactElement } from "react";
import { Link } from "react-router-dom";

function Name(): ReactElement {
  return (
    <nav className="flex-2 flex justify-start items-center">
      <Link to="/" className="hover:opacity-50">
        <span className="text-primary-light text-[2rem] font-customCaveat">
          Mateus Pitura
        </span>
      </Link>
    </nav>
  );
}

export default memo(Name);