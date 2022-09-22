import ImageDataPolyfill from '@canvas/image-data';

if (window !== undefined && window.ImageData == undefined) {
  window.ImageData = ImageDataPolyfill as typeof ImageData;
}
