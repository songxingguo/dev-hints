title: JWT
categories:
 - 兼容
author: 宋玉
date: 2020-12-19 16:19:33
---
```javascript
let Koa = require('koa');
let Router = require('koa-router');
let bodyparser = require('koa-bodyparser');
let jwt = require('jwt-simple');
let router = new Router()
let app = new Koa();
app.use(bodyparser());
// 可以自己自定义
let secret = 'zhenglei';
// 验证是否登陆
router.post('/login',async(ctx)=>{ 
    let {username,password} = ctx.request.body;
    if(username === 'admin' && password === 'admin'){
       // 通常会查数据库，这里简单的演示
       let token =  jwt.encode(username, secret);
       ctx.body = {
            code:200,
            username,
            token,
       }
    }
});
// 验证是否有权限
router.get('/validate',async(ctx)=>{ 
    let Authorization = ctx.get('authorization')
    let [,token] = Authorization.split(' ');
    if(token){
        try{
            let r = jwt.decode(token,secret);
            ctx.body = {
                code:200,
                username:r,
                token
            }
        }catch(e){
            ctx.body = {
                code:401,
                data:'没有登陆'
            }
        }
    }else{
        ctx.body = {
            code:401,
            data:'没有登陆'
        }
    }
  
});
app.use(router.routes());
app.listen(4000);
```


```javascript
let myJwt = {
    sign(content,secret){
        let r = crypto.createHmac('sha256',secret).update(content).digest('base64');
        return this.base64urlEscape(r)
    },
    base64urlEscape(str){
        return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    },
    toBase64(content){
        return this.base64urlEscape(Buffer.from(JSON.stringify(content)).toString('base64'))
    },
    encode(username,secret){
        let header = this.toBase64({ typ: 'JWT', alg: 'HS256' });
        let content = this.toBase64(username);
        let sign = this.sign([header,content].join('.'),secret);
        return  [header,content,sign].join('.')
    },
    base64urlUnescape(str) {
        str += new Array(5 - str.length % 4).join('=');
        return str.replace(/\-/g, '+').replace(/_/g, '/');
    },
    decode(token,secret){
        let [header,content,sign] = token.split('.');
        let newSign = this.sign([header,content].join('.'),secret);
        if(sign === newSign){
            return Buffer.from(this.base64urlUnescape(content),'base64').toString();
        }else{
            throw new Error('被篡改')
        }
    }
}
```
[原文地址](https://mp.weixin.qq.com/s/CY6vshBYUVp_hWY98b_bCQ)
