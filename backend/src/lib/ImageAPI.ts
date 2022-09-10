import fetch from "node-fetch"
import FormData from 'form-data'

export const imageAPI = async (image : Express.Multer.File,name : string) => {
  let url = `https://api.imgbb.com/1/upload?key=${process.env.imagekey}&name=${name}`;
  let body = new FormData();

  body.append("image",image.buffer.toString('base64'));

  return (await fetch(url,{
    method : 'POST',
    body : body
  })).json(); 
}