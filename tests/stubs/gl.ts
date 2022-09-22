import gl from 'gl';

if (window !== undefined) {
  type HTMLCanvasElementGetContextFunction =
    typeof window.HTMLCanvasElement.prototype.getContext;

  window.HTMLCanvasElement.prototype.getContext = function (
    contextId: string,
    options?: any,
  ) {
    const def = window.HTMLCanvasElement.prototype.getContext;
    if (contextId === 'webgl') {
      return gl(400, 400, options);
    } else {
      return def(options);
    }
  } as HTMLCanvasElementGetContextFunction;
}
