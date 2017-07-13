# 校园助手

项目结构基于饿了么大大的[iReading](https://github.com/attentiveness/reading.git)

### 功能
* 论坛
* 比赛组团
* 社团
* 二手市场
* 校园公告

### 技术栈
* react-native
* redux
* react-navigation
* redux-saga
* codePush

### demo

<img width="300" height="534" src="https://github.com/hyhajnal/campus/blob/master/campus.gif">

### 真机调试
1. 需要开发者id，Bundle Identifier
2. 项目根目录，npm start启动server
3. AppDelegate.m(192.168.2.7为电脑ip，连同个wifi)
``` oc
NSURL *jsCodeLocation;
  
#ifdef DEBUG
//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  [[RCTBundleURLProvider sharedSettings] setJsLocation:@"192.168.2.7"];
#else
  jsCodeLocation = [CodePush bundleURL];
  [Bugly startWithAppId:@"b0c9343009"];
#endif
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
```
4. 手机接入电脑，运行项目ok

### 接入高德地图
可用WebView的方式
``` js
<WebView
  bounces={false}
  scalesPageToFit
  /* source={{ uri: 'http://www.hangge.com', method: 'GET' }} */
  source={require('./map.html')}
  style={{ width: 400, height: 800 }}
/>
```
