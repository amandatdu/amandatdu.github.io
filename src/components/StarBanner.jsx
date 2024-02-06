import { SparkleIcon } from "../assets/SparkleIcon";
import "./StarBanner.css";

export const StarBanner = () => {
    return (
        <div className="starBanner">
            {/* Left side */}
            <SparkleIcon top="0%" left="2%" size="32px" />
            <SparkleIcon top="68%" left="4%" size="32px" />
            <SparkleIcon top="92%" left="10%" size="16px" />
            <SparkleIcon top="82%" left="25%" size="16px" />
            <SparkleIcon top="49%" left="14%" size="4px" />
            <SparkleIcon top="22%" left="12%" size="8px" />
            <SparkleIcon top="4%" left="21%" size="4px" />
            <SparkleIcon top="34%" left="22%" size="12px" />
            <SparkleIcon top="71%" left="19%" size="8px" />
            <SparkleIcon top="9%" left="31%" size="16px" />

            {/* Right side */}
            <SparkleIcon top="2%" left="75%" size="4px" />
            <SparkleIcon top="3%" left="83%" size="8px" />
            <SparkleIcon top="26%" left="76%" size="16px" />
            <SparkleIcon top="17%" left="88%" size="32px" />
            <SparkleIcon top="12%" left="96%" size="8px" />
            <SparkleIcon top="36%" left="90%" size="16px" />
            <SparkleIcon top="58%" left="82%" size="32px" />
            <SparkleIcon top="65%" left="93%" size="8px" />
            <SparkleIcon top="89%" left="76%" size="8px" />
            <SparkleIcon top="79%" left="87%" size="16px" />
        </div>
    );
};
