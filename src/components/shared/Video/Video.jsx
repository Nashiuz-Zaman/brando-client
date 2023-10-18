// react imports
import { useState } from "react";
import PropTypes from "prop-types";

// icons
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

const Video = ({ videoSource }) => {
  const [sound, setSound] = useState(false);

  return (
    <div className="w-full h-full aspect-[16/20] md:aspect-[16/6] relative">
      <video
        className="w-full h-full object-cover"
        muted={sound ? false : true}
        autoPlay
        loop
        src={videoSource}
      ></video>

      <button
        onClick={() => {
          setSound((prev) => !prev);
        }}
        className="absolute bottom-0 right-0 bg-textPrimary text-white"
      >
        {!sound && (
          <div className="flex items-center gap-2 px-2 py-1">
            Sound On <IoVolumeHigh />
          </div>
        )}
        {sound && (
          <div className="flex items-center gap-2 px-2 py-1">
            Sound Off <IoVolumeMute />
          </div>
        )}
      </button>
    </div>
  );
};

Video.propTypes = {
  videoSource: PropTypes.string.isRequired,
};

export default Video;
