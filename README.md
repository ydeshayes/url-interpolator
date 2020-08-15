# Url interpolator

url-interpolator is a copycat of the angularjs url interpolation system

# Install

```
npm i url-interpolator
```

# Use

## Simple
``` 
import interpolator from "url-interpolator";

const params = {projectId: "myidproject", userId: "myiduser"};
const url = interpolator("https://my-app.com/api/projects/:projectId/users/:userId", params);
console.log(url); // https://my-app.com/api/projects/myidproject/users/myiduser
```

## It will not replace unknown interpolations
``` 
import interpolator from "url-interpolator";

const params = {projectId: "myidproject"};
const url = interpolator("https://my-app.com/api/projects/:projectId/users/:userId", params);
console.log(url); // https://my-app.com/api/projects/myidproject/users/:userId
```

# Build

```
  npm run build
```

# Test

```
  npm run test
```
