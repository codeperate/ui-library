This component is basically a wrapper of [popperjs](https://popper.js.org/). The option in config property is exactly the one in popperjs.

# Usage Examples

### Minimal Setup

```tsx
render(){
  return <cdp-tooltip>
        <button>Hover me</button>
        <div slot="tooltip">Hi!</div>
      </cdp-tooltip>;
}
```
