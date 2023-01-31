import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const config = {
  mode: "rtc",
  codec: "vp8",
};

function useAgoda() {
  const useClient = createClient(config);
  const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

  return [useClient, useMicrophoneAndCameraTracks];
}

export default useAgoda;
