import { useContext } from "react";
import { Link } from "react-router-dom";
import YogaContext from "../../YogaContext";
import DropDown from "../../components/DropDown/DropDown";
import Instructions from "../../components/Instrctions/Instructions";
import "./Yoga.css";
import Header from "../Header/Header";
import "./YogaCanvas.css";

let poseListEasy = ["Tree", "Chair"];
let poseListMedium = ["Cobra", "Triangle", "Dog"];
let poseListHard = ["Warrior", "Shoulderstand"];

function Yoga() {
    const { startYoga } = useContext(YogaContext);

    return (
        <div>
            <Header/>
        <div className="yoga-container">
            <div className="yoga-top">
                <DropDown poseList={poseListEasy} initialName="Easy" />
                <DropDown poseList={poseListMedium} initialName="Medium" />
                <DropDown poseList={poseListHard} initialName="Hard" />
            </div>

            <Instructions />
            <div className="button-container">
                <button onClick={() => startYoga(true)} className="secondary-btn">
                    <Link to="/yoga">Let's Go</Link>
                </button>
            </div>

        </div>
        </div>
         
    );
}

export default Yoga;
