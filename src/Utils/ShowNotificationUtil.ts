import { Store } from "react-notifications-component";
import NotificationComponent from "../components/NotificationComponent/Notification";
import { INotification } from "../../types/interfaces";

export const ShowNotification = ({ title, content, time }: INotification) => {
  Store.addNotification({
    content: NotificationComponent({
      title: title,
      message: content,
    }),
    insert: "top",
    container: "top-left",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: time,
    },
  });
};
