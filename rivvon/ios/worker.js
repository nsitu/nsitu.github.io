importScripts(); // empty but allows future use

onmessage = async ({ data: { track } }) => {
  const vtg = new VideoTrackGenerator();
  const processor = new MediaStreamTrackProcessor({ track });
  const { readable } = processor;

  // simple passthrough transform (replace with e.g. sepia for testing)
  const transformer = new TransformStream({
    async transform(videoFrame, controller) {
      // optionally modify the frame here
      controller.enqueue(videoFrame); // no-op pass-through
    }
  });

  readable
    .pipeThrough(transformer)
    .pipeTo(vtg.writable);

  postMessage({ track: vtg.track }, [vtg.track]);
};
