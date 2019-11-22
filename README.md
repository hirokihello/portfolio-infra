#### what this is?
A. cdk of my portfolio site's infra

typescriptを使用したCDKの、ポートフォリオ用のインフラ設定ファイルです。

route53+s3+cloudfrontの設定になっています。

circleCIでデプロイを想定しています。

使用する際環境変数の設定をする必要があります。

my portfolio → https://hirokihello.xyz
my portfolio(github) → https://github.com/hirokihello/portfolio

#### build

ローカルでビルドの場合
```
cp dotenv.dist .env
npm install
npm run build
cdk deploy
```

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
