# Modal


<script>
module.exports = {
  data(){
    return {
      modals: {
        classic: false,
        notice: false,
        mini: false,
        large: false,
        small: false
      }
    }
  }
}
</script>

If you want to display some content on demand in a very subtle way, a Now UI Modal is the perfect choice for this.
We created custom modal components based on Bootstrap.

<hr>
To use the modal, first import it:

```js
import {Modal} from 'src/components'
```

Global usage

```js
Vue.component(Modal)
```

Local usage

```js
export default {
 components: {
   Modal
 }
}
```

## Clasic modal

Classic, restyled modal

:::demo
```html
<template>
    <div>
      <n-button type="primary" @click.native="modals.classic = true">
        Classic modal
      </n-button>
      <modal :show.sync="modals.classic" headerClasses="justify-content-center">
        <h4 slot="header" class="title title-up">Modal title</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
          the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
          mouth.</p>
        <template slot="footer">
          <n-button>Nice Button</n-button>
          <n-button type="danger" @click.native="modals.classic = false">Close</n-button>
        </template>
      </modal>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          modals: {
            classic: false
          }
        }
      }
    }
</script>
```
:::

### Notice modal

:::demo
```html
<template>
    <div>
      <n-button type="info" @click.native="modals.notice = true">
        Notice modal
      </n-button>
      <modal :show.sync="modals.notice"
             footer-classes="justify-content-center"
             type="notice">
        <h5 slot="header" class="modal-title">How Do You Become an Affiliate?</h5>
        <template>
          <div class="instruction">
            <div class="row">
              <div class="col-md-8">
                <strong>1. Register</strong>
                <p class="description">The first step is to create an account at <a
                  href="https://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or
                  go for the classic version, whatever works best for you.</p>
              </div>
              <div class="col-md-4">
                <div class="picture">
                  <img src="/img/bg1.jpg" alt="Thumbnail Image" class="rounded img-raised">
                </div>
              </div>
            </div>
          </div>
          <div class="instruction">
            <div class="row">
              <div class="col-md-8">
                <strong>2. Apply</strong>
                <p class="description">The first step is to create an account at <a
                  href="https://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or
                  go for the classic version, whatever works best for you.</p>
              </div>
              <div class="col-md-4">
                <div class="picture">
                  <img src="/img/bg3.jpg" alt="Thumbnail Image" class="rounded img-raised">
                </div>
              </div>
            </div>
          </div>
          <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're
            here to help!</p>
        </template>
        <div slot="footer" class="justify-content-center">
          <n-button type="info" round @click.native="modals.notice = false">Sounds good!</n-button>
        </div>
      </modal>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          modals: {
            notice: false
          }
        }
      }
    }
</script>
```
:::

## Small modal

Best way to notify a user in a nice way.

:::demo
```html
<template>
    <div>
      <n-button @click.native="modals.mini = true">
        Small alert modal
      </n-button>
      <modal :show.sync="modals.mini"
             class="modal-primary"
             :show-close="false"
             header-classes="justify-content-center"
             type="mini">
        <div slot="header" class="modal-profile d-flex justify-content-center align-items-center">
          <i class="now-ui-icons users_circle-08"></i>
        </div>
        <p>Always have an access to your profile</p>
        <template slot="footer">
          <n-button type="neutral" link>Back</n-button>
          <n-button type="neutral" link @click.native="modals.mini = false">Close</n-button>
        </template>
      </modal>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          modals: {
            mini: false
          }
        }
      }
    }
</script>
```
:::

### Optional sizes

Modals have two optional sizes, available via modifier classes to be placed on a
`.modal-dialog`.
These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

:::demo
```html
<template>
    <div>
      <n-button type="primary" @click="modals.large = true">
        Large modal
      </n-button>
       <n-button type="primary" @click="modals.small = true">
          Small modal
       </n-button>
       <modal :show.sync="modals.large"
              modal-classes="modal-lg"
              header-classes="justify-content-center">
               ....
       </modal>
       <modal :show.sync="modals.small"
             modal-classes="modal-sm"
             header-classes="justify-content-center">
        ....
       </modal>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          modals: {
            mini: false
          }
        }
      }
    }
</script>
```
:::


### Modal Props
<props-table component-name="modal"/>

### Modal Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close  | Triggered when modal is closed | - |


### Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for the modal |
|  header  | Header content |
|  close-button  | Content for the close button. As fallback, there is the close icon inside this slot |
|  footer  | Modal footer content |
