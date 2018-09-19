# Storage
本地存储的页面跳转


### 要发送值的页面先存储值

##### 这里的值是JSON数组
```javascript
var storage = window.localStorage;
localStorage.setItem("detial",JSON.stringify([json1[i]]));
```

##### 然后用一个简单的页面跳转

```javascript
window.location.href='detail.html'
```

### 接受页面的接受语句

```javascript
var storage = window.localStorage;
var json1 = JSON.parse(localStorage.getItem("detial"));
```
#### 当接受完页面的值之后，就要清除存储，保证隐私
```javascript
localStorage.removeItem("detial")
```
