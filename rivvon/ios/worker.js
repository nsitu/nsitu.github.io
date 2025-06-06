// worker.js (ESM format, no importScripts)

onmessage = async ({ data: { track } }) => {
  const vtg = new VideoTrackGenerator();
  const processor = new MediaStreamTrackProcessor({ track });
  const { readable } = processor;

  const transformer = new TransformStream({
    async transform(videoFrame, controller) {
      // no-op passthrough (could apply effects here)
      controller.enqueue(videoFrame);
    }
  });

  readable
    .pipeThrough(transformer)
    .pipeTo(vtg.writable);

  postMessage({ track: vtg.track }, [vtg.track]);
};
