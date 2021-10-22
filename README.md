# 安装
- npm install

# 启动
- npm run dev

# demo
<div>
     <a href='https://18023785187.github.io/flappy_bird/' target="_blank">https://18023785187.github.io/flappy_bird/</a>
</div>

# 目录结构

     --- node_modules
     |
     --- public    <- 存放静态文件
     |
     --- src    <- 工作区，主要文件全部在这里
     |     |
     |     --- assets   <- 存放图片音频资源
     |     |
     |     --- components   <- 构成flappy_bird主体的主要组件
     |     |
     |     --- network      <- 资源的集中入口
     |     |
     |     --- utils        <- 用于辅助开发的工具函数
     |     |
     |     --- index.ts     <- 入口函数
     |
     --- getNetworkIp.js    <- 配置ip地址，用于手机调试
     |
     --- package-lock.json
     |
     --- package.json
     |
     --- README.md
     |
     --- tsconfig.json
     |
     --- webpack.config.common.js
     |
     --- webpack.config.dev.js
     |
     --- webpack.config.prod.js
     |
     --- .gitignore

# 功能

- 游戏界面具有<strong>开始功能的按钮play</strong>和<strong>历史最高得分记录score</strong>
- 按下按钮play可以进行游戏，直到小鸟死亡后进入得分面板统计得分

# 玩法

- 游戏主要由小鸟、管子、大地和积分组成
- 玩家需点击屏幕来控制小鸟的走向以躲开管子，同时小鸟不可以接触地面，任何碰撞管子或者接触地面都会导致游戏失败
- 小鸟每次穿过一对管子时得一分，以此类推
