## 登录
说明：登录有一个接口
### 1. 密码登录
必选参数：phone：手机号码 password: 密码  请求方式：POST
接口地址：/login/sigin
调用例子：/login/sigin    data: {account:xxx,pwd=yyy}



redis 解决方案：
设置session后直接存储在redis中，然后需要的时候用key值取出来


## 数据库id含义
users表
id(学号)：
user_account(账号)：
user_password(密码)：
class_id(老师所属班级id)：由年级和班号构成（例如：63表示六年级3班）
class(学生所属班级)：
teachter_id(老师id)：和班级表构成一对多关系
name(真实姓名)：
headmaster(班主任)：
status_id(用户状态)： 与出勤表构成一对一关系  -1（请假）  0（正常休息）  1（上课）  -2（迟到）  -3（旷课）
