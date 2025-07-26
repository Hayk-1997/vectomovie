export const getImageUrl = (imageName) => {
  return new URL(`../src/assets/images/${imageName}`, import.meta.url).href;
};

export const getVideoUrl = (videoName) => {
  return new URL(`../src/assets/trailers/${videoName}`, import.meta.url).href;
};
