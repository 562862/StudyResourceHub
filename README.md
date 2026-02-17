# StudyResourceHub

![Repo Size](https://img.shields.io/github/repo-size/562862/StudyResourceHub?color=success)
![Last Commit](https://img.shields.io/github/last-commit/562862/StudyResourceHub)
![Contributors](https://img.shields.io/github/contributors/562862/StudyResourceHub)
![License](https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-blue)

> 常州大学自动化专业学习资料整理（从大二上开始）

## 项目说明

本仓库用于集中整理常州大学自动化专业的课程复习资料，包含历年试卷、复习笔记、复习网页等内容。

目标是让资料更容易被找到、复用和持续更新，减少重复整理成本。

## 资料导航

### 大二上

| 分类 | 课程 | 包含内容 |
| :--- | :--- | :--- |
| 数学 | [复变函数与积分变换](./大二上/数学/复变函数与积分变换) | 历年试卷、复习笔记、复习网站 |
| 数学 | [概率论与数理统计](./大二上/数学/概率论与数理统计) | 历年试卷、复习笔记、复习网站 |
| 专业课 | [模拟电子技术](./大二上/专业课/模拟电子技术) | 复习题、答案解析、复习网站 |
| 专业课 | [人工智能](./大二上/专业课/人工智能) | 复习笔记、复习网站 |
| 公共课 | [马克思主义基本原理](./大二上/公共课/马克思主义基本原理) | 复习资料、复习网站 |
| 体育 | [排球](./大二上/体育/排球) | 题库、复习网站 |

## 目录结构

```text
StudyResourceHub/
├── README.md
├── LICENSE
└── 大二上/
    ├── README.md
    ├── 数学/
    │   ├── 复变函数与积分变换/
    │   └── 概率论与数理统计/
    ├── 专业课/
    │   ├── 模拟电子技术/
    │   └── 人工智能/
    ├── 公共课/
    │   └── 马克思主义基本原理/
    └── 体育/
        └── 排球/
```

## 贡献方式

欢迎补充更多课程资料：

1. 提交 Issue 说明资料来源和课程信息。
2. Fork 后提交 Pull Request。
3. 新增内容请尽量按现有目录规范放置。
4. 新增课程后可运行 `powershell -ExecutionPolicy Bypass -File ./scripts/update-index.ps1` 自动更新 `大二上/README.md`。

## 免责声明

1. 本仓库为个人学习交流用途，与学校官方无关。
2. 资料仅供学习参考，禁止用于任何商业用途（如打印售卖）。
3. 若涉及版权或内容错误，请通过 Issue 联系处理。
4. 考试范围以任课教师当学期通知为准，本仓库内容仅作辅助。

## 许可证

本仓库采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。
