import Head from 'next/head';

interface Props {
  title?       : string;
  description? : string;
  eyecatch?    : string;
  url?         : string;
  tileImage?   : string;
  tileColor?   : string;
  twCard?      : string;
  twId?        : string;
  favicon?     : string;
}

export default ({
  title       = "ヘンゼル Hansel　プログラミング学習なら、まずはヘンゼル",
  description = "Hansel",
  eyecatch    = "/img/eyecatch/default.png",
  url         = "./",
  tileImage   = "/img/logo/favicon.png",
  tileColor   = "#000",
  twCard      = "summary_large_image",
  twId        = "@hansel_jp",
  favicon     = "/img/logo/favicon"
}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="msapplication-TileImage" content={tileImage} />
      <meta name="msapplication-TileColor" content={tileColor}/>
      <meta name="google" content="notranslate" />
      <link rel="icon" href={favicon + ".png"} sizes="16x16" type="image/png" />
      <link rel="icon" href={favicon + ".png"} sizes="32x32" type="image/png" />
      <link rel="icon" href={favicon + ".png"} sizes="48x48" type="image/png" />
      <link rel="icon" href={favicon + ".png"} sizes="62x62" type="image/png" />
      <link rel="shortcut icon" href={favicon + ".ico"} type="image/x-icon" />
      <link rel="apple-touch-icon-precomposed" href={favicon + ".png"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={eyecatch} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content={twCard} />
      <meta name="twitter:site" content={twId} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={eyecatch} />
      <link rel="canonical" href={url} />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    </Head>
  );
};