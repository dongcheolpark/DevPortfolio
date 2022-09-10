import axios from "axios";

export class AxiosBack {
  private src : string

  constructor() {
    this.src = '/api/';
  }

  public get = async (path:string) => {
    const res = await fetch(this.src + path);
    return res.json();
  }
  public post = async ( path : string, body : any ) => {
    const res = await fetch(this.src + path,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return res.json();
  }
  public postImage =async (path:string, body : File) => {
    const formData = new FormData();
    console.log(body);
    formData.append('image',body);
    const res = await fetch(this.src+path, {
      method : 'POST',
      body : formData
    });
    return res.json();
  }

  public put =async (path:string,body:any) => {
    const res = await fetch(this.src + path,{
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return res.json();
  }
}
