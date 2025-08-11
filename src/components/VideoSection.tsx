import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    // Prevent click if clicking on controls
    if ((e.target as HTMLElement).closest(".video-controls")) {
      return;
    }
    handlePlayPause();
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Listen for video events
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      const handleTimeUpdate = () => setCurrentTime(video.currentTime);
      const handleLoadedMetadata = () => setDuration(video.duration);

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className="py-24 px-6 relative"
      style={{
        background:
          "radial-gradient(circle at center, #0033CC 0%, #001a66 20%, #000000 60%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-white">See Our AI Solutions in Action</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-content">
            Watch how we transform businesses with cutting-edge AI technology.
            See real examples of our work and understand the impact we can have
            on your organization.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Video Container */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onClick={handleVideoClick}
            >
              {/* Video Container with proper aspect ratio */}
              <div className="aspect-video bg-gradient-to-br from-[#0033CC] to-[#001a66] relative">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  muted={isMuted}
                  loop
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dizpfirmr/video/upload/v1754754008/ads_bswdy3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayPause();
                      }}
                      className="group bg-black/60 hover:bg-black/80 rounded-full p-6 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                    >
                      <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                    </button>
                  </div>
                )}

                {/* Video Controls */}
                {showControls && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm video-controls">
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1 bg-white/20 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProgressClick(e);
                      }}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-[#0033CC] to-[#8F94FF] transition-all duration-100"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>

                    {/* Controls */}
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause();
                          }}
                          className="text-white hover:text-[#8F94FF] transition-colors duration-300"
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6" />
                          )}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMuteToggle();
                          }}
                          className="text-white hover:text-[#8F94FF] transition-colors duration-300"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>

                        {/* Time Display */}
                        <div className="text-white text-sm font-content">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFullscreen();
                        }}
                        className="text-white hover:text-[#8F94FF] transition-colors duration-300"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 font-content">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8F94FF] rounded-full"></div>
                  <span>HD Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8F94FF] rounded-full"></div>
                  <span>Real Examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8F94FF] rounded-full"></div>
                  <span>{formatTime(duration)} watch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-white mb-6 font-content">
            Ready to see how we can transform your business?
          </p>
          <button
            onClick={() => scrollToSection("booking-section")}
            className="bg-gradient-to-r from-[#0033CC] to-[#8F94FF] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 font-content"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
