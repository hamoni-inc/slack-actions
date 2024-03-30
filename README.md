# ☕ Slack for GitHub Actions
SlackにWebHookを使ってメッセージを送るシンプルなGitHub Actions🙄

## Usage
with欄に"webhook"にSlackのWebHookURL、"message"に送りたい文字を指定するだけ🧻

```yaml
name: any actions
on: [push]
jobs:

  build:
    name: SendMessage
    runs-on: ubuntu-latest
    steps:
    - uses: hamoni-inc/slack-action@main
    - name: send to slack
      with:
        webhook: "https://slack..."
        message: "Hello World"
        username: "User 123"
        icon: "https://hamoni.jp/img/neko.png"
```

## Input variables
指定可能な変数

- webhook
  - SlackのWebHookURLを指定します。ここに送信されます。
- message
  - 送りたいメッセージを指定します。
- username
  - ユーザー名を指定します。しない場合「User」になります。
- icon
  - 送信者のアイコンをURLで指定します。指定しない場合、猫になります。