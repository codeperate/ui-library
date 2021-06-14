import { Component, h, Host, Prop, State } from '@stencil/core';
import marked from 'marked';
import highlight from 'highlight.js'
const _marked = marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = highlight;
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
})
@Component({
  tag: 'ui-doc'
})
export class UiDoc {
  @Prop() url!: string
  @State() innerHTML: string
  componentWillRender() {
    fetch(this.url).then((res) => res.text()).then((res) => this.innerHTML = _marked(res))
  }
  render() {
    return <Host>
      <div innerHTML={this.innerHTML}></div>
    </Host>
  }
}
