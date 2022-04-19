<div align="center">
  <h1>Send Ticket By Email 🎫</h1>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/janapc/send-ticket-by-email"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/janapc/send-ticket-by-email"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/janapc/send-ticket-by-email"/>

  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirement">Requirement</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>
</div>

## 💎 Project

This project is an API to send tickets of events by email.The target  is create tickets customizate to event that will be sended by email.

Builded using Node Js, AWS and AWS SQS through of Serverless framework.

## 📜 Requirement
To run this project your need to have:
 - account in [AWS](https://aws.amazon.com/)
 - command line AWS [AWS CLI](https://aws.amazon.com/pt/cli/)
 - command line Serverless Framework [Serverless Framework](https://www.serverless.com/framework/docs/getting-started)

Your would should have a queue SQS to run the project or you can run the command ``npm run deploy:dev`` before of run local, this script create a queue in AWS of means automatic.

Your should create a file in root of project ``config.dev.yml`` with the configurations:
  - MAIL_HOST: your mail host
  - MAIL_PORT: your mail port
  - MAIL_USER: your mail user
  - MAIL_PASS: your mail password
  - AWS_MESSAGE_GROUP: the name of a group that will go attribute the message



## 📦 Install

```sh
## install dependences
❯ npm i

## run local
❯ npm run offline

## deploy in environment dev AWS
❯ npm run deploy:dev

```

This application run in port **3000**.


## 🚀 Technologies

- nodejs
- javascript
- AWS
- AWS SQS
- serverless framework

<div align="center">

Made by Janapc 🤘 [Get in touch!](https://www.linkedin.com/in/janaina-pedrina/)

</div>