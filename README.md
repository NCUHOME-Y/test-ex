# 前端组第一次培训作业

#### 前言：其实我在几天前已经写完了，但苦于颜色填充模块使用体验差，所以这几天就一直在修bug（悲）

## 功能实现

### 一.初始页面

![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/a5ee59ed-dab1-4ee2-8890-abbb54dc8e74)


### 二.生成图片
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/d0e62f91-82f4-4ded-8b5c-fd910de4e4fa)

### 三.i18n
下面是在简体中文和English时的界面
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/9ec3ae99-1f95-410c-bcfc-37507a844dcb)

![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/091e8791-acdb-442d-a8af-80581a6b7d34)
代码
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/8e9c250a-3232-4a7d-af04-6ff8834e1cb8)
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/f7315c5d-de4e-4f7a-b5cc-5f84096807dd)
代码的写法我参考了i18next文档与考核文档中给出的github中的代码，还有一点是在csdn上看来的

### 三.颜色填充
这一块我是最后动手的，也花了很多时间，用了很多方法，但是使用起来很差，并且有写方法还有bug
方法一（使用体验差）
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/1ee3f2c9-0e16-433f-bca1-38707e053625)
方法二（这个有bug,但我还是想将它放上来，请大家能够一起帮我找找bug并修改）
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/451465e2-e068-40ac-9232-51fb1a4e3e51)

## 已知问题
### 一.颜色填充
如果使用方法一，其需要点击我想填充的颜色之后再点击地区才能完成颜色填充
如果使用方法二，所有被点击过的地区都会执行新的指令，也就是之前已被点击过并完成颜色填充时也会发生变化

### 二.i18n
当所有text标签字体font-size为30px时
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/cd4236df-0ac9-452d-a560-a952146d5f8a)
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/56b80c22-7a7a-47e1-ae5c-09962313a1a6)
在使用english为页面语言时，“#等级”模块会出现如下的问题
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/3984d6f2-c5bf-4f27-b181-d159fbc15091)
我检查了很久也没发现css和style里有什么问题，所以就改了这一块的字体大小
![image](https://github.com/NCUHOME-Y/test-ex/assets/146162650/2602b2ce-fbdc-4604-9811-9f3211a535ae)

### 三.pull request
我在使我的分支能够create pull request使用了git pull origin main --allow-unrelated-histories命令符，
所以我的分支会出现一些奇奇怪怪的东西，index文件夹里才是我的文件，以及package.json和package-lock.json
















