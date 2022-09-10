import { Connections } from "./Connections";

class ImageConnection extends Connections {
  constructor() {
    super('image');
  }
  post = async (file:File) => {
    let res = await this.axiosback.postImage(this.src,file);
    res = this.getResponse(res);
    return res!.url as string;
  }
}

export const imageConnection = new ImageConnection();
