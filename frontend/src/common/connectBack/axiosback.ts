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
