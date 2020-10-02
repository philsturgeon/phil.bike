export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  urlTitle: string;
  twitter?: string;
  instagram?: string;
  strava?: string;
  komoot?: string;
  offset?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on tinyletter and then create an embeddable signup form. this is the form action
   */
  tinyletterAction?: string;
}

const config: WebsiteConfig = {
  logo: '',
  title: 'Phil Sturgeon',
  urlTitle: 'Phil.Bike',
  description: 'The Misadventures of Crashy McCiderface, Going for every country in Europe',
  coverImage: 'img/blog-cover.jpg',
  lang: 'en',
  siteUrl: 'https://phil.bike',
  twitter: 'https://twitter.com/philsturgeon',
  instagram: 'https://instagram.com/philsturgeon',
  offset: 'https://ecologi.com/philsturgeon',
  strava: 'https://www.strava.com/athletes/philsturgeon',
  komoot: 'https://www.komoot.com/user/294561424155',
  showSubscribe: true,
  tinyletterAction: 'https://tinyletter.com/CrashyMcCiderface',
};

export default config;
