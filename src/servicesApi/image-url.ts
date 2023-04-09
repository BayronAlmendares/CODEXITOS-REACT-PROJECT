//funcion para recortar imagen a 600 por 400 px
const getFastDownloadImageUrl = (url: string) => {
  if (!url) return "";
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getFastDownloadImageUrl;
