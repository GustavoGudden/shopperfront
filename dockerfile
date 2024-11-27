FROM node:20

WORKDIR /app

COPY  package*.json ./

COPY  . .


RUN npm install --force

RUN npm run build  

ENV NEXT_PUBLIC_GOOGLE_API=GOOGLE_API_KEY

EXPOSE 80

CMD ["npm", "run","start"]