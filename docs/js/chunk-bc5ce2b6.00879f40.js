(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bc5ce2b6"],{3751:function(t,e){t.exports='<h2 id="组件说明">组件说明</h2> <p><code>zv-button</code>本组件是封装了普通文本样式和蚂蚁金服<code>a-button</code>和气泡确认框<code>a-popconfirm</code>组合而成的便捷按钮组件。</p> <h2 id="属性api">属性API</h2> <table> <thead> <tr> <th align="left">参数</th> <th align="left">说明</th> <th align="center">类型</th> <th align="center">可选值</th> <th align="left">默认值</th> </tr> </thead> <tbody><tr> <td align="left">type</td> <td align="left">按钮的类型。</td> <td align="center">string</td> <td align="center">&#39;default&#39;（默认）||&#39;danger&#39;（危险）||&#39;weak&#39;（弱），如果是设置了<code>useAntBtn</code>为<code>true</code>，使用蚂蚁按钮来渲染，则可以继承使用<code>primary</code>、<code>dashed</code>、<code>danger</code>、<code>link</code>类型。</td> <td align="left">default</td> </tr> <tr> <td align="left">iconName</td> <td align="left">icon的ClassName类名。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">-</td> </tr> <tr> <td align="left">secondConfirmText</td> <td align="left">二次确认的文本。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">-</td> </tr> <tr> <td align="left">btnStyle</td> <td align="left">按钮的样式。</td> <td align="center">object</td> <td align="center">-</td> <td align="left">{}</td> </tr> <tr> <td align="left">okText</td> <td align="left">二次确认气泡框的确认按钮文本。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">{}</td> </tr> <tr> <td align="left">cancelText</td> <td align="left">二次确认气泡框取消按钮的文本。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">{}</td> </tr> <tr> <td align="left">disabled</td> <td align="left">是否禁用。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">useAntBtn</td> <td align="left">是否使用蚂蚁金服按钮。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">title</td> <td align="left">按钮原生的<code>title</code>属性。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">ghost</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。使按钮背景透明。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">htmlType</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。设置<code>button</code>原生的<code>type</code>值。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">icon</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。设置<code>button</code>原生的<code>type</code>值。</td> <td align="center">boolean</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">loading</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。设置按钮载入状态。</td> <td align="center">boolean || { delay: number }</td> <td align="center">-</td> <td align="left">false</td> </tr> <tr> <td align="left">shape</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。设置按钮形状，可选值为<code>circle</code>、<code>round</code> 或者不设。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">default</td> </tr> <tr> <td align="left">size</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。设置按钮大小，可选值为 small large 或者不设。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">default</td> </tr> <tr> <td align="left">block</td> <td align="left">蚂蚁金服Button属性，仅在本组件<code>useAntBtn</code>为<code>true</code>下才有效。将按钮宽度调整为其父宽度的选项。</td> <td align="center">string</td> <td align="center">-</td> <td align="left">default</td> </tr> </tbody></table> <h2 id="事件（xxxxfunction）">事件（@xxxx=&quot;function&quot;）</h2> <table> <thead> <tr> <th align="left">事件名称</th> <th align="left">说明</th> <th align="left">回调参数</th> </tr> </thead> <tbody><tr> <td align="left">click</td> <td align="left">点击按钮时的回调。在具有二次确认气泡框的模式下，为点击确定按钮的回调。</td> <td align="left">function()</td> </tr> <tr> <td align="left">cancel</td> <td align="left">仅在具有二次确认气泡框的模式下有效，为点击取消按钮的回调。</td> <td align="left">function()</td> </tr> </tbody></table> <h2 id="组件使用代码示例">组件使用代码示例</h2> <pre><code class="language-javascript">&lt;template&gt;\n  &lt;uev-docs title=&quot;便捷按钮组件（ZvButton）&quot; :markHtml=&quot;mark&quot;&gt;\n    &lt;div class=&quot;docs-wrap&quot;&gt;\n      &lt;!-- 示例代码开始 --&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button&gt;最普通的快捷按钮&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button :useAntBtn=&quot;true&quot;&gt;使用蚂蚁金服按钮&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button type=&quot;danger&quot;&gt;危险样式&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button type=&quot;weak&quot;&gt;弱样式&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button :useAntBtn=&quot;true&quot; type=&quot;danger&quot;&gt;危险蚂蚁按钮&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button\n          :useAntBtn=&quot;true&quot;\n          type=&quot;danger&quot;\n          secondConfirmText=&quot;正在进行二次确认？&quot;\n          &gt;二次确认蚂蚁按钮&lt;/zv-button\n        &gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;demo&quot;&gt;\n        &lt;zv-button :disabled=&quot;true&quot;&gt;禁用&lt;/zv-button&gt;\n      &lt;/div&gt;\n      &lt;!-- 示例代码结束 --&gt;\n    &lt;/div&gt;\n  &lt;/uev-docs&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport mark from &#39;./README.md&#39;\n\nexport default {\n  data() {\n    return {\n      mark: mark\n    }\n  }\n}\n&lt;/script&gt;</code></pre> '},a2e9:function(t,e,d){"use strict";d.r(e);var n=d("3751"),l=d.n(n),a={name:"DocsZvButtonIndex",data:function(){return{mark:l.a}}},o=(d("a8cb"),d("2877")),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("uev-docs",{attrs:{title:"便捷按钮组件（ZvButton）",markHtml:t.mark}},[d("div",{staticClass:"docs-wrap"},[d("div",{staticClass:"demo"},[d("zv-button",[t._v("最普通的快捷按钮")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{useAntBtn:!0}},[t._v("使用蚂蚁金服按钮")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{type:"danger"}},[t._v("危险样式")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{type:"weak"}},[t._v("弱样式")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{useAntBtn:!0,type:"danger"}},[t._v("危险蚂蚁按钮")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{useAntBtn:!0,type:"danger",secondConfirmText:"正在进行二次确认？"}},[t._v("二次确认蚂蚁按钮")])],1),d("div",{staticClass:"demo"},[d("zv-button",{attrs:{disabled:!0}},[t._v("禁用")])],1)])])}),[],!1,null,"007a3e72",null);e.default=i.exports},a8cb:function(t,e,d){"use strict";d("f6b2")},f6b2:function(t,e,d){}}]);