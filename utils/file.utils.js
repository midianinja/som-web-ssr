import axios from 'axios';

export const getBase64 = (file) => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
  return promise;
};

export const uploadImageToStorage = ({ file, id }) => axios({
  method: 'POST',
  url: `${process.env.STORAGE_API_URI}/image/upload/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  data: {
    file: file,
    id,
  },
});

export const uploadPdfDocumentToStorage = ({ file, id, fileName }) =>
  axios({
    method: 'POST',
    url: `${process.env.STORAGE_API_URI}/document/upload/`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      file,
      id,
      fileName
    }
  });

export const uploadSongToStorage = ({ file, id, updateProgress }) =>
  axios({
    method: 'POST',
    url: `${process.env.STORAGE_API_URI}/song/upload/`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      file,
      id
    },
    // `onUploadProgress` allows handling of progress events for uploads
    onUploadProgress: updateProgress
  });
