import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MyScrollUpButton } from "./ScrollUpButton.Style";

export default function ScrollUpButton() {
  const [scrollStatus, setScrollStatus] = useState<"down" | "up">("up");

  const handleScrollUp = () => {
    if (scrollStatus === "down") {
      window.scrollTo({ top: 0, left: 9999, behavior: "smooth" });
      setScrollStatus("up");
    } else {
      window.scrollTo({ top: 9999, left: 0, behavior: "smooth" });
      setScrollStatus("down");
    }
  };
  return (
    <MyScrollUpButton onClick={() => [handleScrollUp()]}>
      {/* se scrollStatus for up, render FDown, se não, render FUp */}
      {scrollStatus == "up" ? <FaArrowDown /> : <FaArrowUp />}
    </MyScrollUpButton>
  );
}
