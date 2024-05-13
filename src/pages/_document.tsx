import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Explore Varun's portfolio showcasing his expertise in web development, design, and digital innovation. Discover innovative projects, creative solutions, and a passion for crafting exceptional user experiences. Contact Varun today to collaborate on your next project."
        />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="varunraja" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300&family=Jost&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <div className="noise"></div>
        <NextScript />
      </body>
    </Html>
  );
}
