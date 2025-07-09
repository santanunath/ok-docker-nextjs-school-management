# School Management

## Developed by: Lama dev

## Tested: OK (on my Rpi 3b+)

## No DB. Static data in array

## Tech Stack
- Nextjs v14.2.11 Reactjs v18.2.0
- Nodejs (which version, see in Dockerfile)
      
## Nextjs v14/15 application structure 
'public' and 'src/app' folders are created automatically.   
- all 'pages' in nextjs must be defined inside folder /src/app/
- all APIs in nextjs must be defined inside folder /src/app/api/
- all 'ui components' are defined inside folder /src/components/ 
- db connection is defined inside folder /src/dbConfig/
- all db model schema are defined inside folder /src/models/
- all utilities (tokens, mailers) are defined inside folder /src/helpers/



## Getting Started

First, run this 

```bash
npm i
# or
npm install 
```


Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

http://localhost:3000/sign-in
http://localhost:3000/student
http://localhost:3000/admin
http://localhost:3000/parent
http://localhost:3000/teacher
http://localhost:3000/list

Note: u can replace 'localhost' with IPaddress of your Host computer.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Lama Dev Youtube Channel](https://youtube.com/lamadev) 
- [Next.js](https://nextjs.org/learn)
