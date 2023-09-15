import React from "react";
import { useEffect } from "react";
export const Career = () => {
  console.log("careers");

  useEffect(() => {
    (function () {
      var r,
        d = document,
        gt = d.getElementById,
        cr = d.createElement,
        tg = d.getElementsByTagName,
        id = "aidaform-embed";
      if (!gt.call(d, id)) {
        r = cr.call(d, "script");
        r.id = id;
        r.src = "https://embed.aidaform.com/embed.js";
        (d.head || tg.call(d, "head")[0]).appendChild(r);
      }
    })();
    var i = document.getElementById("aiidalive");

    setTimeout(() => {
      var addressContainer = document.getElementById("aidaform");
      addressContainer.appendChild(i);
    }, 1000);
  }, []);
  return (
    <div className="mt-28 " id="aidaform">
      <div id="aiidalive">
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/bigrig-carreer"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
      </div>
    </div>
  );
};

const aidaformLive = () => {
  /* <div>Form</div> */
};
