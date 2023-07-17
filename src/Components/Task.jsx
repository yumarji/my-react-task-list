import { BsTrash3 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export const Task = (props) => {
  const { name } = props;

  return (
    <div>
      <div className="Lista">
        <div>
          <input type="radio" />
          {name}
        </div>
        <div>
          <AiOutlineEdit className="icono1" />
          <BsTrash3 className="icono2" />
        </div>
      </div>
    </div>
  );
};
