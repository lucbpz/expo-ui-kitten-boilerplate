# Expo UI Kitten boilerplate

Written in React Native and wrapped with expo. This repo has been created with `expo init` command.

Then, when UI Kitten was added, the project did not compile to web and native, so the UI Kitten was downgraded to make it work (currently there is one opened issue about this).

The app has a login screen and after login, shows a navigation tab with 3 different screens.

# Running locally

1. Install the dependencies

```
$ yarn
```

2. Start expo

```
$ yarn start
```

3. Within Expo (usually http://localhost:19002), you can see the project as a web app when clicking on **Run in web browser**.

# Running in our phones

1. We must have the Expo app downloaded in order to see the compiled app running on our phone.
2. On local expo (http://localhost:19002) scan the QR code and see the magic.

> Note: if the QR code does not work probably it can be due to network issues (cannot tunnel, the devices cannot be found...) then try [publishing the expo app.](#publish-the-expo-app)

## Publish the expo app

If the app cannot be compiled in our phones when scanning the QR code, then:

1. Create an account on Expo.
2. Login with our user and password in our console:

```
$ expo login -u myUsername -p myPassword
```

3. Publish the app (it's still private and only people with the link can access)

```
$ expo publish
```

4. In our expo app in our phone, login with the user and now we can see the published project and can see it live.
