# Static File Serving

Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).

For example, if you add me.png inside public, the following code will access the image:

```jsx
import Image from 'next/image'

function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />
}

export default Avatar
```

This folder is also useful for robots.txt, favicon.ico, Google Site Verification, and any other static files (including .html)!

**Note: Be sure to not have a static file with the same name as a file in the pages/ directory, as this will result in an error.**