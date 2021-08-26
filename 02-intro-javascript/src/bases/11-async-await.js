/* const getImage = async () => {
  const apiKey = "rdXGkYvUih1yJcx80s79MnXiBeWmBTEM";
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const { data } = await res.json();
  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;
  document.body.appendChild(img);
  console.log(url);
  getImage();
}; */

const getImage = async () => {
  try {
    const apiKey = "rdXGkYvUih1yJcx80s79MnXiBeWmBTEM";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
    console.log(url);
  } catch (error) {
    const img = document.createElement("img");
    img.src =
      "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg";
    document.body.appendChild(img);
    console.error(error);
  }
};

getImage();
