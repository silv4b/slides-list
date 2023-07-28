import SlideElement from "../SlideElement/SlideElement";
import { slides } from "../SlideList/Slides";

export default function SlideList() {
  return (
    <>
      {slides.map((slide) => (
        <SlideElement
          title={slide.title}
          postedAt={slide.postedAt}
          link={slide.link}
        />
      ))}
    </>
  );
}
