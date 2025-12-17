import { marked } from "marked";

export default function markdownToHTML(md) {
  return marked(md);
}
