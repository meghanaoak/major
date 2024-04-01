import { useContext, useState } from 'react';
import YogaContext from "../../YogaContext";
import './DropDown.css';
import { poseImages } from '../../utils/pose_images';

export default function DropDown({ poseList, initialName }) {
    const { currentPose, setCurrentPosefunc } = useContext(YogaContext);

    const [dropdownName, setDropdownName] = useState(initialName);

    const handleDropdownClick = (name) => {
        setDropdownName(name);
        setCurrentPosefunc(name);
    };

    return (
        <div className='dropdown dropdown-container'>
            <button
                className="btn btn-secondary dropdown-toggle"
                type='button'
                data-bs-toggle="dropdown"
                id="pose-dropdown-btn"
                aria-expanded="false"
            >
                {dropdownName}
            </button>
            <ul className="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
                {poseList.map((pose) => (
                    <li onClick={() => handleDropdownClick(pose)}>
                        <div className="dropdown-item-container">
                            <p className="dropdown-item-1">{pose}</p>
                            <img
                                src={poseImages[pose]}
                                className="dropdown-img"
                                alt="yoga_images"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
