import axios from "axios";

class AxiosBack {
  private src : string

  constructor() {
    this.src = '/api/';
  }

  public post( path : string, body : any ) : any {
    fetch(this.src + path,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then((res) => {

    })
  }
}
