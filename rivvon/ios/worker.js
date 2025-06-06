onmessage = async ({ data: { track } }) => {
  console.log('[Worker] Received track:', track);

  try {
    const vtg = new VideoTrackGenerator();
    const processor = new MediaStreamTrackProcessor({ track });
    const { readable } = processor;

    console.log('[Worker] Initialized processor and generator');

    const transformer = new TransformStream({
      async transform(videoFrame, controller) {
        console.log('[Worker] Frame received:', videoFrame);
        controller.enqueue(videoFrame);
      }
    });

    readable
      .pipeThrough(transformer)
      .pipeTo(vtg.writable)
      .then(() => console.log('[Worker] Pipeline complete'))
      .catch(err => console.error('[Worker] Pipeline error:', err));

    postMessage({ track: vtg.track }, [vtg.track]);
    console.log('[Worker] Sent processed track back to main thread');
  } catch (err) {
    console.error('[Worker] Error initializing pipeline:', err);
  }
};
