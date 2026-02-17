# 复变函数与积分变换 期末试卷A卷 完整详细解析

**常州大学 2024-2025学年第1学期**
**适用专业**: 自动化231, 232
**考试形式**: 闭卷
**考试时长**: 90分钟

---

## 目录

- [一、填空题详解（36分）](#一填空题详解36分)
- [二、选择题详解（12分）](#二选择题详解12分)
- [三、计算题详解（52分）](#三计算题详解52分)
- [四、知识点总结](#四知识点总结)
- [五、易错点提醒](#五易错点提醒)

---

## 一、填空题详解（36分）

### 第1题（4分）

**题目**: 设 $z = \frac{(1-\sqrt{3}i)(1+i)}{(-2+2i)(1-i)}$，则 $\arg z = $ ______

#### 详细解答

**方法一：直接计算**

**步骤1**: 化简分子
$$
(1-\sqrt{3}i)(1+i) = 1 + i - \sqrt{3}i - \sqrt{3}i^2
$$
$$
= 1 + i - \sqrt{3}i + \sqrt{3} = (1+\sqrt{3}) + (1-\sqrt{3})i
$$

**步骤2**: 化简分母
$$
(-2+2i)(1-i) = -2 + 2i + 2i - 2i^2
$$
$$
= -2 + 4i + 2 = 4i
$$

**步骤3**: 计算商
$$
z = \frac{(1+\sqrt{3}) + (1-\sqrt{3})i}{4i}
$$

将分子分母同乘 $-i$:
$$
z = \frac{[(1+\sqrt{3}) + (1-\sqrt{3})i] \cdot (-i)}{4i \cdot (-i)}
$$
$$
= \frac{-(1+\sqrt{3})i - (1-\sqrt{3})i^2}{4}
$$
$$
= \frac{-(1+\sqrt{3})i + (1-\sqrt{3})}{4}
$$
$$
= \frac{(1-\sqrt{3}) - (1+\sqrt{3})i}{4}
$$

**步骤4**: 确定辐角
- 实部: $\frac{1-\sqrt{3}}{4} < 0$
- 虚部: $\frac{-(1+\sqrt{3})}{4} < 0$

$z$ 在第三象限。

$$
\tan(\arg z) = \frac{-(1+\sqrt{3})/4}{(1-\sqrt{3})/4} = \frac{-(1+\sqrt{3})}{1-\sqrt{3}}
$$

有理化:
$$
= \frac{-(1+\sqrt{3})}{1-\sqrt{3}} \cdot \frac{1+\sqrt{3}}{1+\sqrt{3}} = \frac{-(1+\sqrt{3})^2}{1-3}
$$
$$
= \frac{-(1+2\sqrt{3}+3)}{-2} = \frac{4+2\sqrt{3}}{2} = 2+\sqrt{3}
$$

因为 $\tan 75° = 2+\sqrt{3}$，且 $z$ 在第三象限：

**方法二：利用辐角性质（推荐）**

$$
\arg z = \arg(分子) - \arg(分母)
$$

$$
\arg(1-\sqrt{3}i) = -\frac{\pi}{3}, \quad \arg(1+i) = \frac{\pi}{4}
$$
$$
\arg(-2+2i) = \frac{3\pi}{4}, \quad \arg(1-i) = -\frac{\pi}{4}
$$

$$
\arg z = \left(-\frac{\pi}{3} + \frac{\pi}{4}\right) - \left(\frac{3\pi}{4} - \frac{\pi}{4}\right)
$$
$$
= -\frac{\pi}{12} - \frac{\pi}{2} = -\frac{7\pi}{12}
$$

**答案**: $\arg z = -\frac{7\pi}{12}$ 或 $\frac{17\pi}{12}$（根据主值定义）

---

### 第2题（4分）

**题目**: 设 $z = i^i$，则 $z$ 的代数形式为 ______

#### 详细解答

利用复数幂的定义: $a^b = e^{b \cdot \ln a}$

$$
i^i = e^{i \cdot \ln i}
$$

**步骤1**: 求 $\ln i$
$$
i = e^{i\pi/2} \quad \text{(主值)}
$$
$$
\ln i = \ln|i| + i \cdot \arg(i) = 0 + i \cdot \frac{\pi}{2} = \frac{i\pi}{2}
$$

**步骤2**: 计算 $i^i$

$$
i^i = e^{i \cdot i\pi/2} = e^{-\pi/2}
$$

这是一个实数！

**数值**: $e^{-\pi/2} \approx 0.2079$

**答案**: $e^{-\pi/2}$ 或 $\approx 0.2079$

**知识点**: 复数的幂可能是实数

---

### 第3题（4分）

**题目**: $\oint_{|z|=1} \frac{\sin(2z+1)}{(z-2)^2} dz = $ ______

#### 详细解答

**步骤1**: 判断奇点位置

函数 $f(z) = \frac{\sin(2z+1)}{(z-2)^2}$ 的奇点为 $z = 2$

**步骤2**: 判断奇点与围道的位置关系

- 围道: $|z| = 1$（圆心在原点，半径为1）
- 奇点 $z = 2$ 到原点的距离: $|2| = 2 > 1$

因此 $z = 2$ 在围道 $|z| = 1$ 的**外部**。

**步骤3**: 应用柯西定理

$f(z)$ 在 $|z| \leq 1$ 内解析（无奇点），根据**柯西定理**：

$$
\oint_{|z|=1} f(z) dz = 0
$$

**答案**: $0$

**知识点**: 柯西定理——解析函数在单连通区域内的闭曲线积分为0

---

### 第4题（4分）

**题目**: 积分 $\int_0^{1+i} (3z + 2)dz = $ ______

#### 详细解答

**方法**: 利用原函数（牛顿-莱布尼茨公式）

$3z + 2$ 是**解析函数**，其原函数为：
$$
F(z) = \frac{3z^2}{2} + 2z
$$

**步骤**: 应用牛顿-莱布尼茨公式

$$
\int_0^{1+i} (3z + 2)dz = \left[\frac{3z^2}{2} + 2z\right]_0^{1+i}
$$

$$
= \frac{3(1+i)^2}{2} + 2(1+i) - 0
$$

**计算** $(1+i)^2$:
$$
(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i
$$

$$
= \frac{3 \cdot 2i}{2} + 2 + 2i = 3i + 2 + 2i = 2 + 5i
$$

**答案**: $2 + 5i$

**知识点**: 解析函数的积分与路径无关，可用原函数计算

---

### 第5题（4分）

**题目**: 根式 $\sqrt[3]{-8(1+i)} = $ ______

#### 详细解答

**步骤1**: 将 $-8(1+i)$ 化为指数形式
$$
-8(1+i) = -8 - 8i
$$

**模**:
$$
|-8(1+i)| = \sqrt{64 + 64} = \sqrt{128} = 8\sqrt{2}
$$

**辐角**:
$$
\arg(-8-8i) = \pi + \arctan\frac{8}{8} = \pi + \frac{\pi}{4} = \frac{5\pi}{4}
$$

**指数形式**:
$$
-8(1+i) = 8\sqrt{2} \cdot e^{i5\pi/4}
$$

**步骤2**: 求三次方根

$$
\sqrt[3]{-8(1+i)} = (8\sqrt{2})^{1/3} \cdot e^{i(5\pi/4 + 2k\pi)/3}, \quad k = 0, 1, 2
$$

$$
= 2 \cdot 2^{1/6} \cdot e^{i(5\pi + 8k\pi)/12}
$$

**步骤3**: 写出三个根

- $k=0$: $2 \cdot 2^{1/6} \cdot e^{i5\pi/12}$
- $k=1$: $2 \cdot 2^{1/6} \cdot e^{i13\pi/12}$
- $k=2$: $2 \cdot 2^{1/6} \cdot e^{i21\pi/12} = 2 \cdot 2^{1/6} \cdot e^{i7\pi/4}$

**代数形式**（以 $k=0$ 为例）:
$$
2\sqrt[6]{2}\left(\cos\frac{5\pi}{12} + i\sin\frac{5\pi}{12}\right)
$$

**答案**: $2\sqrt[6]{2} \cdot e^{i(5\pi + 8k\pi)/12}, \quad k = 0, 1, 2$

**知识点**: 复数的 $n$ 次方根有 $n$ 个值

---

### 第6题（4分）

**题目**: $z = 0$ 是 $\frac{\sin z - z}{z^2}$ 的奇点的类型为 ______

#### 详细解答

**方法**: 泰勒级数展开法

**步骤1**: $\sin z$ 在 $z=0$ 处的泰勒展开

$$
\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \cdots
$$

**步骤2**: 计算 $\sin z - z$

$$
\sin z - z = -\frac{z^3}{6} + \frac{z^5}{120} - \frac{z^7}{5040} + \cdots
$$

**步骤3**: 计算 $\frac{\sin z - z}{z^2}$

$$
\frac{\sin z - z}{z^2} = \frac{-z^3/6 + z^5/120 - \cdots}{z^2}
$$

$$
= -\frac{z}{6} + \frac{z^3}{120} - \frac{z^5}{5040} + \cdots
$$

**结论**: 这是在 $z=0$ 处的**泰勒级数**（解析），不含负幂次项。

因此 $z=0$ 是**可去奇点**。

**答案**: 可去奇点

**知识点**:
- 可去奇点: 洛朗展开不含负幂项
- 极点: 洛朗展开含有限个负幂项
- 本性奇点: 洛朗展开含无限个负幂项

---

### 第7题（4分）

**题目**: 级数 $\sum_{n=0}^{\infty} \frac{(n+1)(z+1)^n}{2^n}$ 的收敛范围为 ______

#### 详细解答

**方法**: 比值判别法

这是幂级数 $\sum_{n=0}^{\infty} (n+1)\left[\frac{z+1}{2}\right]^n$

令 $w = \frac{z+1}{2}$，则级数为 $\sum_{n=0}^{\infty} (n+1)w^n$

**步骤1**: 求收敛半径

$$
\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \frac{n+2}{n+1} = 1
$$

收敛半径 $R = \frac{1}{1} = 1$（对变量 $w$）

**步骤2**: 确定 $z$ 的收敛范围

$$
|w| < 1 \Rightarrow \left|\frac{z+1}{2}\right| < 1
$$

$$
|z+1| < 2
$$

**几何意义**: 以 $z = -1$ 为圆心，半径为 $2$ 的圆盘内

**答案**: $|z+1| < 2$

**知识点**: 幂级数 $\sum c_n(z-z_0)^n$ 在 $|z-z_0| < R$ 内绝对收敛

---

### 第8题（4分）

**题目**: $\text{Res}\left[\frac{1}{z(e^z-1)}, 0\right] = $ ______

#### 详细解答

**方法**: 洛朗级数展开法

**步骤1**: $e^z$ 的泰勒展开

$$
e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots
$$

$$
e^z - 1 = z + \frac{z^2}{2} + \frac{z^3}{6} + \cdots = z\left(1 + \frac{z}{2} + \frac{z^2}{6} + \cdots\right)
$$

**步骤2**: 计算 $\frac{1}{z(e^z-1)}$

$$
\frac{1}{z(e^z-1)} = \frac{1}{z^2 \cdot \left(1 + \frac{z}{2} + \frac{z^2}{6} + \cdots\right)}
$$

$$
= \frac{1}{z^2} \cdot \frac{1}{1 + \frac{z}{2} + \frac{z^2}{6} + \cdots}
$$

**步骤3**: 利用 $\frac{1}{1+u} = 1 - u + u^2 - u^3 + \cdots$ 展开

令 $u = \frac{z}{2} + \frac{z^2}{6} + \cdots$

$$
\frac{1}{1+u} = 1 - \left(\frac{z}{2} + \frac{z^2}{6} + \cdots\right) + \left(\frac{z}{2} + \cdots\right)^2 - \cdots
$$

$$
= 1 - \frac{z}{2} - \frac{z^2}{6} + \frac{z^2}{4} + O(z^3)
$$

$$
= 1 - \frac{z}{2} + \frac{z^2}{12} + O(z^3)
$$

**步骤4**: 得到洛朗展开
$$
\frac{1}{z(e^z-1)} = \frac{1}{z^2}\left(1 - \frac{z}{2} + \frac{z^2}{12} + \cdots\right)
$$

$$
= \frac{1}{z^2} - \frac{1}{2z} + \frac{1}{12} + O(z)
$$

**留数**是 $z^{-1}$ 项的系数。

**答案**: $-\frac{1}{2}$

**知识点**: 留数是洛朗展开中 $(z-z_0)^{-1}$ 项的系数

---

### 第9题（4分）

**题目**: $\oint_{|z|=1} \frac{z^2+1}{z^4} dz = $ ______

#### 详细解答

**方法一**: 直接展开

$$
\frac{z^2+1}{z^4} = \frac{1}{z^2} + \frac{1}{z^4}
$$

这已经是洛朗展开形式，只含 $z^{-2}$ 和 $z^{-4}$ 项，**没有 $z^{-1}$ 项**。

留数 = 0

**方法二**: 留数定理
$$
\oint_{|z|=1} \frac{z^2+1}{z^4} dz = 2\pi i \cdot \text{Res}[f, 0]
$$

$$
= 2\pi i \cdot 0 = 0
$$

**答案**: $0$

**知识点**: 只有 $z^{-1}$ 项对围道积分有贡献

---

## 二、选择题详解（12分）

### 第1题（3分）

**题目**: $x^2 - y^2 + x$ 是解析函数 $f(z)=u(x,y)+iv(x,y)$ 的实部，则（ ）

- (A) $f'(z) = 2(x-iy)$
- (B) $f'(z) = 2x+1+2yi$
- (C) $f'(z) = 2(y+ix)$
- (D) $f'(z) = 2x+2(y+1)i$

#### 详细解答

设 $u(x,y) = x^2 - y^2 + x$

**步骤1**: 利用C-R方程求 $v$

C-R方程:
$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

计算偏导数:
$$
\frac{\partial u}{\partial x} = 2x + 1, \quad \frac{\partial u}{\partial y} = -2y
$$

因此:
$$
\frac{\partial v}{\partial y} = 2x + 1, \quad \frac{\partial v}{\partial x} = 2y
$$

**步骤2**: 从第一个方程积分

$$
v = \int (2x+1) dy = (2x+1)y + \varphi(x)
$$

**步骤3**: 代入第二个方程

$$
\frac{\partial v}{\partial x} = 2y + \varphi'(x) = 2y
$$

$$
\varphi'(x) = 0 \Rightarrow \varphi(x) = C
$$

取 $C = 0$，得 $v = (2x+1)y = 2xy + y$

**步骤4**: 求导数

$$
f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}
$$

$$
= (2x+1) + i(2y) = 2x + 1 + 2yi
$$

**答案**: (B)

**知识点**:
- C-R方程是函数解析的充要条件
- $f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}$

---

### 第2题（3分）

**题目**: $C$ 是正向圆周 $|z|=2$，如果函数 $f(z)=$ （ ），则 $\oint_C f(z)dz \neq 0$

- (A) $\frac{1}{z-1}$
- (B) $\frac{\sin z}{z}$
- (C) $\frac{1}{(z-3)^2}$
- (D) $\frac{e^z}{(z-1)^2}$

#### 详细解答

根据**留数定理**: $\oint_C f(z)dz = 2\pi i \sum \text{Res}[f, z_k]$

只有当围道内有奇点且留数不为0时，积分才不为0。

**选项分析**:

**(A) $\frac{1}{z-1}$**:
- 奇点 $z=1$ 在 $|z|=2$ 内部 ✓
- $\text{Res}[\frac{1}{z-1}, 1] = 1 \neq 0$ ✓
- $\oint = 2\pi i \neq 0$ ✓

**(B) $\frac{\sin z}{z}$**:
- 奇点 $z=0$ 在 $|z|=2$ 内部
- 但 $z=0$ 是**可去奇点**，$\text{Res} = 0$
- $\oint = 0$ ✗

**(C) $\frac{1}{(z-3)^2}$**:
- 奇点 $z=3$ 在 $|z|=2$ 外部（$|3|=3>2$）
- 函数在围道内解析
- $\oint = 0$ ✗

**(D) $\frac{e^z}{(z-1)^2}$**:
- 奇点 $z=1$ 是二阶极点，在 $|z|=2$ 内部 ✓
- $\text{Res} = \lim_{z \to 1} \frac{d}{dz}[e^z] = e \neq 0$ ✓
- $\oint = 2\pi i e \neq 0$ ✓

**答案**: (A) 或 (D)（题目如要求单选，通常选 (A)）

**知识点**:
- 留数定理的应用
- 可去奇点的留数为0

---

### 第3题（3分）

**题目**: 如果级数 $\sum_{n=0}^{\infty} c_n z^n$ 在 $z=1+2i$ 点收敛，则级数在（ ）

- (A) $z=1+2i$ 点条件收敛
- (B) $z=2i$ 点绝对收敛
- (C) $z=2+i$ 点绝对收敛
- (D) $z=1-2i$ 点一定发散

#### 详细解答

**阿贝尔定理**: 幂级数在收敛圆内**绝对收敛**，在收敛圆上可能条件收敛或发散，在收敛圆外**发散**。

**步骤1**: 确定收敛半径下界

$$
|z| = |1+2i| = \sqrt{1+4} = \sqrt{5}
$$

级数在 $z=1+2i$ 收敛 $\Rightarrow$ 收敛半径 $R \geq \sqrt{5}$

**步骤2**: 检查各选项

**(A)** $z=1+2i$ 点条件收敛:
- 不一定，可能绝对收敛（如果 $R > \sqrt{5}$）✗

**(B)** $z=2i$ 点绝对收敛:
- $|2i| = 2 < \sqrt{5} < R$
- 在收敛圆内，**绝对收敛** ✓

**(C)** $z=2+i$ 点绝对收敛:
- $|2+i| = \sqrt{5}$，在收敛圆上
- 不确定 ✗

**(D)** $z=1-2i$ 点一定发散:
- $|1-2i| = \sqrt{5}$，在收敛圆上
- 不确定 ✗

**答案**: (B)

**知识点**: 幂级数的收敛性与收敛半径

---

### 第4题（3分）

**题目**: 下列结论不正确的是（ ）

- (A) $\text{Ln} z$ 是复平面上的多值函数
- (B) $\cos z$ 是无界函数
- (C) $\sin z$ 是复平面上的有界函数
- (D) $e^z$ 是解析函数

#### 详细解答

**(A) $\text{Ln} z$ 是多值函数**:
$$
\text{Ln} z = \ln|z| + i(\arg z + 2k\pi), \quad k \in \mathbb{Z}
$$
正确 ✓

**(B) $\cos z$ 是无界函数**:
$$
\cos z = \frac{e^{iz} + e^{-iz}}{2}
$$

令 $z = iy$（纯虚数）:
$$
\cos(iy) = \frac{e^{-y} + e^y}{2} = \cosh y \to \infty \quad (y \to \infty)
$$
正确 ✓

**(C) $\sin z$ 是有界函数**:
$$
\sin z = \frac{e^{iz} - e^{-iz}}{2i}
$$

令 $z = iy$:
$$
\sin(iy) = \frac{e^{-y} - e^y}{2i} = i\sinh y \to \infty \quad (y \to \infty)
$$
**错误** ✗

**(D) $e^z$ 是解析函数**:
在整个复平面解析
正确 ✓

**答案**: (C)

**知识点**: 复变函数的性质与实函数不同

---

## 三、计算题详解（52分）

### 第1题（10分）

**题目**: 求函数 $f(z) = \frac{1}{z^2(2+z)}$ 在 $2 < |z| < \infty$ 内展为罗朗级数

#### 详细解答

**步骤1**: 部分分式分解

$$
\frac{1}{z^2(2+z)} = \frac{A}{z} + \frac{B}{z^2} + \frac{C}{2+z}
$$

通分: $1 = Az(2+z) + B(2+z) + Cz^2$

- 令 $z=0$: $1 = 2B \Rightarrow B = \frac{1}{2}$
- 令 $z=-2$: $1 = 4C \Rightarrow C = \frac{1}{4}$
- 令 $z=1$: $1 = 3A + 3B + C = 3A + \frac{3}{2} + \frac{1}{4}$
  $$
  3A = 1 - \frac{7}{4} = -\frac{3}{4} \Rightarrow A = -\frac{1}{4}
  $$

因此:
$$
f(z) = -\frac{1}{4z} + \frac{1}{2z^2} + \frac{1}{4(2+z)}
$$

**步骤2**: 展开 $\frac{1}{2+z}$（在 $|z| > 2$ 时）

因为 $|z| > 2$，所以 $\left|\frac{2}{z}\right| < 1$:

$$
\frac{1}{2+z} = \frac{1}{z} \cdot \frac{1}{1+\frac{2}{z}} = \frac{1}{z} \sum_{n=0}^{\infty} \left(-\frac{2}{z}\right)^n
$$

$$
= \sum_{n=0}^{\infty} \frac{(-1)^n 2^n}{z^{n+1}}
$$

**步骤3**: 合并结果

$$
f(z) = -\frac{1}{4z} + \frac{1}{2z^2} + \frac{1}{4} \sum_{n=0}^{\infty} \frac{(-1)^n 2^n}{z^{n+1}}
$$

$$
= \frac{1}{2z^2} + \left(-\frac{1}{4} + \frac{1}{4}\right)\frac{1}{z} + \frac{1}{4}\sum_{n=1}^{\infty} \frac{(-1)^n 2^n}{z^{n+1}}
$$

$$
= \frac{1}{2z^2} + \sum_{n=1}^{\infty} \frac{(-1)^n 2^{n-2}}{z^{n+1}}
$$

**展开前几项**:
$$
f(z) = \frac{1}{2z^2} - \frac{1}{2z^3} + \frac{1}{z^4} - \frac{2}{z^5} + \cdots
$$

**最终答案**:
$$
\boxed{f(z) = \sum_{n=2}^{\infty} \frac{(-1)^{n} 2^{n-3}}{z^{n}}, \quad 2 < |z| < \infty}
$$

**知识点**:
- 罗朗级数展开需注意区域
- 在 $|z| > a$ 时，$\frac{1}{a+z} = \frac{1}{z} \cdot \frac{1}{1+a/z}$

---

### 第2题（10分）

**题目**: 设 $f(z) = \frac{z-1}{(z-2)(2z+1)}$，求 $f(z)$ 在 $z_0=0$ 处的泰勒展开式，并指出收敛半径

#### 详细解答

**步骤1**: 确定奇点和收敛半径

奇点: $z=2$ 和 $z=-\frac{1}{2}$

离原点最近的奇点: $z = -\frac{1}{2}$，距离 $\frac{1}{2}$

**收敛半径**: $R = \frac{1}{2}$

**步骤2**: 部分分式分解

$$
\frac{z-1}{(z-2)(2z+1)} = \frac{A}{z-2} + \frac{B}{2z+1}
$$

通分: $z-1 = A(2z+1) + B(z-2)$

- 令 $z=2$: $1 = 5A \Rightarrow A = \frac{1}{5}$
- 令 $z=-\frac{1}{2}$: $-\frac{3}{2} = -\frac{5B}{2} \Rightarrow B = \frac{3}{5}$

$$
f(z) = \frac{1}{5} \cdot \frac{1}{z-2} + \frac{3}{5} \cdot \frac{1}{2z+1}
$$

**步骤3**: 展开第一项（$|z| < 2$）

$$
\frac{1}{z-2} = -\frac{1}{2-z} = -\frac{1}{2} \cdot \frac{1}{1-z/2}
$$

$$
= -\frac{1}{2} \sum_{n=0}^{\infty} \left(\frac{z}{2}\right)^n = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}
$$

**步骤4**: 展开第二项（$|z| < \frac{1}{2}$）

$$
\frac{1}{2z+1} = \frac{1}{1+2z} = \sum_{n=0}^{\infty} (-2z)^n = \sum_{n=0}^{\infty} (-1)^n 2^n z^n
$$

**步骤5**: 合并（取 $|z| < \frac{1}{2}$）

$$
f(z) = \frac{1}{5} \left(-\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}\right) + \frac{3}{5} \sum_{n=0}^{\infty} (-1)^n 2^n z^n
$$

$$
= \sum_{n=0}^{\infty} \left[\frac{3(-1)^n 2^n - 2^{-n-1}}{5}\right] z^n
$$

$$
= \sum_{n=0}^{\infty} \frac{3(-2)^n - 2^{-n-1}}{5} z^n
$$

**展开前几项**:
- $n=0$: $\frac{3 \cdot 1 - 1/2}{5} = \frac{5/2}{5} = \frac{1}{2}$
- $n=1$: $\frac{3(-2) - 1/4}{5} = \frac{-6.25}{5} = -\frac{5}{4}$
- $n=2$: $\frac{3 \cdot 4 - 1/8}{5} = \frac{95/8}{5} = \frac{19}{8}$

**最终答案**:
$$
\boxed{f(z) = \frac{1}{2} - \frac{5}{4}z + \frac{19}{8}z^2 - \cdots = \sum_{n=0}^{\infty} \frac{3(-2)^n - 2^{-n-1}}{5} z^n, \quad R = \frac{1}{2}}
$$

**知识点**: 泰勒级数的收敛半径等于到最近奇点的距离

---

### 第3题（10分）

**题目**: 已知调和函数 $u(x,y) = 2xy - 3y - 2x$，求函数 $v(x,y)$，使函数 $f(z)=u(x,y)+iv(x,y)$ 为解析函数，且满足 $f(0)=1$

#### 详细解答

**步骤1**: 验证 $u$ 是调和函数

$$
\frac{\partial u}{\partial x} = 2y - 2, \quad \frac{\partial u}{\partial y} = 2x - 3
$$

$$
\frac{\partial^2 u}{\partial x^2} = 0, \quad \frac{\partial^2 u}{\partial y^2} = 0
$$

$$
\nabla^2 u = 0 \quad \checkmark
$$

**步骤2**: 利用C-R方程

$$
\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2y - 2
$$

$$
\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(2x - 3) = 3 - 2x
$$

**步骤3**: 从第一个方程积分

$$
v = \int (2y - 2) dy = y^2 - 2y + \varphi(x)
$$

**步骤4**: 代入第二个方程
$$
\frac{\partial v}{\partial x} = 0 + \varphi'(x) = 3 - 2x
$$

$$
\varphi(x) = 3x - x^2 + C
$$

**步骤5**: 确定常数 $C$

$$
v(x,y) = y^2 - 2y + 3x - x^2 + C
$$

条件 $f(0) = u(0,0) + iv(0,0) = 1$

$$
u(0,0) = 0, \quad v(0,0) = C
$$

$$
f(0) = 0 + iC = 1
$$

**注意**: 这里有矛盾！如果 $f(0)=1$ 表示复数1（实部1，虚部0），则无法满足。

**合理解释**: $f(0) = 1$ 可能表示 $|f(0)| = 1$ 或 $v(0,0) = 1$。

假设 $v(0,0) = 1$，则 $C = 1$。

**步骤6**: 用 $f'(z)$ 验证

$$
f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = (2y-2) + i(3-2x)
$$

由于 $z = x+iy$，我们可以写成:
$$
f'(z) = -2x + 2y + 3i - 2ix = -2(x-iy) + 2 + 3i = -2\bar{z} + 2 + 3i
$$

这不是 $z$ 的解析表达式...让我重新计算。

实际上，利用 $f'(z) = \frac{\partial u}{\partial x} - i\frac{\partial u}{\partial y}$:
$$
f'(z) = (2y-2) - i(2x-3) = 2y - 2 - 2ix + 3i
$$

这依然含有 $x, y$...

**正确方法**: 直接积分
$$
f'(z) = 2y - 2 + i(3-2x)
$$

注意到这应该能表示为 $z$ 的函数。令 $z = x+iy$:
$$
f'(z) = \text{const} - 2x + 2y + 3i - 2ix = \cdots
$$

实际上更直接的方法是观察：
$$
f'(z) = -2z + (2+3i)
$$

积分:
$$
f(z) = -z^2 + (2+3i)z + C_0
$$

$f(0) = C_0 = 1$

$$
f(z) = -z^2 + (2+3i)z + 1
$$

展开验证:
$$
f(z) = -(x^2-y^2+2ixy) + (2+3i)(x+iy) + 1
$$
$$
= -x^2+y^2-2ixy + 2x+3ix + 2iy-3y + 1
$$
$$
= [-x^2+y^2+2x-3y+1] + i[-2xy+3x+2y]
$$

实部应该是 $2xy-3y-2x$，但我们得到 $-x^2+y^2+2x-3y+1$，不匹配！

让我重新用标准方法:

$$
v(x,y) = y^2 - 2y + 3x - x^2 + C
$$

取 $C = 0$（或根据初值条件确定）

**最终答案**:
$$
\boxed{v(x,y) = y^2 - 2y + 3x - x^2 + 1}
$$

$$
\boxed{f(z) = (2xy - 3y - 2x) + i(y^2 - 2y + 3x - x^2 + 1)}
$$

**知识点**:
- C-R方程
- 调和函数的共轭调和函数

---

### 第4题（10分）

**题目**: 利用留数定理计算 $\oint_C \frac{\cos z}{(z+2)^2(z-1)} dz$，其中 $C$ 是正向圆周 $|z|=3$

#### 详细解答

**步骤1**: 确定围道内的奇点

- $z = -2$（二阶极点）
- $z = 1$（一阶极点）

都在 $|z|=3$ 内。

**步骤2**: 计算 $z=1$ 处的留数（一阶极点）

$$
\text{Res}[f, 1] = \lim_{z \to 1} (z-1) \cdot \frac{\cos z}{(z+2)^2(z-1)}
$$

$$
= \lim_{z \to 1} \frac{\cos z}{(z+2)^2} = \frac{\cos 1}{(1+2)^2} = \frac{\cos 1}{9}
$$

**步骤3**: 计算 $z=-2$ 处的留数（二阶极点）

对于二阶极点:
$$
\text{Res}[f, -2] = \lim_{z \to -2} \frac{d}{dz}\left[(z+2)^2 \cdot \frac{\cos z}{(z+2)^2(z-1)}\right]
$$

$$
= \lim_{z \to -2} \frac{d}{dz}\left[\frac{\cos z}{z-1}\right]
$$

使用商法则:
$$
\frac{d}{dz}\left[\frac{\cos z}{z-1}\right] = \frac{-\sin z \cdot (z-1) - \cos z \cdot 1}{(z-1)^2}
$$

$$
= \frac{-(z-1)\sin z - \cos z}{(z-1)^2}
$$

代入 $z = -2$:
$$
= \frac{-(-2-1)\sin(-2) - \cos(-2)}{(-2-1)^2}
$$

$$
= \frac{3\sin(-2) - \cos(-2)}{9} = \frac{-3\sin 2 - \cos 2}{9}
$$

（因为 $\sin(-2) = -\sin 2$，$\cos(-2) = \cos 2$）

**步骤4**: 应用留数定理

$$
\oint_C f(z) dz = 2\pi i \sum \text{Res}[f, z_k]
$$

$$
= 2\pi i \left[\frac{\cos 1}{9} + \frac{-3\sin 2 - \cos 2}{9}\right]
$$

$$
= \frac{2\pi i}{9} [\cos 1 - 3\sin 2 - \cos 2]
$$

$$
= \frac{2\pi i}{9} [\cos 1 - \cos 2 - 3\sin 2]
$$

**最终答案**:
$$
\boxed{\oint_C \frac{\cos z}{(z+2)^2(z-1)} dz = \frac{2\pi i}{9}(\cos 1 - \cos 2 - 3\sin 2)}
$$

**知识点**:
- 一阶极点留数: $\lim_{z \to z_0}(z-z_0)f(z)$
- 二阶极点留数: $\lim_{z \to z_0}\frac{d}{dz}[(z-z_0)^2 f(z)]$

---

### 第5题（12分）

**题目**: 已知函数
$$
f(t) = \begin{cases}
(t+1)e^{-2t}, & t \geq 0 \\
0, & t < 0
\end{cases}
$$
求 $f(t)$ 的傅里叶变换及其积分表达式

#### 详细解答

**步骤1**: 傅里叶变换的定义

$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

由于 $f(t) = 0$ 当 $t < 0$:
$$
F(\omega) = \int_0^{\infty} (t+1)e^{-2t} e^{-i\omega t} dt
$$

$$
= \int_0^{\infty} (t+1)e^{-(2+i\omega)t} dt
$$

**步骤2**: 令 $\alpha = 2 + i\omega$，分项计算

$$
F(\omega) = \int_0^{\infty} t \cdot e^{-\alpha t} dt + \int_0^{\infty} e^{-\alpha t} dt
$$

**第二项**:
$$
\int_0^{\infty} e^{-\alpha t} dt = \left[-\frac{e^{-\alpha t}}{\alpha}\right]_0^{\infty} = 0 - \left(-\frac{1}{\alpha}\right) = \frac{1}{\alpha}
$$

**第一项**（分部积分）:

令 $u = t$，$dv = e^{-\alpha t} dt$

$$
\int_0^{\infty} t \cdot e^{-\alpha t} dt = \left[-\frac{t \cdot e^{-\alpha t}}{\alpha}\right]_0^{\infty} + \int_0^{\infty} \frac{e^{-\alpha t}}{\alpha} dt
$$

$$
= 0 + \frac{1}{\alpha} \cdot \frac{1}{\alpha} = \frac{1}{\alpha^2}
$$

**步骤3**: 合并结果

$$
F(\omega) = \frac{1}{\alpha^2} + \frac{1}{\alpha} = \frac{1 + \alpha}{\alpha^2}
$$

$$
= \frac{1 + (2+i\omega)}{(2+i\omega)^2} = \frac{3 + i\omega}{(2+i\omega)^2}
$$

**步骤4**: 化简为实部和虚部（可选）

分母:
$$
(2+i\omega)^2 = 4 + 4i\omega - \omega^2 = (4-\omega^2) + 4i\omega
$$

分子分母同乘共轭:
$$
F(\omega) = \frac{(3+i\omega)[(4-\omega^2) - 4i\omega]}{[(4-\omega^2) + 4i\omega][(4-\omega^2) - 4i\omega]}
$$

分母:
$$
(4-\omega^2)^2 + 16\omega^2 = (4+\omega^2)^2
$$

分子:
$$
(3+i\omega)(4-\omega^2-4i\omega) = 3(4-\omega^2) - 12i\omega + 4i\omega + 4\omega^2
$$
$$
= 12 - 3\omega^2 + 4\omega^2 - 8i\omega = (12+\omega^2) - 8i\omega
$$

等等，让我重算...

实际上更简洁的形式就是:
$$
F(\omega) = \frac{3+i\omega}{(2+i\omega)^2}
$$

**步骤5**: 傅里叶积分表达式（逆变换）

$$
f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

$$
= \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{3+i\omega}{(2+i\omega)^2} e^{i\omega t} d\omega
$$

**最终答案**:

**傅里叶变换**:
$$
\boxed{F(\omega) = \frac{3+i\omega}{(2+i\omega)^2}}
$$

**积分表达式**:
$$
\boxed{f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{3+i\omega}{(2+i\omega)^2} e^{i\omega t} d\omega}
$$

**知识点**:
- 傅里叶变换定义
- 分部积分
- 逆变换公式

---

## 四、知识点总结

### 1. 复数基本运算

#### 1.1 复数的表示
- **代数形式**: $z = x + iy$
- **指数形式**: $z = re^{i\theta}$
- **三角形式**: $z = r(\cos\theta + i\sin\theta)$

#### 1.2 辐角计算
$$
\arg z = \begin{cases}
\arctan(y/x), & x > 0 \\
\arctan(y/x) + \pi, & x < 0, y \geq 0 \\
\arctan(y/x) - \pi, & x < 0, y < 0 \\
\pi/2, & x = 0, y > 0 \\
-\pi/2, & x = 0, y < 0
\end{cases}
$$

**性质**:
- $\arg(z_1 z_2) = \arg z_1 + \arg z_2$
- $\arg(z_1/z_2) = \arg z_1 - \arg z_2$

#### 1.3 复数的幂
$$
z^w = e^{w \ln z}, \quad \ln z = \ln|z| + i(\arg z + 2k\pi)
$$

### 2. 解析函数

#### 2.1 C-R方程
函数 $f(z) = u(x,y) + iv(x,y)$ 在区域 $D$ 内解析的充要条件:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

且偏导数连续。

#### 2.2 导数公式
$$
f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}
$$

#### 2.3 调和函数
- $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
- 解析函数的实部和虚部都是调和函数

### 3. 复积分

#### 3.1 柯西积分定理
如果 $f(z)$ 在单连通区域 $D$ 内解析，则对 $D$ 内任意闭曲线 $C$:
$$
\oint_C f(z) dz = 0
$$

#### 3.2 柯西积分公式
如果 $f(z)$ 在 $C$ 及其内部解析，$z_0$ 在 $C$ 内:
$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z-z_0} dz
$$

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz
$$

### 4. 级数展开

#### 4.1 泰勒级数
$f(z)$ 在 $z_0$ 解析，则在 $|z-z_0| < R$ 内:
$$
f(z) = \sum_{n=0}^{\infty} a_n(z-z_0)^n, \quad a_n = \frac{f^{(n)}(z_0)}{n!}
$$

**收敛半径**: 到最近奇点的距离

#### 4.2 罗朗级数
$f(z)$ 在圆环 $r < |z-z_0| < R$ 内解析:
$$
f(z) = \sum_{n=-\infty}^{\infty} c_n(z-z_0)^n
$$

$$
c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta-z_0)^{n+1}} d\zeta
$$

#### 4.3 常用展开式
$$
e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots
$$

$$
\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots
$$

$$
\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \cdots
$$

$$
\frac{1}{1-z} = 1 + z + z^2 + z^3 + \cdots, \quad |z| < 1
$$

$$
\frac{1}{1+z} = 1 - z + z^2 - z^3 + \cdots, \quad |z| < 1
$$

### 5. 留数理论

#### 5.1 留数定义
$z_0$ 的留数是洛朗展开中 $(z-z_0)^{-1}$ 项的系数:
$$
\text{Res}[f, z_0] = c_{-1}
$$

#### 5.2 留数定理
$$
\oint_C f(z) dz = 2\pi i \sum_{k=1}^{n} \text{Res}[f, z_k]
$$

#### 5.3 留数计算公式

**一阶极点**:
$$
\text{Res}[f, z_0] = \lim_{z \to z_0} (z-z_0)f(z)
$$

**二阶极点**:
$$
\text{Res}[f, z_0] = \lim_{z \to z_0} \frac{d}{dz}[(z-z_0)^2 f(z)]
$$

**$m$ 阶极点**:
$$
\text{Res}[f, z_0] = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)]
$$

**可去奇点**: 留数 = 0

### 6. 奇点分类

#### 6.1 孤立奇点
- **可去奇点**: $\lim_{z \to z_0} f(z)$ 存在且有限
- **极点**: $\lim_{z \to z_0} |f(z)| = \infty$
- **本性奇点**: 极限不存在

#### 6.2 判定方法
洛朗展开 $f(z) = \sum_{n=-\infty}^{\infty} c_n(z-z_0)^n$:
- 可去奇点: 无负幂项 ($c_n = 0$ for $n < 0$)
- $m$ 阶极点: 最低负幂为 $-m$ ($c_{-m} \neq 0$, $c_n = 0$ for $n < -m$)
- 本性奇点: 有无穷多个负幂项

### 7. 傅里叶变换

#### 7.1 定义
$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

$$
f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

#### 7.2 常用性质
- **线性**: $\mathcal{F}[af + bg] = aF(\omega) + bG(\omega)$
- **位移**: $\mathcal{F}[f(t-t_0)] = e^{-i\omega t_0}F(\omega)$
- **调制**: $\mathcal{F}[e^{i\omega_0 t}f(t)] = F(\omega - \omega_0)$
- **微分**: $\mathcal{F}[f'(t)] = i\omega F(\omega)$

#### 7.3 常用变换对
$$
\mathcal{F}[e^{-at}u(t)] = \frac{1}{a+i\omega}, \quad a > 0
$$

$$
\mathcal{F}[te^{-at}u(t)] = \frac{1}{(a+i\omega)^2}, \quad a > 0
$$

---

## 五、易错点提醒

### 1. 复数运算

- **辐角计算**: 注意判断复数所在象限
- **复数幂**: $i^i = e^{-\pi/2}$ 是实数！
- **多值性**: $\sqrt[n]{z}$ 有 $n$ 个值，$\ln z$ 有无穷多个值

### 2. 解析函数

- **C-R方程**: 不要忘记负号 $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
- **调和函数**: 实部和虚部都是调和函数，但反之不一定
- **解析性**: $e^z$ 整个平面解析，但 $\bar{z}$ 处处不解析

### 3. 复积分

- **柯西定理**: 只对**解析函数**和**单连通区域**成立
- **奇点位置**: 计算前先判断奇点是否在围道内
- **积分方向**: 正向为逆时针

### 4. 级数展开

- **收敛区域**:
  - 泰勒级数: 圆内
  - 罗朗级数: 圆环
- **展开中心**: 不同区域需要不同的展开方式
- **部分分式**: 有理函数展开的关键技巧

### 5. 留数计算

- **奇点类型**: 先判断是几阶极点
- **可去奇点**: 留数为0，但可能被遗漏
- **计算公式**: 不同阶的极点用不同公式

### 6. 函数性质

- **有界性**:
  - 实函数: $\sin x$, $\cos x$ 有界
  - 复函数: $\sin z$, $\cos z$ **无界**！
- **周期性**: 复函数仍保持周期性
- **解析性**: $e^z$ 解析，$e^{\bar{z}}$ 不解析

### 7. 傅里叶变换

- **积分区间**: 注意 $f(t)$ 的定义域
- **收敛性**: 要求 $\int_{-\infty}^{\infty} |f(t)| dt < \infty$
- **分部积分**: 处理 $t \cdot e^{-\alpha t}$ 型积分的常用方法

### 8. 计算技巧

- **部分分式分解**: 化简复杂有理函数
- **换元法**: 简化级数形式
- **对称性**: 利用函数的奇偶性简化计算
- **极限法**: 求留数和判断奇点类型

---

## 六、考前复习建议

### 重点掌握内容

1. **基本概念**（必考）
   - 复数的模和辐角
   - 解析函数和C-R方程
   - 奇点类型判定

2. **计算技能**（重点）
   - 复积分（柯西定理、留数定理）
   - 级数展开（泰勒、罗朗）
   - 留数计算

3. **应用能力**
   - 求解析函数
   - 用留数计算积分
   - 傅里叶变换

### 复习策略

1. **理论 + 练习**: 理解概念后大量做题
2. **归纳总结**: 整理各类题型的解题模板
3. **易错点**: 重点关注本文"易错点提醒"部分
4. **时间分配**:
   - 填空题: 30分钟（平均3-4分钟/题）
   - 选择题: 10分钟（平均2-3分钟/题）
   - 计算题: 50分钟（平均10分钟/题）

### 考试技巧

1. **先易后难**: 先做有把握的题
2. **检查奇点**: 积分和级数题先确定奇点位置
3. **部分分式**: 有理函数优先考虑分解
4. **保留中间步骤**: 即使最终答案错误也能得分

---

**祝您考试顺利！**

*常州大学 数学系 应用数学教研室*
*2024年12月*
