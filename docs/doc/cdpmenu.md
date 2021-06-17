# Preview

Please look at the menu of this website.

# Usage Examples

### Minimal Setup

```tsx
<cdp-menu></cdp-menu>
```

### Customization

Change the mobile background to white and add blur effect.

```tsx
{
  <cdp-menu
    config={{
      classList: {
        background: '<md:fixed md:hidden w-screen h-screen bg-white bg-opacity-80 backdrop-filter',
      },
    }}
  ></cdp-menu>;
}
```

###

Control the menu to open or close in mobile mode.

```tsx
let props={ display:true };
props={ ...this.props, display:false };
...
render(){
  <cdp-menu props={props}></cdp-menu>
}
```
