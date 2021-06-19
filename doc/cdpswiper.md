This component is basically a wrapper of [swiperjs](https://swiperjs.com/). The option in config property is exactly the one in swiperjs.

# Usage Examples

```tsx
render(){
  return  <cdp-swiper config={{ option: { slidesPerView: 1, observeParents: true } }} class="w-full">
        <div class="swiper-wrapper">
          <div class="swiper-slide w-full bg-blue-600 text-white">Slide 1</div>
          <div class="swiper-slide w-full bg-green-600 text-white">Slide 2</div>
          <div class="swiper-slide w-full bg-red-600 text-white">Slide 3</div>
        </div>
      </cdp-swiper>
}
```
