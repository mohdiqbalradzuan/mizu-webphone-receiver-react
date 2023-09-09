// import logo from './logo.svg';
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Clipboard from "react-clipboard.js";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [incomingCalls, setIncomingCalls] = useState([]);

  const handleAddIncomingCalls = (data) => {
    setIncomingCalls((current) => [...current, data]);
  };

  const handleRemoveIncomingCallsByCallerId = (callid) => {
    setIncomingCalls(
      incomingCallsRef.current.filter((call) => call.callerId !== callid)
    );
    incomingCallsRef.current = incomingCallsRef.current.filter(
      (call) => call.callerId !== callid
    );
  };

  const incomingCallsRef = useRef(incomingCalls);

  useEffect(() => {
    loadWebPhone();

    return function cleanup() {
      console.warn("App.js - Unmount component");
      window.webphone_api.onCallStateChange(null);      
    };
  }, [refreshCount]); // Pass an empty array to only call the function once on mount.

  function loadWebPhone() {
    console.warn("App.js - webphone_api loaded");
    window.webphone_api.onAppStateChange(function (state) {
      if (state === "loaded") {
        //Webphone library is fully loaded here, don't touch any API before this event
        window.webphone_api.start();
      }
    });

    window.webphone_api.onCallStateChange(
      function (event, direction, peername, peerdisplayname, line, callid) {
        // Remove bracket from data by Mizu
        callid = callid.replace("[", "");
        callid = callid.replace("]", "");

        if (event === "setup") {
          // call init
          if (direction === 1) {
            // means it is an outgoing call
            console.warn(
              `PSIM - Outgoing call ${peername} - ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
            );
          } else if (direction === 2) {
            console.warn(
              `PSIM - Incoming call PeerName: ${peername}, DisplayName: ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
            );
            toast.warn(`Incoming call from ${peername}`, {
              position: "top-right",
              autoClose: true,
              closeOnClick: true,
            });

            handleAddIncomingCalls({
              peerName: peername,
              peerDisplayName: peerdisplayname,
              lineNumber: line,
              callerId: callid,
            });

            incomingCallsRef.current.push({
              peerName: peername,
              peerDisplayName: peerdisplayname,
              lineNumber: line,
              callerId: callid,
            });
          }
        } else if (event === "disconnected") {
          // call disconnect
          //you might hide Accept, Reject buttons by something like this:
          console.warn(
            `PSIM - Call disconnected PeerName: ${peername}, DisplayName: ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
          );

          console.warn(
            `PSIM - Incoming calls list: ${JSON.stringify(
              incomingCallsRef.current
            )}`
          );

          handleRemoveIncomingCallsByCallerId(callid);
        }
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        Demo Receiving Calls & Show In Table
      </header>

      <div className="row m-0">
        <header className="App-header">
          Incoming Calls
          <button className="btn btn-primary" onClick={() => setRefreshCount(refreshCount + 1)}>Refresh State {refreshCount}</button>
        </header>
        <div className="col-12 d-flex justify-content-center">
          <div className="incoming-call-container">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-lg-3 fs-1 text-center">Line #</div>
                <div className="col-lg-6 fs-1">Phone number & SIP CallerId</div>
                <div className="col-lg-3 fs-1 text-center">Actions</div>
              </div>
              {incomingCalls.map((call) => {
                return (
                  <div className="row" key={call.callerId}>
                    <div className="col-lg-3 display-grid text-center align-items-center">
                      {call.lineNumber}
                    </div>
                    <div className="col-lg-6 display-grid align-items-center">
                      {call.peerName} - {call.callerId}
                    </div>
                    <div className="col-lg-3  text-center ">
                      <Clipboard
                        data-clipboard-text={call.callerId}
                        className="btn btn-primary"
                      >
                        Copy the Caller Id
                      </Clipboard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
