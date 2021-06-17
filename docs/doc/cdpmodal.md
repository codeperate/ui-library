# Usage Examples

### Minimal Setup

```tsx
props: CdpModalProps;
render(){
  return <Host>
      <button onClick={() => this.props = { ...this.props, display: true }} class="place-self-start">Show Modal</button>
      <cdp-modal props={this.props}>
        <div class="bg-white p-4 rounded-lg">This is a modal!</div>
      </cdp-modal>
    </Host>
}
```
