# Popovers

Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.

Static popover

:::demo
```html
<template>
   <div class="bd-example bd-example-popover-static">
     <div class="popover bs-popover-top bs-popover-top-docs">
       <div class="arrow"></div>
       <h3 class="popover-header">Popover top</h3>
       <div class="popover-body">
         <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
       </div>
     </div>
   
     <div class="popover bs-popover-right bs-popover-right-docs">
       <div class="arrow"></div>
       <h3 class="popover-header">Popover right</h3>
       <div class="popover-body">
         <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
       </div>
     </div>
   
     <div class="popover bs-popover-bottom bs-popover-bottom-docs">
       <div class="arrow"></div>
       <h3 class="popover-header">Popover bottom</h3>
       <div class="popover-body">
         <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
       </div>
     </div>
   
     <div class="popover bs-popover-left bs-popover-left-docs">
       <div class="arrow"></div>
       <h3 class="popover-header">Popover left</h3>
       <div class="popover-body">
         <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
       </div>
     </div>
   
     <div class="clearfix"></div>
   </div>
</template>
```
:::


### Example

:::demo
```html
<template>
 <div>
 <el-popover
         ref="popoverdemo"
         popper-class="popover popover-primary"
         placement="top"
         width="200"
         trigger="hover">
     <h3 class="popover-header">Popover</h3>
     <div class="popover-body">Here will be some very useful information about his popover.</div>
  </el-popover>
  <n-button v-popover:popoverdemo type="danger">
    Trigger Popover
  </n-button>
</div>
</template>
```
:::


### Four directions

:::demo
```html
<template>
<div class="col-md-6 popover-buttons">
    <el-popover
            ref="popover1"
            popper-class="popover popover-primary"
            placement="left"
            width="200"
            trigger="hover">
        <h3 class="popover-header">Popover On Left</h3>
        <div class="popover-body">Here will be some very useful information about his popover.</div>
    </el-popover>

    <el-popover
            ref="popover2"
            popper-class="popover popover-success"
            placement="top-start"
            width="200"
            trigger="hover">
        <h3 class="popover-header">Popover On Top</h3>
        <div class="popover-body">Here will be some very useful information about his popover.</div>
    </el-popover>

    <el-popover
            ref="popover3"
            popper-class="popover popover-danger"
            placement="right"
            width="200"
            trigger="hover">
        <h3 class="popover-header">Popover On Right</h3>
        <div class="popover-body">Here will be some very useful information about his popover.</div>
    </el-popover>

    <el-popover
            ref="popover4"
            popper-class="popover"
            placement="bottom"
            width="200"
            trigger="hover">
        <h3 class="popover-header">Popover On Bottom</h3>
        <div class="popover-body">Here will be some very useful information about his popover.</div>
    </el-popover>

    <n-button v-popover:popover1 type="default">
        On left
    </n-button>
    <n-button v-popover:popover2 type="default">
        On top
    </n-button>
    <n-button v-popover:popover3 type="default">
        On right
    </n-button>
    <n-button v-popover:popover4 type="default">
        On bottom
    </n-button>
</div>
</template>
```
:::

### Trigger on click

:::demo
```html
<template>
 <div>
 <el-popover
         ref="popovertrigger"
         trigger="click"
         popper-class="popover popover-primary"
         placement="top">
     <h3 class="popover-header">Popover</h3>
     <div class="popover-body">Here will be some very useful information about his popover.</div>
  </el-popover>
  <n-button v-popover:popovertrigger type="danger">
    Trigger Popover
  </n-button>
</div>
</template>
```
:::

:::tip
For more information and options check out [element ui popover](http://element.eleme.io/#/en-US/component/popover)
:::
