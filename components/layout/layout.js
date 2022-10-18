import { Fragment, useContext } from "react";

import NotificationContext from "../../store/notification-context";
import Notification from "../notification/notification";
import MainHeader from "./mainHeader/main-header";

function Layout(props) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
