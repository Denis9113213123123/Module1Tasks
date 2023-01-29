let url = new URL('https://www.google.com/doodles/rubiks-cube');

const funct = (Url) => {
  const obj = {
    protocol: url.protocol,
    hostname: url.host,
    child: {
      path: url.pathname,
      child:
        {
          path: url.pathname
        },
    }
  }
  return obj;
};
console.log(funct(url))
