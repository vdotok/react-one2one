# Vdotok ReactJS One-to-One Audio/Video Call

This is a demo project to demonstrate “One-to-One audio and video call” using ReactJS.

## Live Demo

Click <a href="https://d-react-one2one.vdotok.dev" title="Call Demo">here</a> to visit the live demo of VdoTok ReactJS One-to-One Audio/Video Call.

## Prerequisites:

- Node v4.x.x or later
- npm v3.x.x or later
- git version any

To verify the version of Node and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Older versions produce errors.

Click <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">here</a> to download and install the latest versions of Node and npm.

Click <a href="https://git-scm.com/downloads" target="_blank">here</a> to download and install the latest versions of git .

We recommend <a href="https://github.com/nvm-sh/nvm"> nvm </a> for managing multiple versions of node and npm.


<br/>


## Clone Repo

- Clone this **Repository URL** into new project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/react-one2one
```

- Move from you current directory i-e, **my-proj** to the **react-one2one** directory.

```shell
    cd react-one2one
```

</br>

## Sign up to get credentials i.e Project ID, and API URL.

Register at <a href="https://vdotok.com">VdoTok</a> to get **API URL** and **Project ID**.

1. Click on this link -> <a href="https://vdotok.com">https://vdotok.com</a> in your browser.

<img width="1721" alt="SignupOnVdotok" src="https://github.com/vdotok/react-one2one/assets/134290022/5c6fc74f-7c32-4e2a-b6cf-ca5be6cb1a12">

2. Click on the "TRY FOR FREE" button, this will navigate to Sign Up page, where the User is required to enter the following information: First Name > Last Name > Email > Country > Password. Select Sign Up For Free button

![My Remote Image](https://user-images.githubusercontent.com/87179594/184070989-e8b26d85-6e64-4ef3-b6d7-56449738236c.jpg)

3. After successfully sign up, user navigates to the main dashboad of VDOTOK where the user can find the ProjectID, and Api Key.

![My Remote Image](https://user-images.githubusercontent.com/87179594/184071060-9909513b-f880-4de8-9481-6ab91ae2be95.jpg)

After successful registration, you can update the existing projectID with your own projectID, given in point no. 2 in the above attached screenshot

</br>

## Add PROJECT ID, and API URL.


### For messaging in chat application, You can update the projectID by following these steps.

- Go to the file ( react-one2one -> src -> constants -> index.js ).

- Replace the **PROJECT_ID** constant with your project ID.


### Base URL

You have to update URL with your own apiBaseUrl. You can update **URL** by following these steps:

- Go to the file, ( react-one2one -> src -> constants -> index.js ), replace the const **URL** with your BaseUrl


</br>


## Install npm packages

Please refer to the above-stated npm and nvm version notes.

- Run the following command to install all the dependencies:

```shell
  npm install
```

- Now run the following command to run the project

```shell
  npm start
```

- Your application is running at **http://localhost:3000**

- Create **New Account** using Sign-up Form, and use the application

</br>

## How to Generate Build:

Follow the command below to generate a “build”

```shell
  npm run build
```


</br>






