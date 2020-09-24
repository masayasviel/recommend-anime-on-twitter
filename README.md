# recommend-anime-on-twitter

2020年のアニメタイトル一覧(2020/09/24現在)を、[アニメイトタイムズ](https://www.animatetimes.com)様のページからクロールしてJSONにまとめた。

# Requirement

- Node.js 14.3.0

# Installation

```bash
npm install
```

# Usage

```bash
node scraping.js
```

`url`を欲しいクールに書き換える。

```json
{
    "winter": "https://www.animatetimes.com/tag/details.php?id=10978",
    "spring": "https://www.animatetimes.com/tag/details.php?id=5228",
    "summer": "https://www.animatetimes.com/tag/details.php?id=5806",
    "autumn": "https://www.animatetimes.com/tag/details.php?id=5947"
}
```

# Note

クールによってはタイトル全てを取ってこれないのでループ回数の調整が必要です。