import React from "react";
import { AgoraVideoPlayer } from "agora-rtc-react";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";

import "@syncfusion/ej2-layouts/styles/material.css";

const WebDashboard = (props) => {
  const { users, tracks } = props;

  const onPanelResize = (args) => {
    if (
      args.element &&
      args.element.querySelector(".e-panel-container .e-panel-content div div div")
    ) {
      let chartObj = args.element.querySelector(".e-panel-container .e-panel-content div div div")
        .ej2_instances[0];
      const height = args.element.querySelector(".e-panel-container .e-panel-content").clientHeight;
      chartObj.height = `${height - 20}`;
      chartObj.width = "100%";
      chartObj.refresh();
    }
  };

  const dummy = new Array(users.length < 6 ? 6 : users.length).fill(0);

  return (
    <div className="control-section" id="predefine_control">
      <div className="content-wrapper" style={{ maxWidth: "95%", margin: "10px auto" }}>
        <DashboardLayoutComponent
          created={() => {}}
          columns={6}
          id="predefine_dashboard"
          cellSpacing={[5, 5]}
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={true}
        >
          <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="6" data-sizey="2">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <AgoraVideoPlayer
                className="vid"
                videoTrack={tracks[1]}
                style={{ height: "95%", width: "570px", margin: "8px auto" }}
              />
            </div>
          </div>
          {dummy.map((e, index) => (
            <div
              id={`user-${index}`}
              className="e-panel"
              data-row="2"
              data-col={index}
              data-sizex="1"
              data-sizey="1"
              key={`user-${index}`}
            >
              <span id="close" className="e-template-icon e-clear-icon" />
              <div className="e-panel-container">
                {users[index]?.videoTrack && (
                  <AgoraVideoPlayer
                    className="vid"
                    videoTrack={users[index].videoTrack}
                    key={users[index].uid}
                    style={{ height: "100%", width: "100%" }}
                  />
                )}
              </div>
            </div>
          ))}
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

export default WebDashboard;
