import newRequest from "./newRequest";

const uploadImage = async (file, folder) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const res = await newRequest.post(`image/create`, {
          file: reader.result,
          name: file.name,
          folder,
        });
        resolve(res.data.image);
      } catch (err) {
        reject(err);
      }
    };
  });
};

export default uploadImage;
