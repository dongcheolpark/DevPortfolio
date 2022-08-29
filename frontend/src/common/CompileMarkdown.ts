import { Marked } from "marked-ts"

export const compileMarkDown = (value : string) => {
  return Marked.parse(value);
}
