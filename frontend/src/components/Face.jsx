import React, { useRef, useEffect } from "react";
import { Camera } from "@mediapipe/camera_utils";

const VideoAnalyzer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize camera and start video feed
    const camera = new Camera(videoRef.current, {
      onFrame: () => analyzeLighting(),
      width: 640,
      height: 480,
    });
    camera.start();
  }, []);

  const analyzeLighting = async () => {
    const video = videoRef.current;

    // Create image bitmap from video frame to access pixel data
    const imageBitmap = await createImageBitmap(video);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size to video dimensions and draw the image on the canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);

    // Get image data from canvas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const brightness = calculateBrightness(imageData.data);

    // Output lighting feedback to console
    console.log(`Overall Brightness: ${brightness}`);
    if (brightness < 100) console.log("Lighting: Too Dark");
    else if (brightness > 200) console.log("Lighting: Too Bright");
    else console.log("Lighting: Good");
  };

  const calculateBrightness = (data) => {
    let totalBrightness = 0;
    for (let i = 0; i < data.length; i += 4) {
      totalBrightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
    }
    return totalBrightness / (data.length / 4);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline width={640} height={480} />
    </div>
  );
};

export default VideoAnalyzer;
