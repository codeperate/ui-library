# Preview

Please look at the menu list of this website.

# Usage Examples

### Minimal Setup

```tsx
render(){
  const menuItem = [
  {
    name: 'Home',
    href: '/',
    icon: () => <i class="fas fa-home"></i>,
  }];
  return <cdp-menu-list
    config={{
      menuItems: menuItem,
      anchorPropsFn: href => _href(href, router), // A Function that return onClick and href attribute based on the href value of menuItem.
    }}
    props={{ activePath }} // Provide the current activePath (a string) from your router to calculate the link is active or not
  ></cdp-menu-list>;
}
```

Nested Case:

```tsx
render(){
  const menuItem = [
  {
    name: 'Home',
    href: '/',
    icon: () => <i class="fas fa-home"></i>,
  },
  {
    name: "UI Components",
    isActive: (path) => path.startsWith("/components"),
    icon: () => <i class="far fa-object-ungroup"></i>,
    indicator: () => <i class="fas fa-chevron-right expanded:transform expanded:rotate-90 transition-all"></i>,
    nested: [...nested];
  }]
  return <cdp-menu-list
    config={{
      menuItems: menuItem,
      anchorPropsFn: href => _href(href, router), // A Function that return onClick and href attribute based on the href value of menuItem.
    }}
    props={{ activePath }} // Provide the current activePath (a string) from your router to calculate the link is active or not
  ></cdp-menu-list>;
}
```

### Customization

Change the menu item style.

```tsx
render(){
  const menuItem = [
  {
    name: 'Home',
    href: '/',
    icon: () => <i class="fas fa-home"></i>,
  }];
  return <cdp-menu-list
    config={{
      menuItems: menuItem,
      anchorPropsFn: href => _href(href, router),
      classList:{
         menuItem: "p-3 hover:bg-green-600 hover:text-white grid grid-cols-[max-content,1fr,max-content] gap-4 cursor-pointer"
         menuItemActive:"p-3 bg-green-600 text-white grid grid-cols-[max-content,1fr,max-content] gap-4 cursor-pointer"
      }
    }}
    props={{ activePath }}
  ></cdp-menu-list>;
}
```
