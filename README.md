# 🔢 Decimal to Binary Conversion

> 💡 A simple shortcut method to convert **Decimal Numbers → Binary Numbers** using logical thinking and a `while` loop.

---

## 🚀 Example: Convert 20 to Binary

### 📌 Binary Place Values

```text
 64   32   16   8   4   2   1
  ↓    ↓    ↓   ↓   ↓   ↓   ↓
  0    0    1   0   1   0   0
```

### 🧮 Step-by-Step

```text
20 - 16 = 4   → 1
4  - 4  = 0   → 1
8 does not fit → 0
Remaining places → 0
```

Therefore:

```text
20 (Decimal) = 10100 (Binary)
```

---

## 🔄 Why Use a `while` Loop?

We don't know in advance how many steps are required.

The number of steps depends on the input:

| Decimal |   Binary   |
| :-----: | :--------: |
|   `5`   |    `101`   |
|   `20`  |   `10100`  |
|  `132`  | `10000100` |

A `while` loop allows us to:

```text
START
  ↓
Check the value
  ↓
Process the value
  ↓
Update the value
  ↓
Is value 0?
 ↙       ↘
NO       YES
 ↓        ↓
Repeat   STOP
```

### 💻 Basic Logic

```javascript
while (number > 0) {
    // Check the binary value
    // Update the remaining number
}
```

---

## 🧠 What I Learned

* 🔢 Decimal to Binary conversion
* 🔄 How `while` loops work
* 🧩 Breaking a problem into smaller steps
* 💡 Improving logical thinking
* 💻 Understanding how computers represent numbers

---

### ⭐ Key Takeaway

> **A `while` loop is useful when we don't know exactly how many times a process needs to run.**

**Keep Learning • Keep Coding • Keep Improving 🚀**
