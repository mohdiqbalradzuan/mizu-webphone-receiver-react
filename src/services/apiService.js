import axios from "axios";
import { config } from "../config";

async function postIncomingCallToPsim(number, xCCallId) {
    const postIncomingCall = await axios.get(
      `${config.WEBAPI_URL}/api/Intercom/CallWithXCCallId/${number}/${xCCallId}`,
    );
    return postIncomingCall.data;
  }

  export {
    postIncomingCallToPsim,
  };